var express = require("express");
var path = require('path');
var app = express();


// app.set("view engine", "ejs");
app.use(express.static(__dirname + '/views'));
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get("/", function(req,res){
    res.sendFile("index");
});

app.get("/map", function(req,res){
  res.render("map");
});


let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}

app.listen(port, function(req, res){
    console.log("Server has started!")
});
