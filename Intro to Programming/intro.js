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

console.log(person.address.city);
