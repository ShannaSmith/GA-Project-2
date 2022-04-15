const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;

//Require your User Model here!
const User = require("../models/user");
// configuring Passport!
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK,
    },
    // The verify callback function
    function (accessToken, refreshToken, profile, cb) {
      // a user has logged in via OAuth!
      console.log(profile);
      console.log('this profile ^ from google---------------------');
      User.findOne({googleId: profile.id }, function (err, user) {
        // refer to the lesson plan from earlier today in order to set this up

        if (user) return cb(null, user);
        if (err) return cb(err);
        User.create(
          {
            name: profile.displayName,
            googleId: profile.id,
            email: profile.emails[0].value,
            avatar: profile.photos[0].value,
          },
          function (err, createdUser) {
            if (createdUser) return cb(null, createdUser);
            if (err) return cb(err);
          }
        );
      });
    }
  )
);
passport.serializeUser(function (user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function (userId, cb) {
  // Find your User, using your model, and then call done(err, whateverYourUserIsCalled)
  // When you call this done function passport assigns the user document to req.user, which will
  // be availible in every Single controller function, so you always know the logged in user
  User.findById(userId, function (err, user) {
    if (err) return cb(err);
    cb(null, user);
  });
});
