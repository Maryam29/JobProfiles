var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var passport = require("passport");
var md5 = require('md5');
var cookieParser = require('cookie-parser');

// pass passport for configuration
const express = require('express');
const session = require('express-session');
var dateFormat = require('dateformat');
const http = require('http');
const path = require('path');
const _ = require('lodash');
const { Database } = require('./server/config.js');
var LocalStrategy   = require('passport-local').Strategy;
const app = express();
//require('./server/passportconfig.js')(passport);

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser('SecretKey')); //read cookies (needed for auth)
app.use(bodyParser.json());
// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.
const cookieExpirationDate = new Date();
console.log(cookieExpirationDate.toString());
const cookieExpirationDays = 3;
cookieExpirationDate.setMinutes(cookieExpirationDate.getMinutes() + cookieExpirationDays);
console.log(cookieExpirationDate.toString());
app.use(session({
    secret: 'SecretKey', // must match with the secret for cookie-parser
    resave: true,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        maxAge: 2 * 60 * 1000 // use expires instead of maxAge
    },
    rolling: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        console.log("Inside serialization");
        done(null, user.UserID);
    });

    // used to deserialize the user
    passport.deserializeUser(function (id, done) {
        console.log("Inside deserialization");
        done(null,{userid:1,name:"maryam"});
    });

    passport.use('login', new LocalStrategy({
        passReqToCallback: true
    },
    (req, username, password, done) => { // verification function
            const db = new Database();
            db.query("select * from `user_info` where UserID='" + username + "'", (err, rows) => {
                if (err) {
                    return done(err);
                }
                if (!rows.length) {
                    return done(null, false,  'No user found.');
                }
                if (!(rows[0].Password == md5(password))) {
                    return done(null, false,  ' Wrong password.'); //create the loginMessage and save it to session as flashdata
                }
                return done(null, rows[0]);
                // all is well, return successful user
            });
        }));


    passport.use('signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'userid',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req,userid, password, done) {
        userid = req.body.userid;
        password = req.body.password;
                 // User.findOne wont fire unless data is sent back
        process.nextTick(function() {
            // find a user whose email is the same as the forms email
            // we are checking to see if the user trying to login already exists
            const db = new Database();
            db.query("select * from `user_info` where UserID ='" + userid + "'", (err, rows) => {
                if (err) {
                    return done(err);
                }
                if (rows.length) {
                    return done(null, false, 'You are already registered. Please Log in');
                }
            else {
                //if there is no user with that email,create the user
            var newUserMysql = new Object();
            newUserMysql.userid  = userid;
            newUserMysql.password = md5(password); // use the generateHash function in our user model
            
            var insertQuery = "INSERT INTO user_info ( userID, password ) values ('"+ userid +"','"+ md5(password) +"')";
            db.query(insertQuery,function(err,rows){
                if(err){
                    return done(err);
                }
                else{
                    return done(null, newUserMysql);
                }
            
            }); 
            }
        });
    });
}));
//app.use(flash()); // use connect-flash for flash messages stored in session

// app.get('/DrugDetails/:gcn/:type', ensureAuthenticated, async (req, res) => {
//     var gcn = req.params.gcn;
//     var type = req.params.type;
//     if (gcn == null || type == null) {
//         return res.status(400).send();
//     }
//     if (type.toUpperCase() === "Generic".toUpperCase())
//         type = "G";
//     else
//         type = "B";
//     const db = new Database();
//     var sql_DrugDetail = "SELECT * from fdb where GCN='" + gcn + "'  AND DrugType='" + type + "' LIMIT 0,1";
//     var rows = await db.query(sql_DrugDetail);
//     //Database.close();
//     return res.send(rows);
// });
 
/* Check for Session */
app.get('/isSessionOpen', (req, res) => {
    console.log("Inside Session Open")
    console.log(req.session.cookie.expires.toString());
    console.log(req.isAuthenticated());
    console.log(req.user);
    if (req.isAuthenticated()) {
        return res.send({ isSessionOpen: true });
    }
    else {
        return res.send({ isSessionOpen: false });
    }
})

  /* Handle Login POST */
  app.post('/login', (req, res, next) => {
      passport.authenticate('login', {
        successRedirect: '/',
        failureRedirect: '/login',
        failureFlash: true
    }, (err, user, info) => {
        if (err) {
            return res.status(400).json({
                message: info,
                user: user
            });
        }
        else if(!user){
            return res.status(201).json({
                message: info,
                user: user
            });
        }
        else {
            req.login(user, { session: true }, (err) => {
                if (err) {
                    return res.send(err);
                }
                console.log("Inside Login");
                console.log(req.isAuthenticated());
                console.log(req.user);
                console.log(req.session);
                console.log(req.session.cookie.expires.toString());
                res.send(user);
            });
            
        }
    })(req, res);
});
 
  /* Handle Registration POST */
  /* Handle Login POST */
  app.post('/register', (req, res, next) => {
    passport.authenticate('signup', {
        successRedirect: '/',
        failureRedirect: '/register',
        failureFlash: true
    }, (err, user, info) => {
        if (err) {
            return res.status(400).json({
                message: info,
                user: user
            });
        }
        else if(!user){
            return res.status(201).json({
                message: info,
                user: user
            });
        }
        else {
            req.login(user, { session: true }, (err) => {
                if (err) {
                    return res.send(err);
                }
                console.log(req.isAuthenticated());
               // var payload = { id: user.UserID };
                //var token = jwt.sign(payload, "secretOrKey");
                req.session.touch();
                console.log(req.session);
                res.send(user);
            });
        }
    })(req, res);
});
 
app.get('*', (req, res) => {
    console.log("Inside *")
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost:${port}`));