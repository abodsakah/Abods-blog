/**
*          Main router for the Blog
*          @author Abdulrahman Sakah 
*/

"use strict";

const express = require('express');
const postsManager = require('../src/getPosts');
const path = require("path");
const schedule = require('node-schedule');
const router = express.Router();
const app = express();

let posts;
var ediorChoice;
(async () => { posts = await postsManager.getPostLimit(); ediorChoice = await postsManager.getEditorChoice()})();

app.use(express.static(path.join(__dirname, "./public")));



const job = schedule.scheduleJob('* * * *', async function ()
{
    posts = await postsManager.getPostLimit();
    ediorChoice = await postsManager.getEditorChoice();
    console.log("Refreshed");
});

job.schedule();

router.get('/', async (req, res) =>
{
    let data = {
        posts,
        banners: ediorChoice,
        title: "Abod's Blog",
    }

    res.render('new/pages/index', data);
});

router.get('/post/:id', async (req, res) =>
{
    var id =    req.params.id;
    var postInfo = await postsManager.getPostById(id);
    if (postInfo.length !== 0)
    {
        let data = {
            postInfo,
            title: `${postInfo.title} | Abod's blog`
        }

        res.render("new/pages/post", data);
    }else{
        let data = {
            title: "Oops, wrong page | Abod's blog"
        }

        res.render("new/pages/404", data);  
    }
}); 

router.get("/page/:premalink", async (req, res) =>
{
    var link = req.params.premalink;
    var pageInfo = await postsManager.getPageByLink(link);
    let data = {
        title: `${pageInfo[0].title}| Abod's blog`,
        pageInfo
    }
    res.render("new/pages/page", data);
});

router.get("/blog", async (req, res) =>
{
    var posts = await postsManager.getPosts();
    let data = {
        posts,
        title: "All posts | Abod's blog"
    }
    res.render("new/pages/blog", data);
});

module.exports = router;