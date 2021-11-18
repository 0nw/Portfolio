const express = require("express");
const router = require("./routes.js");
var app = express();
const express = require("express");
var app = express();
app.use(express.static(__dirname+'/views'))
app.get('/', function (req, res) {
  res.sendFile(__dirname+"/views/index.html")
})
app.get('/contact', function (req, res) {
  res.sendFile(__dirname+"/views/contact.html")
})
app.get('/projects', function (req, res) {
  res.sendFile(__dirname+"/views/projects.html")
})


app.listen(80);
console.log("server started")


app.listen(80);
console.log("server started")
