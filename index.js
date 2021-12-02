const express = require("express");
var app = express();
var {config} = require("./data/config.json")
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


app.listen(config.port);
console.log("Server Started")
console.log("Port: "+config.port)
