<!-- Answers to the Short Answer Essay Questions go here -->

1.  Describe Middleware, Sessions (as we know them in express), bcrypt and JWT.

Middleware functions are functions that act as a glue between two layers of software.

with session in express you assign the client an ID and it makes all further requests using that ID. Information associated with the client is stored on the server linked to this ID.

bcrypt is a password hashing function

JWT - JSON web tokens is an open standard for creating access tokens that assert some number of claims

2.  What does bcrypt do in order to prevent attacks?

bcrypt salts the password and hashes it as well! 

3.  What are the three parts of the JSON Web Token?

jwt has 3 parts 1. header 2. payload 3. signature 





