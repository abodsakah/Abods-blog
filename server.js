const express = require("express");
const path = require("path");

const app = express();

app.use('/', require('./blog/index.js'))
    .use('/admin', require('./blog/adminPanelNew/index'))
    .listen(3030);
