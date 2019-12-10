const dotenv = require('dotenv');
const log4js = require('log4js');
var logger = log4js.getLogger('config.js');

var environment = process.env.NODE_ENV || 'development';
if (process.env.TEST_ENV === 'test') {
    environment = 'test';
}
if (environment === 'development') {
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
} else {
    log4js.configure({
        appenders: { out: { type: 'stdout' } },
        categories: { default: { appenders: ['out'], level: 'debug' } }
    });
}

logger.level = 'all';
dotenv.config();
logger.info('STARTING...');

let SERVER_ENV;
if (environment === 'development') {
    SERVER_ENV = require('./configdev');
} else {
    SERVER_ENV = require('./config');
}
var serverConf = SERVER_ENV[environment];
module.exports = { serverConf, environment };
