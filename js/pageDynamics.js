$(document).ready(function() {
  
  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      //console.log($(window).scrollTop())
    if ($(window).scrollTop() > 62) {
      $('nav').addClass('fixed-top');
    }
    if ($(window).scrollTop() < 62) {
      $('nav').removeClass('fixed-top');
    }
  });
});