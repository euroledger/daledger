const SERVER_ENV = {
    'production': { port: process.env.PORT, keys: require('./prod') },
    'test': { port: process.env.PORT, keys: require('./test') }
};

module.exports = SERVER_ENV;
