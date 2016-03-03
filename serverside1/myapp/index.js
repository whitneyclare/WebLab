// using express makes setting up the server easier since it has many shortcut methods.
var express = require('express');
// body-parser allows us to easily capture form values when receiving a request.
// this is installed using the command 'npm install body-parser --save'
//  using the '--save' flag adds this library to our list of dependencies in the package.json file.
// assign it to the var bodyParser
var bodyParser = require('body-parser');

var randomWord = require('random-word');

var request = require('request');

//assign cookie-parser to var cookieParser
var cookieParser = require('cookie-parser');

var app = express();

//create a global array of simple json objects.
// by making this global multiple methods can access or modify the array.
global.reasons = [
    {reason: 'My mom loves me'}
];

// We are using the EJS templating engine to build the pages before sending them back
// to the browser
// this is installed using the command 'npm install ejs --save'
//  using the '--save' flag adds this library to our list of dependencies in the package.json file.
app.set('view engine', 'ejs');

// set public static files
app.use(express.static('public'));
// tell the app to use bodyParser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//tell the app to use cookies parser
app.use(cookieParser());

// return an index.html file when the default route is requested.
// app.get('/', function (req,res) {
//     res.sendfile('index.html');
// });

// use res.render to load an ejs view file

// index page
// this is our default route.  This route has a small array of json objects defined in it.
app.get('/', function(req,res) {
    // here's our array of names
    var friends = [
        { name: 'Chanandler Bong'},
        { name: 'Rachel Green'},
        { name: 'Ross Geller'},
        { name: 'Joey Tribbiani'},
        { name: 'Monica Geller'},
        { name: 'Phoebe Buffay'}
    ];
    // a simple string we're using to act as another piece of data.
    var tagline = "Of course there, they just call it food.";

    // calling the render method and also passing in an object containing our array and string we created above.
    res.render('pages/index', {
        friends: friends,
        tagline: tagline
    });
});


// add another route
// app.get('/about', function(req,res) {
//     res.sendfile('about.html');
// });

// Building another route.  This route accepts requests using a 'GET' method.
app.get('/about', function(req,res) {
    // calling our render method but passing in an object containing our global array from above.
    res.render('pages/about', {
        reasons: global.reasons
    });
});

// Accept input from the About form
// This route, while having the same path as the route above, will only accept a 'POST' request method.
// This is great for receiving a submission from a form.
app.post('/about', function(req,res) {
    // show the contents of the form value in the server's console.
    console.log(req.body.myReason);
    // create a simple object that contains both a property 'reason' and the value we received from the form
    var theReason = {
        reason: req.body.myReason
    }
    // us the array.push method to add the new object 'theReason' to the existing global array 'reasons'
    global.reasons.push(theReason);
    // show the updated array in the server console log
    console.log(global.reasons);

    // render the 'about' page again & pass in the updated 'reasons' array.
    res.render('pages/about', {
        reasons: global.reasons
    });
})

app.get('/about/:index', function(req,res){
  console.log(req.params);
  var indexOfTheReason = req.params.index;
  global.reasons.splice(indexOfTheReason,1);
  res.render('pages/about', {
      reasons: global.reasons
  });
});

app.get('/name', function(req,res){
  res.render('pages/name')
});

app.get('/name', function(req,res){
  var theName = 'Human';
  var theWord = randomWord();
  console.log(theWord);
  var url = 'http://dictionaryapi.net/api/definition/' + theWord;
  request(url, function(error,response,body){
    if(!error && response.statusCode === 200){
      console.log(body);
    }
  });
  if(req.cookies.username) {
    theName = req.cookies.username;
  }
  console.log('Hello there, ' + req.cookies.username);
  res.render('pages/name', {
    name: theName,
    word: theWord
  });
});

// input form
// app.get('/contact', function(req,res) {
//     res.sendfile('/pages/contact.html');
// });

// form submission

// app.post('/contact', function(req, res) {
//
// })

app.listen(3000, function() {
    console.log('Example app listening on port 3000.');
});
