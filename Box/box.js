$(document).ready(function() { //jquery doesn't start until the browser is ready

  var box = $(".box"); //.box is a CSS selector

  box.on("click", function(event) {

    var el = $(this);

    el.animate({
      "margin-left": 900,
      "background-color": "red",
    }, 3000, "easeInOutElastic", function onComplete(){
        el.css({
          "margin-left": 20,
          "background-color": "white"
        }); //the 3000 is the 2nd parameter of the animate function
      });//easing is the 3rd, behavior when done is the 4th
    });
});



//alternative way to ready the page
// $(function()) {
//
// });
