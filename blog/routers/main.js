/**
*          Main router for the Blog
*          @author Abdulrahman Sakah 
*/

"use strict";

const express = require('express');
const postsManager = require('../src/getPosts');
const path = require("path");
const router = express.Router();

const app = express();

app.use(express.static(path.join(__dirname, "./public")));

async function getBanners()
{
    var ediorChoice = await postsManager.getEditorChoice();
    let res = [];
    for (var choice of ediorChoice)
    {
        res.push(await postsManager.getPostById(choice.post_id));
    }
    return res;
}

router.get('/', async (req, res) =>
{
    var posts = await postsManager.getPosts();
    var banners = await getBanners();
    let data = {
        posts,
        banners,
        title: 'Blog',
    }

    res.render('pages/index', data);
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

        res.render("pages/post", data);
    }else{
        let data = {
            title: "Oops, wrong page | Abod's blog"
        }

        res.render("pages/404", data);  
    }
});

router.get("/privacy-policy", async (req, res) =>
{
    let data = {
        title: "Privacy Policy | Abod's blog"
    }

    res.render("pages/privacy-policy", data);
});

module.exports = router;