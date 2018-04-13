var express     = require('express'),
    app         = express(),
    axios       = require("axios"),
    bodyParser  = require("body-parser"),
    mongoose    = require('mongoose');

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/yelp_camp');

var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema)


// ROOT

app.get('/', (req, res) => {
    res.render('landing')
});

// INDEX

app.get('/campgrounds', (req, res) => {

    // Get campgrounds from DB
    Campground.find({}, (err, campgrounds) => {
        if(err){
            console.log(err);
        } else {
            // Render all campgrounds
            res.render("index", { campgrounds })
        }
    })

});

// NEW

app.get("/campgrounds/new", (req, res) => {
  res.render("new");
});

//  CREATE

app.post('/campgrounds', (req, res) => {
    //get data from form

    const name = req.body.name;
    const image = req.body.image;
    const description = req.body.description;
    const newCampground = { name, image, description }

    Campground.create( newCampground, (err, camgrounds) => {
        if (err) {
            console.log(err);
        } else {
            // Redirect to campgrounds
            res.redirect("/campgrounds");
        }
    })

});

// SHOW

app.get('/campgrounds/:id', (req, res) => {

    Campground.findById(req.params.id, (err, campground) => {
        if (err) {
            console.log(campground);
            res.redirect("/campgrounds");
        } else {
            res.render("show", { campground })
        }
    })

});

// EDIT


// UPDATE


// DELETE


app.listen(3000);