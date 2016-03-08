$(document).ready(function(){

  var guessLetters = $('#guesses'); // The container that holds letters to select
  var newGame = $('#new_game'); // new game button. This starts the game
  var turnSetting = $('#turns_settings'); // input field to adjust number of guesses (turns)
  var turnElement = $('#turns'); // visual display to show how many turns are left
  var letters = $('#letters'); // container that holds the letter panels of the actual word to guess
  var turn_count; // number of turns remaining (variable placeholder)

  var word = "hangman";

//Add letter tiles
  for(var i=97; i <= 122; i++){
      var letter = String.fromCharCode(i);
      $('<span data-letter="'+letter+'">'+ letter + '</span>')
        .addClass('letter')
        .appendTo('#guesses');
    }

//Determine number of letters in word & add tiles
displayWordSpaces(word);

function displayWordSpaces(word){
      for(var i = 0; i < word.length; i++) { // make a tile for each letter in the word to guess.
          var element = $('<span />'); // create a span element
          element.addClass('letter'); // add a `letter` class
          element.data('letter', word[i]); // add a data attribute `letter` with the letter value.
          element.html('&nbsp;'); // add a blank space inside the html tag
          element.appendTo(letters); // add it to the page inside the `letters` container.
      }
  }

newGame.on('click', function(){


});

//Turn count behavior
turn_count = parseInt(turnSetting.val());


// Accept guess letters
guessLetters.on('click', '.letter', function(){
  var element = $(this);

  if (turn_count === 0) {
    return;
  }

  if (element.hasClass('selected')) {
    return;
  }

  element.addClass('selected');

  var selectedLetter = element.data('letter');
  var notFound = true;

  letters.find('.letter').each(function(){ // find all current word letters and loop over them.
        var aLetter = $(this); // the current word letter element in the loop.

       if( aLetter.data('letter') === selectedLetter ) { // check data attribute matches
           aLetter.html(selectedLetter); // if so display
           notFound = false; // we found one so make this false.
       }
    });

    if(notFound){
       turnElement.html(--turn_count); // update turn_count and display if there are no matched.
    }
  });
});




//Select a word

// When guess count = 0 game over

// When word correctly uncovered -- you win
