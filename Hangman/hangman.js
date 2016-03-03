$(document).ready(function(){

  var guessLetters = $('#guesses'); // The container that holds letters to select
  var newGame = $('#new_game'); // new game button. This starts the game
  var turnSetting = $('#turns_settings'); // input field to adjust number of guesses (turns)
  var turnElement = $('#turns'); // visual display to show how many turns are left
  var letters = $('#letters'); // container that holds the letter panels of the actual word to guess
  var turn_count; // number of turns remaining (variable placeholder)

  // An array of words to choose a random one for someone to guess.
  // Obviously more words makes for a better game (we can worry about that later).
  var words = ["hangman", "boo", "happy", "sad", "tgif", "friday", "beer"];

  for(var i=97; i <= 122; i++){
      var letter = String.fromCharCode(i);
      $('<span data-letter="'+letter+'">'+ letter + '</span>')
        .addClass('letter')
        .appendTo('#guesses');
    }
});

//Select a word
// Accept guess letters
// Determine if it is a correct or incorrect quess
// If correct add to word boxes
// If incorrect add box above and turn read
// Decrease turns left by 1

// When guess count = 0 game over
// New game button actions
  // Reset turns left
// When word correctly uncovered -- you win
