var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function(req,res){
  res.render('pages/index');
});

app.get('/roll', function(req,res){
  res.render('pages/roll');
});

app.post('/rolled', function(req,res){
  var theNumber = '';
  for(var key in req.body) {
    if(req.body.hasOwnProperty(key)) {
      theNumber += req.body[key];
    }
  }
  
  console.log(theNumber);
  res.render('pages/rolled', {
    rolledNumber : theNumber
  });
});

app.get('/lazyroll', function(req,res){
  res.render('pages/lazyroll');
});


app.listen(3000, function() {
    console.log('Example app listening on port 3000.');
});
