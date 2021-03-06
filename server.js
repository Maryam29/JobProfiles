var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var passport = require("passport");
var md5 = require('md5');
var cookieParser = require('cookie-parser');
var moment = require('moment');

// pass passport for configuration
const express = require('express');
var multer = require('multer');
const session = require('express-session');
var dateFormat = require('dateformat');
const http = require('http');
const path = require('path');
const _ = require('lodash');
const Database = require('./server/config.js');
var LocalStrategy   = require('passport-local').Strategy;
var otpGenerator = require('otp-generator');
const Nexmo = require('nexmo');
const nexmo = new Nexmo({
  apiKey: 'd2904ed2',
  apiSecret: 'hpURcQUhLd3uVo3A'
});
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

app.use(session({
    secret: 'SecretKey', // must match with the secret for cookie-parser
    resave: true,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        maxAge: 30000 * 60 * 1000 // use expires instead of maxAge
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
        done(null, user._id);
    });

    // used to deserialize the user
    passport.deserializeUser(function (id, done) {
        console.log("Inside deserialization");
        try{
            Database.connectToServer(async(err)=>{
                var rows = await Database.findOne('ApplicantInfo',{_id:ObjectID(id)});
                //console.log(rows);
                done(null,rows);
            })
        }
        catch(e){
            done(null);
        }
    });

    passport.use('login', new LocalStrategy({
        passReqToCallback: true
    },
    (req, username, password, done) => { // verification function

        Database.connectToServer(async(err)=>{
            if(err)
            throw err;
            
            try{
                var user = {phoneNo:username,isVerified:true}
                var rows = await Database.findOne('ApplicantInfo',user);
                //console.log(rows);
                if (rows) {
                    if (!(rows.password == md5(password))) {
                        return done(null, false,  'Wrong password.'); //create the loginMessage and save it to session as flashdata
                    }
                    else{
                        return done(null, rows);
                    }
                }
                else{
                    return done(null, false,  'No user found.');
                }
            }
            catch(e){
                return done(e);
            }
        });
    }));


    passport.use('signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with email
        usernameField : 'userid',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req,userid, password, done) {
        phoneNo = req.body.userid;
        password = req.body.password;
        type = req.body.type;
                 // User.findOne wont fire unless data is sent back
        process.nextTick(function() {
            // find a user whose email is the same as the forms email
            // we are checking to see if the user trying to login already exists
                //if there is no user with that email,create the user
            
            Database.connectToServer(async(err)=>{
                if(err)
                throw err;
                
                try{
                    var user = {phoneNo:phoneNo,isVerified:true}
                    var newobj ={
                        $set:{
                            password:md5(password),
                            type:type
                        }
                    }
                    //console.log("signup");
                    var rows = await Database.findOneAndUpdate('ApplicantInfo',user,newobj);
                    //console.log("signup");
                    //console.log(rows);

                    if (rows) {
                        return done(null, rows);
                    }
                    else{
                        return done(null, false,  'someErrorOccured');
                    }
                }
                catch(e){
                    return done(e);
                }
            });
    });
}));


app.get('/logout', (req, res) => {
    console.log("Inside Logout");

    //console.log(req.session.cookie.expires.toString());
    //console.log(req.user);

    req.logout();
    req.session.destroy();
    //console.log("Logout"+req.isAuthenticated());

    //console.log(req.user);
    return res.send();
})

/* Check for Session */
app.get('/isSessionOpen', (req, res) => {
    // console.log("Inside Session Open")
    // console.log(req.session.cookie.expires.toString());
    // console.log(req.isAuthenticated());
    // console.log(req.user);
    if (req.isAuthenticated()) {
        return res.send({ isSessionOpen: true, sessionData:req.user });
    }
    else {
        return res.send({ isSessionOpen: false });
    }
})

  /* Handle Login POST */
  app.post('/login', (req, res, next) => {
      //console.log(req.body);
      passport.authenticate('login', {
        successRedirect: '/',
        failureFlash: true
    }, (err, user, info) => {
        //console.log(info);
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
                //console.log("Inside Login");
                //console.log(req.isAuthenticated());
                //console.log(req.user);
                //console.log(req.session.passport.user);
                //console.log(req.session.cookie.expires.toString());
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
            //console.log(err);
            //console.log(user);
            //console.log(info);
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
                //console.log(err);
                if (err) {
                    return res.send(err);
                }
                //console.log(req.isAuthenticated());
               // var payload = { id: user.phoneNo };
                //var token = jwt.sign(payload, "secretOrKey");
                //req.session.touch();
                //console.log(req.session);
                res.send(user);
            });
        }
    })(req, res);
});


