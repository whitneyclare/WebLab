
$(document).ready(function(){

  var guessLetters = $('#guesses');
  var newGame = $('#new_game');
  var turnSetting = $('#turns_settings');
  var turnElement = $('#turns');
  var letters = $('#letters');
  var turn_count;

  var words = ["hangman", "boo", "happy", "sad", "tgif", "friday", "beer"];

  for(var i=97; i <= 122; i++){
      var letter = String.fromCharCode(i);
      $('<span data-letter="'+letter+'">'+ letter + '</span>')
        .addClass('letter')
        .appendTo('#guesses');
    }



});
