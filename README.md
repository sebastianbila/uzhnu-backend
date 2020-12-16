# uzhnu-backend

API_URL = https://uzhnu-backend.herokuapp.com

## Available routes 
**login**: api/auth/login (POST).

**currentUser**: api/user/currentUser (GET). Add Header Authorization (eg. Bearer: ...token)

**news** api/news/ (GET). If provided *?limit*, news will be returned in the specified amount

**poll** 

      1. /api/poll (GET).
      2. /api/poll/userVoted/:userId (GET). Pass userId to params. Returns boolean value
      2. /api/poll/votedResult (GET). Returns object with results

**apartment** api/apartment?name=*yourname* (GET). replace *yourname* with your user name
  
  
