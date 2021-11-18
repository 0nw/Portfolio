const express = require("express");
const router = require("./routes.js");
var app = express();
app.use(express.static('./views/css'))


app.listen(80);
console.log("server started")
