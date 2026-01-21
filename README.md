# Secure Records Storage
## Andrea E
*1/21/26*

### Scope:

You have been given a pre-existing “Notes” API. It has full CRUD (Create, Read, Update, Delete) functionality and is protected by authentication middleware, meaning only logged-in users can access the endpoints. However, there’s a significant flaw: any authenticated user can view, update, or delete any note, regardless of who created it.

Your task is to implement authorization logic to ensure that users can only access and manage the notes they personally own.