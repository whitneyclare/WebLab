$(document).ready(function(){

//Click menu to open work & contact section
  $('section').click(function(){
    $('.menuexpand').addClass('open');
    $('.worktab').addClass('selected');
    $('.projectlist').addClass('open').show();
    $('.intro').hide();
    $('.work').hide();
    $('.contactcontents').hide();
  });

//Click work & contact tabs to show content & make tab active
  $('.worktab').click(function(){
    $('.worktab').addClass('selected');
    $('.projectlist').addClass('open').show();
    $('.contacttab').removeClass('selected');
    $('.contactcontents').hide();
  });

  $('.contacttab').click(function(){
    $('.contacttab').addClass('selected');
    $('.contactcontents').addClass('open').show();
    $('.worktab').removeClass('selected');
    $('.projectlist').hide();
  });

//Click close tab and return to main page
  $('.closetab').click(function(){
    $('.menuexpand').removeClass('open');
    $('.projectlist').removeClass('open');
    $('.contacttab').removeClass('selected');
    $('.contactcontents').removeClass('open');
    $('.intro').show();
    $('.work').show();
  });

setBindings();




});



function setBindings() {
  console.log('set');
  $('.projectlist li a').click(function(e){


    e.preventDefault();

    $('.menuexpand').removeClass('open');
    $('.projectlist').removeClass('open');
    $('.contacttab').removeClass('selected');
    $('.contactcontents').removeClass('open');
    $('.intro').show();
    $('.work').show();

    var sectionID = e.currentTarget.id + "Section";
    $('html body').animate({
      scrollTop: $('#' + sectionID).offset().top
    }, 1000);
  });

  $('.boot img').click(function(e){
    e.preventDefault();
    var sectionID = e.currentTarget.id + "Section";

    $('html body').animate({
      scrollTop: $('#' + sectionID).offset().top
    }, 1000);
  });

  $('.logo span').click(function(e){
    e.preventDefault();
    var sectionID = e.currentTarget.id + "Section";

    $('html body').animate({
      scrollTop: 0}, 1000);
  });





}
