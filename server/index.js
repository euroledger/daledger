const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const { serverConf, environment } = require('./config');
const { keys, port } = serverConf;
const log4js = require('log4js');
const jsonServer = require('json-server');
require('./models/User');
require('./services/passport'); // run the passport.js stuff

var logger = log4js.getLogger('index.js');

// log4js.configure({
//     appenders: {
//         file: {
//             type: 'file',
//             filename: 'logs/server.log',
//             maxLogSize: 10485760,
//             numBackups: 3
//         }
//     },
//     categories: { default: { appenders: ['file'], level: 'debug' } }
// });

// logger.level = 'all';

logger.info('Starting EXPRESSJS server...(environment=' + environment + ')');
mongoose.connect(keys.mongoURI).catch(error => logger.error("Failed to connect: ", error));

const app = express();

// app.use => middlewares
app.use(bodyParser.json());

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

app.post('/api/logger', function (req, res) {
    const { user, level, text } = req.body;

    logger.info(`[${user}] [${level}] ${text}`);

    res.send('ok');
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


// You may want to mount JSON Server on a specific end-point, for example /api
// Optiona,l except if you want to have JSON Server defaults
// server.use('/api', jsonServer.defaults()); 
// app.use(jsonServer.bodyParser);
app.use(jsonServer.router('projects.json'));


app.listen(port, () => {
    logger.info(`Server running on port ${port} ...`);
});
