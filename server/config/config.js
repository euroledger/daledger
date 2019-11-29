const SERVER_ENV = {
    'production': { port: process.env.SERVER_PORT },
    'development': { port: 5000 }
};

module.exports = SERVER_ENV;
