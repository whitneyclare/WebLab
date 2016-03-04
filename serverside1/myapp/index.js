// using express makes setting up the server easier since it has many shortcut methods.
var express = require('express');
// body-parser allows us to easily capture form values when receiving a request.
// this is installed using the command 'npm install body-parser --save'
//  using the '--save' flag adds this library to our list of dependencies in the package.json file.
// assign it to the var bodyParser
var bodyParser = require('body-parser');

// random-word pulls a word from a huge list for us.  Assign it to the new object called randomWord;
var randomWord = require('random-word');

// request will allow us to send requests to systems outside our server and capture that response.
// Assign it to a new object called 'request'
var request  = require('request');


var app = express();

// cookie-parser allows us to examine cookies being passed back with requests.
// assign cookie-parser to var cookieParser
var cookieParser = require('cookie-parser');

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

// tell the app to use the cookie parser
app.use(cookieParser());

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


// Building a new route that allows us to remove an item from the global.reasons array.
// the route accepts the index of the reason via the req.params object.
app.get('/about/:index',function(req,res) {
    // log the params object.
    console.log(req.params);
    // assign the index to the var indexOfTheReason
    var indexOfTheReason = req.params.index;
    // splice the global.reasons array at the index and remove one member.
    global.reasons.splice(indexOfTheReason,1);
    // now that the array has been modified, render the About page which will include the updated array.
    res.render('pages/about', {
        reasons: global.reasons
    });
});

// This route lets us play with some cookies.
app.get('/name', function(req, res) {
    // create a var theName with a default value of 'Human'
    var theName = 'Human';
    // use the randomWord middleware to generate a random word and assign it to 'theWord'
    var theWord = randomWord();
    // log 'theWord'
    console.log(theWord);
    // build a url to get a definition of our new random word
    // we concatenate the base of the url and our word together
    var url = 'http://dictionaryapi.net/api/definition/' + theWord;
    // fire the request to the external server using the 'request' object.
    // we provide the URL we just built and provide a callback function that
    // accepts an error, response, & body object from 'request'.
    request(url, function (error, response, body) {
        // if there's no error and the status of the response is good...
      if (!error && response.statusCode === 200) {
          // grab the body of the response and assign it to 'results'
          var results = body;
          // console.log that beast
          // we ran out of time and overloaded the API working to pull the definition from the results.
          // we'll see what we can do with this is the lab.
        console.log(results) ;
      }
    })
    // each request to this server can carry a cookie with it.
    // let's check for a cookie called 'username'
    if(req.cookies.username) {
        // if there is one, assign it's value to 'theName'
        theName = req.cookies.username;
    }
    // Be friendly, send a message to the name in the console.log
    console.log("Hello there, " + req.cookies.username);
    // pass theWord and theName to the render method to be used in the name.ejs template.
    res.render('pages/name',{
        name: theName,
        word: theWord
    })
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
