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

**tas**

      1. api/tas (GET). Getting all tas
      2. api/tas?name=*yourname* (GET). replace *yourname* with your tas name

**osbb** api/osbb (GET). Get all osbb

**document** api/document (GET). Get all documents

**announcement**

      1. api/announcement (GET). Pagination works on this route. Query: *limit* *page*. Returrn news and pagination object
      2. api/announcement/comments/:id (GET). *:id* - mean announcementId, to get all comments
      2. api/announcement/comments/:id/nested/:commentId (GET). *:id* - mean announcementId, *:commentId* - mean id of comment of announcement



  
  
