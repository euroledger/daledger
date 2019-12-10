const SERVER_ENV = require('./config');
const dotenv = require('dotenv');
var logger = log4js.getLogger('config.js');
console.error("STARTING...");
console.error("TEST_ENV = ", process.env.TEST_ENV);
dotenv.config();

var environment = process.env.NODE_ENV || 'development';
if (process.env.TEST_ENV==='test') {
    environment = 'test';
}
console.error("QUACK environment = ", environment);

var serverConf = SERVER_ENV[environment];
module.exports = { serverConf, environment };
