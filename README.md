# Secure Records Storage
## Andrea E
*1/21/26*

### Scope:

You have been given a pre-existing “Notes” API. It has full CRUD (Create, Read, Update, Delete) functionality and is protected by authentication middleware, meaning only logged-in users can access the endpoints. However, there’s a significant flaw: any authenticated user can view, update, or delete any note, regardless of who created it.

Your task is to implement authorization logic to ensure that users can only access and manage the notes they personally own.

For a very long time I was running into issues with my middleware, i continuously got a 400 error and i had to hone in and customize console logs to errors to dissect exactly what was going on. Now that that is resolved I run into more issues with my middleware now causing 500 errors and returning a doc file. This is also a similiar issue that I was running into on the last assignment. So I am going to do my best to debug but when testing I was able to register users, and to create as users. 