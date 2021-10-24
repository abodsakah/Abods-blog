"use strict";

const express = require("express");


const router = express.Router();

const app = express();

var userValidtor = require('../src/validateUser');
var blogHandler = require('../src/blogHandler');
const { json } = require('body-parser');
const fileUpload = require('express-fileupload');

app.use(fileUpload({
    safeFileNames: true,
    useTempFiles: true,
    tempFileDir: './public/tmp/',
    debug: true,
    createParentPath: true
}));

let postAmount = 0;

router.get("/", async (req, res) =>
{
    if (req.session.isLoggedIn)
    {
        var user = await userValidtor.getUserByEmail(req.session.user);

        let data = {
            title: "Admin Panel Dashboard | Abod's blog Admin",
            user,
            postAmount
        }
        res.render('admin/pages/dashboard.ejs', data);
    } else
    {
        res.redirect('/');
    }
});

router.get('/articles', async (req, res) =>
{
    if (req.session.isLoggedIn)
    {
        var articles = await blogHandler.getAllPosts();
        var user = await userValidtor.getUserByEmail(req.session.user);
        let data = {
            title: "Articles | Abod's blog Admin",
            articles,
            user
        }
        res.render('admin/pages/articles-list.ejs', data);
    } else
    {
        res.redirect('/');
    }

});

router.get('/pages', async (req, res) =>
{
    if (req.session.isLoggedIn)
    {
        var pages = await blogHandler.getAllPages();
        var user = await userValidtor.getUserByEmail(req.session.user);
        let data = {
            title: "Pages | Abod's blog Admin",
            pages,
            user
        }
        res.render('admin/pages/pages.ejs', data);
    } else
    {
        res.redirect('/');
    }
});

router.get("/edit/post/:id", async (req, res) =>
{
    if (req.session.isLoggedIn)
    {
        
        var post = await blogHandler.getPostById(req.params.id);
        var user = await userValidtor.getUserByEmail(req.session.user);
        let data = {
            title: "Edit post | Abod's blog Admin",
            post,
            user
        }
        res.render('admin/pages/edit-post.ejs', data);
    } else
    {
        res.redirect('/');   
    }
});

router.get("/edit/page/:id", async (req, res) =>
{
    if (req.session.isLoggedIn)
    {
        var page = await blogHandler.getPageById(req.params.id);
        var user = await userValidtor.getUserByEmail(req.session.user);
        let data = {
            title: "Edit Page | Abod's blog Admin",
            page,
            user
        }
        res.render('admin/pages/edit-page.ejs', data);
    } else
    {
        res.redirect('/');   
    }
});

router.get("/create/post", async (req, res) =>
{
    if (req.session.isLoggedIn)
    {
        var user = await userValidtor.getUserByEmail(req.session.user);
        let data = {
            title: "Create post | Abod's blog Admin",
            user
        }
        res.render('admin/pages/create-post.ejs', data);
    } else
    {
        res.redirect('/');
    }
});

router.get("/create/page", async (req, res) =>
{
    if (req.session.isLoggedIn)
    {
        var user = await userValidtor.getUserByEmail(req.session.user);
        let data = {
            title: "Create page | Abod's blog Admin",
            user
        }
        res.render('admin/pages/create-page.ejs', data);
    } else
    {
        res.redirect('/');
    }
});

router.get("/delete/post/:id", async (req, res) =>
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

router.get("/delete/page/:id", async (req, res) =>
{
    
    if (req.session.isLoggedIn)
    {
        var post = await blogHandler.deletePage(req.params.id);
        res.redirect('/dashboard/pages');
    } else
    {
        res.redirect('/');
    }
});

router.get("/editor-choice", async (req, res) =>
{
    if (req.session.isLoggedIn)
    {
        var user = await userValidtor.getUserByEmail(req.session.user);
        var editorChoice = await blogHandler.getEditorChoice();
        var posts = await blogHandler.getAllPosts();
        let data = {
            title: "Editor choice | Abod's blog Admin",
            user,
            editorChoice,
            posts
        }
        res.render('admin/pages/editor-choice.ejs', data);
    } else
    {
        res.redirect('/');
    }
});

router.get("/editor-choice/delete/:id", async (req, res) =>
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



router.post("/editor-choice", async (req, res) =>
{
    if (req.session.isLoggedIn)
    {
        var editorChoice = await blogHandler.getEditorChoice();
        for (var choice of editorChoice)
        {
            if (req.body.choice == choice.id)
            {
                res.redirect('/dashboard/editor-choice/');
                return;
            }
        }
        var editorChoice = await blogHandler.addEditorChoice(req.body.choice);
        res.redirect('/dashboard/editor-choice');
    } else
    {
        res.redirect('/');
    }
});


router.post("/create/post", async (req, res) =>
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

router.post("/create/page", async (req, res) =>
{
    if (req.session.isLoggedIn)
    {
        var user = await userValidtor.getUserByEmail(req.session.user);
        var title = req.body.title;
        var content = req.body.bodyContent;
        blogHandler.createPage(title, content, req.body.headerImage, req.body.status, req.body.premaLink);
        res.redirect('/dashboard/pages');
    } else
    {
        res.redirect('/');
    }
});

router.post("/edit/post/:id", async (req, res) =>
{
    if (req.session.isLoggedIn)
    {
        console.log(req.body);
        var headerImg = req.files.headerImg;
        if (headerImg !== undefined)
        {
            var file = req.files.headerImg;
            file.mv(`./public/uploads/${file.name}`, (err) =>
            {
                if (err)
                {
                    console.log(err);
                } else
                {
                    var title = req.body.title;
                    var content = req.body.bodyContent;

                    blogHandler.updatePost(req.params.id, title, content, file.name, req.body.tags, req.body.status, req.body.meta);
                }
            });
        } else
        {
            var title = req.body.title;
            var content = req.body.bodyContent;

            blogHandler.updatePostWithoutImage(req.params.id, title, content, req.body.tags, req.body.status, req.body.meta);
        }
        res.redirect("/dashboard/articles");
    }else
    {
        res.redirect('/');
    }
});

router.post("/edit/page/:id", async (req, res) =>
{
    if (req.session.isLoggedIn)
    {
        var title = req.body.title;
        var content = req.body.bodyContent;

        blogHandler.updatePage(req.params.id, title, content, req.body.headerImage, req.body.status, req.body.premaLink);
        res.redirect("/dashboard/pages");
    }else
    {
        res.redirect('/');
    }
});

module.exports = router;