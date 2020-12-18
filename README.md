# uzhnu-backend

API_URL = https://uzhnu-backend.herokuapp.com

## Available routes 
**login**: api/auth/login (POST).

**user**

    1. api/user/currentUser (GET). Add Header Authorization (eg. Bearer: ...token)
    2. api/user/resetPassword (POST). Add email to body.
    3. api/user/:userId (GET). Return detail user object

**news**

    1. api/news/ (GET). Pagination works on this route. Query: *limit* *page*. Returrn news and pagination object
    2. api/news/:id (GET). Return news detail. Need to provide id


**poll** 

      1. /api/poll (GET).
      2. /api/poll/userVoted/:userId (GET). Pass userId to params. Returns boolean value
      3. /api/poll/votedResult (GET). Returns object with results

**apartment** 

      1. api/apartment?name=*yourname* (GET). replace *yourname* with your user name
      2. /api/apartment/changeIndicator (POST). Required body [name (mean apartment name), nameService, currentValue]

**tas**

      1. api/tas (GET). Getting all tas
      2. api/tas?name=*yourname* (GET). replace *yourname* with your tas name

**osbb** api/osbb (GET). Get all osbb

**document** api/document (GET). Get all documents

**announcement**

      1. api/announcement (GET). Pagination works on this route. Query: *limit* *page*. Returrn news and pagination object
      2. api/announcement/:id (GET). Get announcement object
      3. api/announcement/comments/:id (GET). *:id* - mean announcementId, to get all comments
      4. api/announcement/comments/:id/nested/:commentId (GET). *:id* - mean announcementId, *:commentId* - mean id of comment of announcement
      5. api/announcement (POST). Required body: [title, text, author, category]
      6. api/announcement/addComment (POST). Required body: [announcementId, text, author]
      7. api/announcement/addNestedComment (POST). Required body: [announcementId, commentId, text, author]


    
