const serverConf = require('./config');
const express = require('express');
const bodyParser = require('body-parser');
const log4js = require('log4js');

var logger = log4js.getLogger('index.js');
logger.level = 'all';
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

console.log('Starting EXPRESSJS server...');

app.post('/api/logger', function(req, res) {
    const logMsg = JSON.parse(req.body.data);
    console.log('WE ARE IN /api/logger');
    if (logMsg.level === 'ERROR') {
        logger.error(`[${logMsg.user}] [ERROR] ${logMsg.text}`);
    }
    res.send('IT WORKED!!');
});

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets like main.js or main.cc
    app.use(express.static('client/build'));

    // Express will serve up the index.html file if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


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

logger.trace('Entering cheese testing');
logger.debug('Got cheese.');
logger.info('Cheese is Gouda.');
logger.warn('Cheese is quite smelly.');
logger.error('Cheese is too ripe!');
logger.fatal('Cheese was breeding ground for listeria.');
app.listen(serverConf.port, () => {
    logger.info(`Server running on port ${serverConf.port} ...`);
});
