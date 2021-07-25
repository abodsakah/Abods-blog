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
let postErrors= [];

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

app.get("/dashboard", async (req, res) =>
{
    if (req.session.isLoggedIn)
    {
        var user = await userValidtor.getUserByEmail(req.session.user);

        let data = {
                title: "Admin Panel Dashboard | Abod's blog",
                user
        }
        res.render('pages/dashboard.ejs', data);
    } else
    {
        res.redirect('/');
    }
});

app.get('/dashboard/articles', async (req, res) =>
{
    if (req.session.isLoggedIn)
    {
        var articles = await blogHandler.getAllPosts();
        var user = await userValidtor.getUserByEmail(req.session.user);
        let data = {
            title: "Admin Panel Dashboard | Abod's blog",
            articles,
            user
        }
        res.render('pages/articles-list.ejs', data);
    } else
    {
        res.redirect('/');
    }

});

app.get("/dashboard/edit/post/:id", async (req, res) =>
{
    if (req.session.isLoggedIn)
    {
        var post = await blogHandler.getPostById(req.params.id);
        var user = await userValidtor.getUserByEmail(req.session.user);
        let data = {
            title: "Admin Panel Dashboard | Abod's blog",
            post,
            user
        }
        res.render('pages/edit-post.ejs', data);
    } else
    {
        res.redirect('/');   
    }
});

app.get("/dashboard/create/post", async (req, res) =>
{
    if (req.session.isLoggedIn)
    {
        var user = await userValidtor.getUserByEmail(req.session.user);
        console.log(user[0].username);
        let data = {
            title: "Create post | Abod's blog",
            user
        }
        res.render('pages/create-post.ejs', data);
    } else
    {
        res.redirect('/');
    }
});

app.get("/dashboard/delete/post/:id", async (req, res) =>
{
    
    if (req.session.isLoggedIn)
    {
        var post = await blogHandler.deletePost(req.params.id);
        res.redirect('/dashboard/articles');
    } else
    {
        res.redirect('/');
    }
});

app.get("/dashboard/editor-choice", async (req, res) =>
{
    if (req.session.isLoggedIn)
    {
        var user = await userValidtor.getUserByEmail(req.session.user);
        var editorChoice = await blogHandler.getEditorChoice();
        var posts = await blogHandler.getAllPosts();
        let data = {
            title: "Admin Panel Dashboard | Abod's blog",
            user,
            editorChoice,
            posts
        }
        res.render('pages/editor-choice.ejs', data);
    } else
    {
        res.redirect('/');
    }
});

app.post("/dashboard/editor-choice", async (req, res) =>
{
    if (req.session.isLoggedIn)
    {
        var editorChoice = await blogHandler.addEditorChoice(req.body.choice);
        res.redirect('/dashboard/editor-choice');
    } else
    {
        res.redirect('/');
    }
});

app.get("/dashboard/editor-choice/delete/:id", async (req, res) =>
{
    if (req.session.isLoggedIn)
    {
        var editorChoice = await blogHandler.deleteEditorChoice(req.params.id);
        res.redirect('/dashboard/editor-choice');
    } else
    {
        res.redirect('/');
    }
});


app.post("/dashboard/create/post", async (req, res) =>
{
    if (req.session.isLoggedIn)
    {
        var user = await userValidtor.getUserByEmail(req.session.user);
        var title = req.body.title;
        var content = req.body.bodyContent;
        blogHandler.createPost(title, content, req.body.headerImage, req.body.tags, req.body.status, req.body.postMeta, user[0].username);
        res.redirect('/dashboard/articles');
    } else
    {
        res.redirect('/');
    }
});

app.post("/dashboard/edit/post/:id", async (req, res) =>
{
    if (req.session.isLoggedIn)
    {
        let uploads = multer({ storage: storage }).single("headerImage");

        var post = await blogHandler.getPostById(req.params.id);
        var user = await userValidtor.getUserByEmail(req.session.user);
        var title = req.body.title;
        var content = req.body.bodyContent;

        blogHandler.updatePost(req.params.id, title, content, req.body.headerImage, req.body.tags, req.body.status, req.body.meta);
        res.redirect("/dashboard/articles");
    }else
    {
        res.redirect('/');
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