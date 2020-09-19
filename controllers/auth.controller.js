const passport = require('passport');
const GoogleStrat = require('passport-google-oauth20').Strategy;
const FacebookStrat = require('passport-facebook').Strategy;
const LocalStrat = require('passport-local').Strategy;
const keys = require('../config/keys');//We have created keys.js to store our sensitive information for our app. This file is added to .gitignore
const User = require('../models/user.model.js');

passport.serializeUser(function(user, cb) {
    cb(null, user);
});
  
passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
});

//AUTHENTICATION CHECK ---- working
const authCheck = ((req, res, next) => {
    if (!req.user) {
      //if user not logged in
      res.redirect('/api');
      console.log('>>> authCheck redirect <<<')
    } else next();
  });

//REGISTER LOCAL USER --- working
const registerUser = (req, res) => {
    const {username="Dylan Kron", email="dylankron@live.com", password="password123" } = req.body;
    console.log('HIT registerUser()' + req.body)
    User.findOne({ email }).exec((err, user) => {
        if (user) {
            return res.status(400).json({
                message: 'Local User already exists'
            }) 
        }
        // Create new User
        const newUser = new User({ username, email, password });
        newUser.save();
        return res.status(201).json({
            message: 'Local User created succesfully! Please signin',
            newLocalUser
        });
    })
};

//LOCAL STRATEGY -- not working
passport.use(new LocalStrat({
    email: "nikitabatlis@live.com",
    password: "password123"
    },
    function(email, password, done) {
        User.findOne({ email }, function(err, user) {
            if (err) { return done(err) }
            if (!user) {
                return done(null, false, { message: 'Incorrect email.' });
            }
            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
      });
    }
));

//GOOGLE STRATEGY -- not working, keeps logging in same currentUser
passport.use(new GoogleStrat({
        //options for stratergy
        callbackURL: 'http://localhost:3001/api/login/google/redirect',
        clientID: keys.google.clientID,
        clientSecret: keys.google.clientSecret,
        profileFields: ['displayName', 'email']
    }, 
    (accessToken, refreshToken, profile, done) => {
        console.log('Google Passport callback function fired');
        User.findOne({ email: profile.email }).then((currentUser) => {
            if (currentUser) {
                //if we have this user in our db
                console.log('current GOOGLE user ' + currentUser);
                done(null, currentUser);
            } else {
                //else save new user to DB 
                new User({
                    username: profile.displayName,
                    email: profile.email,
                }).save().then((profile) => {
                    console.log('new GOOGLE user ' + profile);
                    done(null, profile);
                });
            }
        });

}));

//FACEBOOK STRATEGY -- not working, error: 500 BLOCKED_BY_CLIENT
passport.use(new FacebookStrat({
        //options for stratergy
        callbackURL: 'http://localhost:3001/api/login/facebook/redirect',
        clientID: keys.facebook.appID,
        clientSecret: keys.facebook.appSecret,
        profileFields: ['name', 'email']
      },
    (accessToken, refreshToken, profile, done) => {
        console.log('Facebook Passport callback function fired');
        User.findOne({ email: profile.email }).then((currentUser) => {
            if (currentUser) {
                //if we have this user in our db
                console.log('new User ' + currentUser);
                done(null, currentUser);
            } else {
                //else save new user to DB  
                const { email, name } = profile._json;
                const userData = { 
                    username: name, 
                    email: email,
                };
                new User(userData).save();
                done(null, profile);           
            }
        });

}));

module.exports = {
    registerUser,
    authCheck
}
