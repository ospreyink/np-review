var bodyParser        = require('body-parser'),
    express           = require('express'),
    expressSanitizer  = require('express-sanitizer'),
    methodOverride    = require('method-override'),
    mongoose          = require('mongoose'),
    
    app = express();

app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(expressSanitizer());

mongoose.connect("mongodb://localhost/national_parks", { useNewUrlParser: true });

var Park = require("./models/park");

app.get('/', function(req, res){
  res.render('index');
});


// INDEX
app.get('/parks', function(req, res){
  Park.find({}, function(err, parks){
    if(err){
      console.log(err);
    }else {
      res.render('parks', {parks: parks});
    }
  });
});

// NEW
app.get('/parks/new', function(req, res){
  res.render('new');
});

// CREATE
app.post("/parks", function(req, res){
  //sanitize inputs
  req.body.park.description = req.sanitize(req.body.park.description);

  Park.create(req.body.park, function(err, newPark){
    if(err){
      console.log("Error creating new park.");
      console.log(err);
    } else {
      res.redirect("/parks");
    }
  });
});

// SHOW
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

// EDIT
app.get("/parks/:id/edit", function(req, res){
  Park.findById(req.params.id, function(err, park){
  	if(err){
  res.redirect("/parks");
  	} else {
  	res.render("edit", {park: park});
  	}
  });
});

// UPDATE
app.put("/parks/:id", function(req, res){
  //sanitize inputs
  req.body.park.description = req.sanitize(req.body.park.description);
  
  Park.findByIdAndUpdate(req.params.id, req.body.park, function(err, updatedPark){
  	if(err){
  	  console.log("Error updating information.");
  	  console.log(err);
      res.redirect("/parks");
  	} else {
      res.redirect("/parks/" + req.params.id);
  	}
  });
});

// DESTROY
app.delete("/parks/:id", function(req, res){
  Park.findByIdAndRemove(req.params.id, function(err, deletedPark){
  		if(err){
  		  console.log("Error deleting park.");
  		  console.log(err);
        res.redirect("/parks");
  	} else {
  		  res.redirect("/parks");
  	}
  });
});

app.get("*", function(req, res){
	res.send("Page not found");
});

app.listen(process.env.PORT, process.env.IP, function(){ 
  console.log("Server started");
});
