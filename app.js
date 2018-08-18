var express = require('express'),
    mongoose = require('mongoose'),
    ejs = require('ejs'),
    
    app = express();

app.set("view engine", "ejs");
app.use(express.static('public'));

app.get('/', function(req, res){
    res.render('index');
});

app.listen(process.env.PORT, process.env.IP, function(){ 
	console.log("Server started");
	});
