var express = require('express'),
    mongoose = require('mongoose'),
    ejs = require('ejs'),
    
    app = express();

//.set("view engine", "ejs");

app.get('/', function(req, res){
    res.send("Home page");
});

app.listen(process.env.PORT, process.env.IP, function(){ 
	console.log("Server started");
	});
