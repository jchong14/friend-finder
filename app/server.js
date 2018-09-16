var express = require("express");

var bodyParser = require("body-parser");

var app = express();

var port = 8080;

var methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/public"));

// BodyParser makes it easy for our server to interpret data sent to it.
// The code below is pretty standard.

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

//app.use(bodyParser.json()) basically tells the system that you want json to be used. bodyParser.urlencoded({extended: ...}) basically tells the system whether you want to use a simple algorithm for shallow parsing (i.e. false) or complex algorithm for deep parsing that can deal with nested objects (i.e. true).

app.listen(port, function(){
  console.log("App listening on port: " + port);
});

app.get("/home", function(req, res){
  res.render('pages/home');
});

app.get('/survey', function(req, res) {
	res.render('pages/survey');
});

// app.listen(8080);
