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
const LocalStrategy = require('passport-local').Strategy;
const app = express();

const { Database } = require('./server/config.js');
const api = require('./server/routes/api');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.

passport.serializeUser(function (user, done) {
    done(null, user.UserID);
});

passport.deserializeUser(function (id, done) {
    user = {
        username: "x"
    }
    done(null, user)
});


passport.use('login', new LocalStrategy({
    passReqToCallback: true
},
    function (req, username, password, done) { // verification function
        const db = new Database();
        db.query("select * from `user_info` where UserID='" + username + "'", (err, rows) => {
            if (err) {
                return done(err);
            }
            if (!rows.length) {
                return done(null, false, 'loginMessage', 'No user found.');
            }
            if (!(rows[0].Password == md5(password))) {
                return done(null, false, 'loginMessage', 'Oops! Wrong password.'); // create the loginMessage and save it to session as flashdata

            }
            return done(null, rows[0]);
            // all is well, return successful user
        });

    }));

//app.use(cookieParser('asdf33g4w4hghjkuil8saef345')); // cookie parser must use the same secret as express-session. Cookie parser not required anymore for express-session

const cookieExpirationDate = new Date();
const cookieExpirationDays = 1;
cookieExpirationDate.setDate(cookieExpirationDate.getDate() + cookieExpirationDays);

app.use(session({
    secret: 'PACInternal', // must match with the secret for cookie-parser
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: cookieExpirationDate // use expires instead of maxAge
    }
}));

app.use(passport.initialize());
app.use(passport.session());

function ensureAuthenticated(req, res, next) {

    if (req.isAuthenticated()) {
        console.log("authenticated");
        return next();
    }
    else {
        console.log("Not authenticated");
        res.redirect('/failedlogin');
        //next();
    }
}

app.get('/logout', (req, res) => {
    req.logout();
    req.session.destroy();
    console.log("Logout"+req.isAuthenticated());
    return res.send();

})

app.get('/failedlogin', (req, res) => {
    return res.status(400).send({ "Error": "Failed Login" });
})

app.get('/isSessionOpen', (req, res) => {
    console.log("isSessionOpen"+req.isAuthenticated());
    if (req.isAuthenticated()) {
        console.log("Session is open");
        console.log(req.session);
        return res.send({ isSessionOpen: true });
    }
    else {
        console.log("Session is close");
        return res.send({ isSessionOpen: false });
    }
})

app.post('/authenticate', (req, res, next) => {
    passport.authenticate('login', {
        successRedirect: '/',
        failureRedirect: '/authenticate',
        failureFlash: true
    }, (err, user, info) => {
        console.log(req.session);
        if (err || !user) {
            return res.status(400).json({
                message: 'Something is not right',
                user: user
            });
        }

        else {
            req.login(user, { session: true }, (err) => {
                if (err) {
                    return res.send(err);
                }
                var payload = { id: user.UserID };
                var token = jwt.sign(payload, "secretOrKey");
                if (err) {
                    res.send(err);
                }
                return res.json({ user: user, token: token });
            });
        }
    })(req, res);
});

app.get('/DrugDetails/:gcn/:type', ensureAuthenticated, async (req, res) => {
    var gcn = req.params.gcn;
    var type = req.params.type;
    if (gcn == null || type == null) {
        return res.status(400).send();
    }
    if (type.toUpperCase() === "Generic".toUpperCase())
        type = "G";
    else
        type = "B";
    const db = new Database();
    var sql_DrugDetail = "SELECT * from fdb where GCN='" + gcn + "'  AND DrugType='" + type + "' LIMIT 0,1";
    var rows = await db.query(sql_DrugDetail);
    //Database.close();
    return res.send(rows);
});

//app.use('/api', api);
app.get('*', (req, res) => {
    console.log("Inside *")
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost:${port}`));