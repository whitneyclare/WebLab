var express = require('express'); //tells node to refer to this library
var bodyParser = require('body-parser');
var app = express();
global.reasons = [
  { reason: 'My mom loves me'}
];

app.set('view engine', 'ejs'); //view is the folder that we are looking in, engine is a keyword

//set public static files
app.use(express.static('public'));
//include body parser to read POST requests
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());

//return an index.html file when the default route is requested
// app.get('/', function(req,res){
//   res.sendfile('index.html');
// });

//use res.render to load an ejs view file

//index page
app.get('/', function(req,res){
  var friends = [
    { name:'Chanandler Bong'},
    { name: 'Rachel Green'},
    { name: 'Ross Geller'},
    { name: 'Joey Tribiani'},
    { name: 'Monica Geller'},
    { name: 'Phoebe Buffay'}
  ];

  var tagline = 'Of course there, they just call it food.';

  res.render('pages/index', {
    friend: friends,  //creating the label when rendering the page, and the value
    tagline: tagline
  });
});

//add another route
// app.get('/about', function(req,res){
//   res.sendfile('about.html');
// });

app.get('/about', function(req,res){

  res.render('pages/about', {
    reasons: global.reasons
  });
});

//Accept input from the About form
app.post('/about', function(req,res) {
  console.log(req.body.myReason);
  var theReason = {
    reason: req.body.myReason
  }
  global.reasons.push(theReason);
  console.log(global.reasons);
  res.render('pages/about', {
    reasons: global.reasons
  });
});

//input form
app.get('/contact', function(req,res){
  res.sendfile('/pages/contact.html');
});

//form submission
app.post('/contact', function(req,res){

});

app.listen(3000, function(req,res){ //app to listen on port 3000
  console.log('Example app listening on port 3000.');
});
