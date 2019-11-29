const SERVER_ENV = require('./config');

var environment = process.env.NODE_ENV || 'development';

var serverConf = SERVER_ENV[environment];

module.exports = serverConf;