app.post('/sendOTP', async (req, res) => {
    const phoneno = req.body.phoneno;
    isExistingAccount(phoneno).then((isVerified)=>{
        if(isVerified){
            res.send({OTPSent: false, message: "You're already registered. Please signin"});
        }
        else{
            var otp = otpGenerator.generate(6, { upperCase: true, specialChars: false });
            StoreOTPDB(otp, phoneno).then((isSuccessfullyStored)=>{
                //console.log(isSuccessfullyStored);
                if(isSuccessfullyStored){
                    // var message = "Use this One Time Password to complete the registration:"+ otp;
                //     nexmo.message.sendSms(
                //     'MSGOTP', phoneno, 'A text message sent using the Nexmo SMS API',
                //     (err, responseData) => {
                //         if (err) {
                //             console.log(err);
                //             throw new Error(err)
                //         } 
                //         else {
                //             console.log(responseData);
                //             res.send({OTPSent: true, message: "OTP Sent successfully"});
                //         }
                //     }
                // );
                res.send({OTPSent: true, message: "OTP Sent successfully"});
                }
                else{
                    res.send({OTPSent: false, message: "Some Error Occured. Try Again"});
                }
             })
        }
    })
    .catch(e => res.send({OTPSent: false, message: "Some Error Occured. Try Again"}))
    
});

app.post('/verifyOTP', (req, res) => {
    otp = req.body.otp;
    phoneNo = req.body.phoneno;
    CheckifOTPisValid(otp, phoneNo).then((isVerified) => {
        if(isVerified){
            res.send({OTPVerified: true, message: "OTP Verified successfully"});
        }
        else{
            res.send({OTPVerified: false, message: "OTP Not matched"});
        }
    })
    .catch(e => res.send({OTPVerified: false, message: "Some Error Occured. Try Again"}));
});

isExistingAccount = (phoneno) =>{
    try{
        //console.log("isExistingAccount");
        return new Promise((resolve, reject) =>{
            Database.connectToServer(async(err)=>{
                if(err)
                throw err;
                
                try{
                    var user = {
                        phoneNo:phoneno,
                        isVerified:true,
                        password:{
                            $exists:true,
                            $ne:null
                        }
                    }
                    var rows = await Database.findOne('ApplicantInfo',user);
                    //console.log(rows);
                    if (rows) {
                        resolve(true);
                    }
                    else{
                        resolve(false);
                    }
                }
                catch(e){
                    reject(e);
                }
            });
        });
    }
    catch(e){
        throw new Error(e);
    }
}

StoreOTPDB = async(otp, phoneno)=>{
    console.log("StoreOTPDB");
    try{
        var ExpiryTime = new Date();
        var Duration = 1; // expiry time 1 min for testing purposes
        ExpiryTime.setMinutes(ExpiryTime.getMinutes()+Duration);
        ExpiryTime = moment(ExpiryTime).toISOString();

        return new Promise(async(resolve, reject) => {
            Database.connectToServer(async(err)=>{
                var user = {phoneNo:phoneno};
                var rows = await Database.findOne('ApplicantInfo',user);
                if(!rows || rows.length == 0){
                    var newobj = {
                        phoneNo: phoneno,
                        OTP:otp,
                        OTPExpiryTime:ExpiryTime
                    }
                    //console.log("insert");
                    var rows = await Database.insertOne('ApplicantInfo',newobj);
                    if(rows)
                    resolve(true);
                    else
                    resolve(false);
                }
                else{
                    var newobj={
                        $set:{
                            OTP:otp,
                            OTPExpiryTime:ExpiryTime
                        }
                    }
                    //console.log("update");
                    var rows = await Database.updateOne('ApplicantInfo',user,newobj);
                    if(rows > 0){
                        resolve(true);
                    }
                    else{
                        resolve(false);
                    }
                }
            });
        });
    }
    catch(e){
           reject(e);
        }
}

// app.get('/check',async(req,res) => {
//     try{
//         var ExpiryTime = new Date();
//         var Duration = 1; // expiry time 1 min for testing purposes
//         ExpiryTime.setMinutes(ExpiryTime.getMinutes()+Duration);
//         ExpiryTime = moment(ExpiryTime).toISOString();
//         phoneno='9425645230';
//         otp='4365';
//         Database.connectToServer(async(err)=>{
            
