/**
* 
*      Main server module
*    @author Abdulrahman Sakah
* 
*/

"use strict";

//express server
const express = require("express");
const port = process.env.PORT || 3000;
const path = require("path");

const router = express.Router();

const mainRouter = require("./routers/main");

const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
    console.log("Request received: " + req.url + " (" +req.method + ")");
    next();
});

app.use("/", mainRouter);

app.get("/*", (req, res) =>
{
    let data = {
        title: "Oops, wrong page | Abod's blog",
    }

    res.render("pages/404", data);
});

app.post("/*", (req, res) =>
{
    let data = {
        title: "Oops, wrong page | Abod's blog",
    }
    res.render("pages/404", data);
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});

module.exports = app;