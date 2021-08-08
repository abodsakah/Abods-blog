var express = require('express');
var path = require('path');
var session = require('express-session');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');



var userValidtor = require('./src/validateUser');
var blogHandler = require('./src/blogHandler');
const { json } = require('body-parser');
const multer = require('multer');

var port = process.env.PORT || 8000;

var router = express.Router();
var app = express();

let loginErrors = [];
let postErrors = [];

const dashbaordRouter = require("./routes/dashboard");

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

app.get("/test", (req, res) =>
{
    return res.send("Working!");
});

app.get('/', (req, res) =>
{
    if (!req.session.isLoggedIn || req.session.isLoggedIn === undefined)
    {
        let data = {
            title: "Admin Panel Login | Abod's blog",
            loginErrors
        }

        res.render('pages/login.ejs', data);
    } else
    {
        res.redirect('/dashboard');
    }
});


app.post('/', async (req, res) =>
{
    var email = req.body.user;
    var password = req.body.pass;
    var userInfo = await userValidtor.getUserByEmail(email);
    console.log(userInfo);
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
                res.redirect("/");
            }
        });
    } else
    {
        loginErrors.push("Invalid username or password");
        res.redirect("/");
    }
    
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
}
);

module.exports = app;