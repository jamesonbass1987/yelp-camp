var express = require('express');
var app = express();
var axios = require("axios");
var bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('landing')
});


app.listen(3000);