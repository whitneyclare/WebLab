var message = "Hello";
var x = 27;
var temps = [14, 32, 36, 40];
var person = {
  first: "Whitney",
  last: "Todd",
  age: 33,
  address: {
    city: "Thornton",
    zip: 80241
  }
};



if(person.age >= 21 && person.age < 65) {
  console.log("Hello " + person.first);
} else if (person.age >= 65) {
  console.log("Discount time");
} else {
  console.log("You must leave");
}

/* Can use switch-case stmts with discreet data, but not used all that often */
switch (age) {
  case 21:
    console.log("I'm 21");
    break;
  case 24:
    console.log("I'm 24");
    break;
  case 30:
    console.log("I'm 30");
    break;
  default:
    console.log("I'm " + age);
    break;
}

var x = 0;
while (x < 10) {
  console.log(x++);
}

console.log(person.address.city);



/* Counting holes game */
var lookup = {
  a: 1,
  b: 1,
  d: 1,
  e: 1,
}

function countHoles(str) { //str = "hello"
  var holeCount = 0;
  var letters = str.split(""); //["h" "e" "l" "l" "o"]
  letters.forEach(function(char)) {
    if(lookup[char]) {
      holeCount += lookup[char];
    }
  }
  return.holeCount;
}

countHoles("hello");
