// import Analytics from 'analytics'
// import googleAnalytics from '@analytics/google-analytics'


var express = require('express');
var path = require('path');
var session = require('express-session');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');
var gapi = require("googleapis");
var userValidtor = require('./src/validateUser');
var fs = require('fs');


const { json } = require('body-parser');
const multer = require('multer');

require('console-stamp')(console, { 
    format: ':date(yyyy/mm/dd HH:MM:ss.l) :label' 
} );

const GA_TRACKING_ID = process.env.GA_TRACKING_ID;

var errorLog = fs.createWriteStream('./debug/debug.log', { flags: 'a' });
process.stdout.write = process.stderr.write = errorLog.write.bind(errorLog);

process.on('UnhandledPromiseRejectionWarning', function (err)
{
    console.error((err && err.stack) ? err.stack : err);
});

var port = process.env.PORT || 2000;

var router = express.Router();
var app = express();

let loginErrors = [];
let postErrors = [];

const dashbaordRouter = require("./routes/dashboard");
const blogRouter = require("./routes/blog");
const { GoogleApis } = require('googleapis');

//setup session
app.use(session({
    name: 'Admin panel',
    secret: '069404b5cdbe31120d96de426a5a7a28af3fc20f',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 30 //30 days
    }
}));



app.use(bodyParser.urlencoded({ extended: false }));
app.use("/dashboard", dashbaordRouter);
app.use("/", blogRouter);

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
    res.locals.session = req.session;
    next();
}
);


app.use((req, res, next) => {
    console.log("Request received: " + req.url + " (" +req.method + ")");
    next();
});

app.listen(port, () => {
    console.log('Server listening on port ' + port);
}
);

const storage = multer.diskStorage({
    destination: function (req, file, cb)
    {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb)
    {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

app.get('/login', (req, res) =>
{
    if (!req.session.isLoggedIn || req.session.isLoggedIn === undefined)
    {
        let data = {
            title: "Admin Panel Login | Abod's blog",
            loginErrors
        }

        res.render('admin/pages/login.ejs', data);
    } else
    {
        res.redirect('/dashboard');
    }
});


app.post('/login', async (req, res) =>
{
    var email = req.body.user;
    var password = req.body.pass;
    var userInfo = await userValidtor.getUserByEmail(email);
    if (userInfo.length > 0)
    {
        var pass_DB = await userInfo[0].password;
        bcrypt.compare(password, pass_DB, (err, result) =>
        {
            if (err) console.log(err);
            
            if (result)
            {
                loginErrors = [];
                var email = userInfo[0].email;
                res.locals.session.user = email;
                res.locals.session.isLoggedIn = true;
                res.redirect("/dashboard");
            } else
            {
                loginErrors = [];
                loginErrors.push("Invalid username or password");
                res.redirect("/login");
            }
        });
    } else
    {
        loginErrors.push("Invalid username or password");
        res.redirect("/login");
    }
    
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
}
);

module.exports = app;