//         });
//     }
//     catch(e){
//            throw e;
//         }
// })

CheckifOTPisValid = async(otp, phoneno)=>{
    console.log("CheckifOTPisValid");
    try{
        var CurrentTime = new Date();
        CurentTime = moment(CurrentTime).format('YYYY-MM-DD H:mm:ss');

        return new Promise(async(resolve, reject) => {
            Database.connectToServer(async(err)=>{
                var user = {phoneNo:phoneno,OTP:otp};
                //console.log(user);
                var rows = await Database.findOne('ApplicantInfo',user);
                //console.log(rows);
                if(!rows || rows.length == 0)
                resolve(false);
                else{
                    OTPExpiryTime = moment(rows.OTPExpiryTime).format('YYYY-MM-DD H:mm:ss');
                    if(CurentTime < OTPExpiryTime){
                        var oldobj = {
                            phoneNo:phoneno
                        }
                        var newobj={
                            $set:{
                                isVerified:true
                            },
                            $unset:{
                                OTP:1,
                                OTPExpiryTime:1
                            }
                        }
                        //console.log("update")
                        var rows = await Database.updateOne('ApplicantInfo',oldobj,newobj);
                        if(rows > 0){
                            resolve(true)
                        }
                        else{
                            resolve(false);
                        }
                    }
                    else{
                        resolve(false);
                    }
                }
            });
        });
    }
    catch(e){
        console.log(e);
        throw new Error(e);
    }
}

app.get('/getformcontrols',async(req,res) => {
   Database.connectToServer(async(err)=>{
            if(err)
            throw err;
            
            try{
                var rows = await Database.getAll('Formcontrols')
                //console.log(rows);
                return res.send(rows);
            }
            catch(e){
                console.log(e);
                throw new Error(e);
            }
        });
})

app.get('/getApplicantType',async(req,res) => {
    Database.connectToServer(async(err)=>{
             if(err)
             throw err;
             
             try{
                 var rows = await Database.getAll('ApplicantType')
                 //console.log(rows);
                 return res.send(rows);
             }
             catch(e){
                 console.log(e);
                 throw new Error(e);
             }
         });
 })


app.post('/getForm', (req, res) => {
    //console.log("getForm");
    type = req.body.type;
    try{
        Database.connectToServer(async(err)=>{
            if(err)
            throw err;

            var rows = await Database.findOne('Forms',{FormType:type});
            //console.log(rows);
            if(rows)
            res.send(rows);
            else
            res.send({});
        })
    }
    catch(e){
        res.send(e);
    }
})

app.get('/getAllForms', (req, res) => {
    //console.log("getForm");
    try{
        Database.connectToServer(async(err)=>{
            if(err)
            throw err;

            var rows = await Database.getAll('Forms');
            console.log(rows);
            if(rows)
            res.send(rows);
            else
            res.send({});
        })
    }
    catch(e){
        res.send(e);
    }
})

app.get('/getAllCountries', (req, res) => {
    // console.log("getForm");
    try{
        Database.connectToServer(async(err)=>{
            if(err)
            throw err;

            var rows = await Database.getAll('Countries');
            //console.log(rows);
            if(rows)
            res.send(rows);
            else
            res.send({});
        })
    }
    catch(e){
        res.send(e);
    }
})

app.get('/getAllCompanyTypes', (req, res) => {
    // console.log("getForm");
    try{
        Database.connectToServer(async(err)=>{
            if(err)
            throw err;

            var rows = await Database.getAll('CustomerDetails');
            //console.log(rows);
            if(rows)
            res.send(rows);
            else
            res.send({});
        })
    }
    catch(e){
        res.send(e);
    }
})

app.get('/getAllTemplates', (req, res) => {
    //console.log("getForm");
    try{
        Database.connectToServer(async(err)=>{
            if(err)
            throw err;

            var rows = await Database.getAll('Templates');
            //console.log(rows);
            if(rows)
            res.send(rows);
            else
            res.send({});
        })
    }
    catch(e){
        res.send(e);
    }
})

app.get('/getAllApplicants', (req, res) => {
    //console.log("getForm");
    try{
        Database.connectToServer(async(err)=>{
            if(err)
            throw err;

            var rows = await Database.getAll('ApplicantData');
            //console.log(rows);
            if(rows)
            res.send(rows);
            else
            res.send({})
        })
    }
    catch(e){
        res.send(e);
    }
})

