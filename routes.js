var express = require("express");
var app = express()

app.get('/', function (req, res) {
  res.sendFile("./views/index.html")
})
app.get('/contact', function (req, res) {
  res.sendFile("./views/contact.html")
})
app.get('/projects', function (req, res) {
  res.sendFile("./views/projects.html")
})

module.exports = app;
