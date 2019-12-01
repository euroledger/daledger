const SERVER_ENV = {
    'production': { port: process.env.PORT },
    'development': { port: 5000 }
};

module.exports = SERVER_ENV;
