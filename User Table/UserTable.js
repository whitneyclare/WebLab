$(document).ready(function(){

var userTable = $("#users tbody"); //or $("#users").find("tbody")

var nameField = $("#name");
var emailField = $("#email");

var add_btn = $("#add");
var clearAll_btn = $("#clearAll");

userTable.on("click", "button.remove", function(){ //there is no event listener on child
  var btn = $(this);                   //so it must bubble up to it's parent
  btn.parents("tr").remove();  //looks up the chain until it finds a tr
});

add_btn.on("click", function(){

  addUser({
    name: nameField.val(), // a getter , gets a value
    email: emailField.val()
  });

//the function addUser is run (above),
//then the nameField and emailField is cleared (below)

  nameField.val(""); // a setter, passing in an empty string clears the field
  emailField.val("");
});

function addUser(user) {
  var userRow = $(
    "<tr>" +
    "<td>" + user.name + "</td>" +
    "<td>" + user.email + "</td>" +
    "<td><button class = 'remove btn btn-primary btn-xs'>remove</button></td>" +
    "</tr>"); //pay attention to double vs single quotes (above)

    userTable.append(userRow);



}

clearAll_btn.on("click", function(){
  userTable.empty();
});

});
