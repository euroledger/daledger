const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { serverConf } = require('../config');
const keys = serverConf.keys;
const mongoose = require('mongoose');
const User = mongoose.model('users'); // single argument... pull model out
const log4js = require('log4js');
var logger = log4js.getLogger('passport.js');

// this saves the user id to session (cookie) storage (could be google, facebook, linkedin or whatever)
passport.serializeUser((user, done) => {
    done(null, user.id); // id assigned to record in MongoDB
});

passport.deserializeUser((id, done) => {
    // find the user with given id in MongoDB
    User.findById(id).then(user => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy(
        {
            clientID: keys.googleClientID,
            clientSecret: keys.googleClientSecret,
            callbackURL: '/auth/google/callback',
            proxy: true
        },
        async (accessToken, refreshToken, profile, done) => {
        
            logger.info('We are in callback');
            const existingUser = await User.findOne({ googleId: profile.id }); // query db to see if user already exists
            logger.info('Got user');
            if (existingUser) {
                // TODO retrieve fabric keys from wallet here...if they don't exist reject this login...

                logger.info('Google authentication ok, id = ', profile.id);
                return done(null, existingUser);
            }
            // if we have registration info (in state store?) then call Fabric to enroll and register
            // new keys...store in wallet and then save info in MongoDB
            // otherwise reject "you must register ...etc"
            const user = await new User({ googleId: profile.id }).save();

            done(null, user);
        }
    )
);
