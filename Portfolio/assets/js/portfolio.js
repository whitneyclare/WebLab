$(document).ready(function(){

//Click menu to open work & contact section
  $('section').click(function(){
    $('.menuexpand').addClass('open');
    $('.worktab').addClass('selected');
    $('.work').hide();
    $('.contactcontents').hide();
  });

//Click contacttab to show contactcontents & make tab active
  $('.contacttab').click(function(){
    $('.contacttab').addClass('selected');
    $('.contactcontents').addClass('open').show();
    $('.worktab').removeClass('selected');
    $('.projectlist').hide();
  });

  $('.worktab').click(function(){
    $('.worktab').addClass('selected');
    $('.projectlist').addClass('open').show();
    $('.contacttab').removeClass('selected');
    $('.contactcontents').hide();
  });

  $('.closetab').click(function(){
    $('.worktab').hide();
    $('.projectlist').hide();
    $('.contacttab').hide();
    $('.contactcontents').hide();
    $('.closetab').hide();
    $('.work').show();
  });






});
