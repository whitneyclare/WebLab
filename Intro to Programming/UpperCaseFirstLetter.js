upperCaseFirstLetters("    some good stuff here  ");

function upperCaseFirstLetters(aStr) {
  var cleaned = aStr.trim();
  var words = cleaned.split(" ");
  var output = [];

  // 1st version - using a for loop
  for (var i = 0; i < words.length; i ++) {
    var word = words[i];
    var upperCased = word.charAt(0).toUpperCase() + word.substring(1);
    output.push(upperCased);
  }
  return output.join(" ");
}


//2nd version - using forEach
words.forEach(function(word)) {
  var upperCased = word.charAt(0).toUpperCase() + word.substring(1);
  output.push(upperCased);
}


//3rd version - using map, returns an array
return words.map(function(word)) {
  return upperCased = word.charAt(0).toUpperCase() + word.substring(1);
}).join(" ");
