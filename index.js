require('dotenv').config(); // load .env variables

const server = require('./api/server.js');

const port = process.env.PORT || 6500;
server.listen(port, () => {
    console.log(`=== Server listening on port ${port}`);
});