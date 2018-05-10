var passportJWT = require("passport-jwt");
var passport	= require('passport');
var JwtStrategy = passportJWT.Strategy;
var ExtractJwt = passportJWT.ExtractJwt;

var User = require('../app/models/user');
var config = require('./config'); // get db config file

module.exports = function (passport) {
    var jwtopts = {};
    jwtopts.jwtFromRequest = ExtractJwt.fromAuthHeader()
    jwtopts.secretOrKey = config.secret;
    passport.use('local-login', new JwtStrategy(jwtopts, (jwt_payload, done) => {
        console.log("Passport use"+jwt_payload);
        const db = new Database();
        db.query("select * from `user_info` where UserID="+jwt_payload.id, (err, rows) => {
            if (err) {
                return done(err);
            }
            if (!rows.length) {
                return done(null, false, req.flash('loginMessage', 'No user found.'));
            }
            if (!(rows[0].password == password))
                return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata

            // all is well, return successful user
            return done(null, rows[0]);

        })

    }));
};