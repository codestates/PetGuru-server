var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var googleCredentials = require('../config/google.json')
const { User } = require('../models/');



// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
module.exports = () => {
    passport.use(new GoogleStrategy({
        clientID: "527638675076-56ddrbvjdjgpquaq2l7s6q3go94s3k9q.apps.googleusercontent.com",
        clientSecret: "NxX9FjP0dfVQIzGG3-elSpaG",
        // clientSecret: googleCredentials.web.client_secret,
        callbackURL: "http://localhost:3000/auth/google/callback",
        passReqtoCallback: true,
    },

    function(accessToken, refreshToken, profile, done) {
        console.log(accessToken)
        console.log(refreshToken)
        console.log(profile)
 

        User.create({
            user_name: profile._json.name,
            email: profile._json.email,
            created_at: '1234',
            updated_at: '12345'
        });
    },


    // function(accessToken, refreshToken, profile, done) {
    //     console.log('ㅋㅋㅋㅋ')
    //     console.log(accessToken)
    //     console.log(refreshToken)
    //     console.log(profile)


        
    //     User.findOrCreate({where : { social_google_id: profile.id } })
    //         .then(function (err, user) {
    //         return done(err, user)
    //     })}
    ));
}

