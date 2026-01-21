const router = require('express').Router();
const  User  = require('../../models/User');
const { signToken } = require('../../utils/auth');
 
// POST /api/users/register - Create a new user
router.post('/register', async (req, res) => {

  try {

    console.log('Register Body:',req.body);
    const user = await User.create(req.body);
    const token = signToken(user);
    res.status(201).json({ token, user });
  } catch (err) {
    console.log('Register error', err);
    res.status(400).json({
        message: err.message,
        code: err.code,
        keyValue: err.keyValue,
        errors: err.errors

    })
  }
});
 
// POST /api/users/login - Authenticate a user and return a token
router.post('/login', async (req, res) => {
    console.log("REGISTER req.body:", req.body);
  const user = await User.findOne({ email: req.body.email });
 
  if (!user) {
    return res.status(400).json({ message: "Can't find this user" });
  }
 
  const correctPw = await user.isCorrectPassword(req.body.password);
 
  if (!correctPw) {
    return res.status(400).json({ message: 'Wrong password!' });
  }
 
  const token = signToken(user);
  res.json({ token, user });
});
 
module.exports = router;