app.post('/GetAllApplicantsPersonalDetails', (req, res) => {
    try{
        Database.connectToServer(async(err)=>{
            if(err)
            throw err;

            var rows = await Database.getIfFieldExist('ApplicantData',req.body.id.toString());
            //console.log(rows);
            if(rows)
            res.send(rows);
            else
            res.send({})
        })
    }
    catch(e){
        res.send(e);
    }
})

app.post('/getTemplatesByFormID', (req, res) => {
    formid = req.body.formID;
    try{
        Database.connectToServer(async(err)=>{
            if(err)
            throw err;

            //console.log(formid);
            var rows = await Database.findAllByID('Templates',{FormID:formid});
            //console.log(rows);
            if(rows)
            res.send(rows);
            else
            res.send({});
        })
    }
    catch(e){
        res.send(e);
    }
});

app.post('/saveApplicantData', (req, res) => {
    ApplicantDetails = req.body;
    //console.log(ApplicantDetails);
    try{
        Database.connectToServer(async(err)=>{
            if(err)
            throw err;

            ApplicantDetails._id = Database.ObjectID(ApplicantDetails._id);
            var rows = await Database.updateOrInsert('ApplicantData',{_id:ApplicantDetails._id},ApplicantDetails);
            
            if(rows)
            res.send(rows);
            else
            res.send({});
        })
    }
    catch(e){
        res.send(e);
    }
});

app.post('/saveTemplate', (req, res) => {
    template = req.body;
    //console.log(ApplicantDetails);
    try{
        Database.connectToServer(async(err)=>{
            if(err)
            throw err;
            if(template._id){
                template._id = Database.ObjectID(template._id);
                var rows = await Database.updateOrInsert('Templates',{_id:template._id},template);
            }
            else{
                var rows = await Database.insertOne('Templates',template);
            }
            
            res.send(rows);
        })
    }
    catch(e){
        res.send(e);
    }
});

app.post('/saveForm', (req, res) => {
    //console.log("SaveForm");
    try{
        Database.connectToServer(async(err)=>{
            if(err)
            throw err;
            if(req.body._id){
                //console.log("Update");
                req.body._id = Database.ObjectID(req.body._id);
                var rows = await Database.updateOrInsert('Forms',{_id:req.body._id},req.body);
            }
            else{
                //console.log("Insert");
                var rows = await Database.insertOne('Forms',req.body);
            }
            //console.log(rows);
            res.send(rows);
        })
    }
    catch(e){
        res.send(e);
    }
})


app.post('/UpdateApplicantProfile', (req, res) => {
    oldobj = req.body.oldobj;
    newobj = req.body.newobj;

    try{
        Database.connectToServer(async(err)=>{
            if(err)
            throw err;

            oldobj._id = Database.ObjectID(oldobj._id);
            newobj = {$set:newobj};
            //console.log(oldobj);
            //console.log(newobj);
            var rows = await Database.findOneAndUpdate('ApplicantData',oldobj,newobj);
            //console.log(rows);
            if(rows)
            res.send(rows);
            else
            res.send({});
        })
    }
    catch(e){
        res.send(e);
    }
});

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

app.post('/file', (req, res) => {
    var store = multer.diskStorage({
        destination:function(req,file,cb){
            cb(null, './uploads');
        },
        filename:function(req,file,cb){
            cb(null, Date.now()+'.'+file.originalname);
        }
    });
var upload = multer({storage:store}).single('file');

    upload(req,res,function(err){
        if(err){
            return res.status(501).json({error:err});
        }
        //do all database record saving activity
        return res.json({originalname:req.file.originalname, uploadname:req.file.filename});
    });
//res.send('succeskhkhks');
});
app.post('/getApplicantProfile', (req, res) => {
    id = req.body._id;
    try{
        Database.connectToServer(async(err)=>{
            if(err)
            throw err;

            const _id = Database.ObjectID(id);
            //console.log(_id);
            var rows = await Database.findOne('ApplicantData',{_id:_id});
            //console.log(rows);
            if(rows)
            res.send(rows);
            else
            res.send({});
        })
    }
    catch(e){
        res.send(e);
    }
});

app.get('*', (req, res) => {
    //console.log("Inside *")
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
const port = process.env.PORT || '3000' || '4200';
app.set('port', port);

const server = http.createServer(app);
server.listen(port, () => console.log(`API running on localhost:${port}`));