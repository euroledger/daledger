const SERVER_ENV = {
    'production': { port: process.env.PORT, keys: require('./prod') },
    'test': { port: process.env.PORT, keys: require('./test') },
    'development': { port: 5000, keys: require('./dev') }
};

module.exports = SERVER_ENV;
