const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connection.once('open', ()=>{
    console.log('MongoDB is connected');
})
mongoose.connect(process.env.MONGO_URI);
module.exports = mongoose.connection;