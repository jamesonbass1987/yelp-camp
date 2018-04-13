var express = require('express');
var app = express();
var axios = require("axios");
var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('landing')
});

app.get('/campgrounds', (req, res) => {
    const campgrounds = [
        { name: "Salmon Creek", image: "https://farm2.staticflickr.com/1281/4684194306_18ebcdb01c.jpg" },{ name: "Granite Hill", image: "https://farm5.staticflickr.com/4016/4369518024_0f64300987.jpg" },
        { name: "Mountain Goat Rest", image: "https://farm2.staticflickr.com/1424/1430198323_c26451b047.jpg" }];

    res.render('campgrounds', { campgrounds } );
});

app.listen(3000);