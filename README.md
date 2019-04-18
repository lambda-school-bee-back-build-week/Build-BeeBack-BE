# We'll Bee Back

 This is the back-end for the "We'll Bee Back" project for Lambda School's build week. This project was built on express. Tests are done in Jest, with the request function from SuperTest.

## Dependencies
* bcryptjs
* cors
* dotenv
* express
* helmet
* jest
* jsonwebtoken
* knex
* knex-cleaner
* node-fetch
* pg
* sqlite3
* supertest

##Dev Dependencies
* cross-env
* nodemon

## Requests

**/api/register**
|URI|TYPE| SEND|RECIEVE||---|----|-----|-------||/api/register |POST |`username` `password` `email`|new user id|

**/api/login**
|URI|TYPE| SEND|RECIEVE||---|----|-----|-------||/api/login |POST  |`username` `password`|message, token|

**/api/neonic2**
|URI|TYPE| SEND|RECIEVE||---|----|-----|-------||/api/neonic2|GET|not applicable| data from neonic table, including bee colony data and pesticide data||/api/neonic2/:year|GET|not applicable|data from neonic table, including bee colony data and pesticide data for the specified year|

**/api/state-charting**|URI|TYPE| SEND|RECIEVE||---|----|-----|-------||/api/state-charting|GET|not applicable|Data by state, with years as the x value, and bee colony data and pesticide data for the y values|

**/api/users RESTRICTED: MUST SEND TOKEN IN THE HEADERS**
|URI|TYPE| SEND|RECIEVE||---|----|-----|-------||/api/users/:id |DELETE |`token`|message||/api/users/:id |PUT|`token`|updated user info||/api/users/:id |GET|`token`|the user at the id|