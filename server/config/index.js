const dotenv = require('dotenv');
const log4js = require('log4js');
var logger = log4js.getLogger('config.js');

log4js.configure({
    appenders: {
        file: {
            type: 'file',
            filename: 'logs/server.log',
            maxLogSize: 10485760,
            numBackups: 3
        }
    },
    categories: { default: { appenders: ['file'], level: 'debug' } }
});

logger.level = 'all';
dotenv.config();
console.log('STARTING...');

var environment = process.env.NODE_ENV || 'development';
if (process.env.TEST_ENV === 'test') {
    environment = 'test';
}
console.log('QUACK environment = ', environment);

let SERVER_ENV;
if (environment === 'development') {
    SERVER_ENV = require('./configdev');
} else {
    SERVER_ENV = require('./config');
}
var serverConf = SERVER_ENV[environment];
module.exports = { serverConf, environment };
