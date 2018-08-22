var bodyParser = require('body-parser'),
    express = require('express'),
    mongoose = require('mongoose'),
    
    app = express();

app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb://localhost/national_parks", { useNewUrlParser: true });

var Park = require("./models/park");

app.get('/', function(req, res){
  res.render('index');
});


// INDEX ROUTE
app.get('/parks', function(req, res){
  Park.find({}, function(err, parks){
    if(err){
      console.log(err);
    }else {
      res.render('parks', {parks: parks});
    }
  });
});

// NEW ROUTE
app.get('/parks/new', function(req, res){
  res.render('new');
});


// CREATE ROUTE
app.post("/parks", function(req, res){
  Park.create(req.body.park, function(err, newPark){
    if(err){
      console.log("Error creating new park.");
      console.log(err);
    } else {
      res.redirect("/parks");
    }
  });
});



// SHOW ROUTE
app.get('/parks/:id', function(req, res){
  Park.findById(req.params.id, function(err, foundPark){
    if(err){
      console.log(err);
      res.redirect("/parks");
    } else {
      res.render("show", {park: foundPark});
    }
  });
});

app.get("*", function(req, res){
	res.send("Page not found");
});


app.listen(process.env.PORT, process.env.IP, function(){ 
  console.log("Server started");
});
