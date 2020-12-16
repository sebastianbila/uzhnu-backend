# uzhnu-backend

API_URL = https://uzhnu-backend.herokuapp.com

## Available routes 
**login**: api/auth/login (POST).

**currentUser**: api/user/currentUser (GET). Add Header Authorization (eg. Bearer: ...token)

**news**

    1. api/news/ (GET). Pagination works on this route. Query: *limit* *page*. Returrn news and pagination object
    2. api/news/:id (GET). Return news detail. Need to provide id


**poll** 

      1. /api/poll (GET).
      2. /api/poll/userVoted/:userId (GET). Pass userId to params. Returns boolean value
      2. /api/poll/votedResult (GET). Returns object with results

**apartment** api/apartment?name=*yourname* (GET). replace *yourname* with your user name

**tas** api/tas?name=*yourname* (GET). replace *yourname* with your user name

**osbb** api/osbb (GET). Get all osbb

  
  
