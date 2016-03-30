$(document).ready(function(){


//Show menu when Portfolio li clicked
$('.portfolio').click(function(){
   $('.filter').addClass('open');
   $('.gallery div').show();
});

$('.portfolio').click(function(){
  $('.portfolio').addClass('selected');
});

// $('.portfolio').mouseout(function(){
//   $('.filter').removeClass('open');
// });

//Link click to category & filter images & hide menu
$('.travelfilter').click(function(){
  $(".gallery div[class!='travel']").hide();
  $('.filter').removeClass('open');
});

$('.archfilter').click(function(){
  $(".gallery div[class!='arch']").hide();
  $('.filter').removeClass('open');
});

$('.miscfilter').click(function(){
  $(".gallery div[class!='misc']").hide();
  $('.filter').removeClass('open');
});



var $overlay = $('<div class="overlay"></div>');
var $image = $("<img>");
var $caption = $("<p></p>");

//An image to overlay
$overlay.append($image);

//A caption to overlay
$overlay.append($caption);

//Add overlay
$("body").append($overlay);

//Capture the click event on a link to an image
$(".gallery img").click(function(event){

  var imageLocation = $(this).attr("data");
  //Update overlay with the image linked in the link
  $image.attr("src", imageLocation).show();

  //Show the overlay.
  $overlay.show();

  //Get child's title attribute and set caption
  var captionText = $(this).attr("alt");
  $caption.text(captionText);
});

//When overlay is clicked
$overlay.click(function(){
  //Hide the overlay
  $overlay.hide();
});


});
