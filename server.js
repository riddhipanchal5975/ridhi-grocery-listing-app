// load the libraries we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// adding static assets
app.use(express.static(__dirname + '/public'));

// use res.render to load up an ejs view files
app.get('/', function(req, res) {
  res.render('pages/index', {
  	items: require("./groceries")
  });
});

app.listen(3000);
console.log('3000 is the goto port');