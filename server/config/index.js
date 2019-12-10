const SERVER_ENV = require('./config');
const dotenv = require('dotenv');
dotenv.config();

var environment = process.env.NODE_ENV || 'development';
if (process.env.TEST_ENV==='test') {
    environment = 'test';
}
console.log("QUACK environment = ", environment);

var serverConf = SERVER_ENV[environment];
module.exports = { serverConf, environment };
