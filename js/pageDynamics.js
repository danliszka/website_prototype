$(document).ready(function() {
  
  $(window).scroll(function () {
    if ($(window).scrollTop() > 62) {
        $('nav').addClass('fixed-top');
        $('nav').addClass('nav-scrolling');
        $('.nav-buttons').addClass('nav-buttons-scrolling');
    }
    if ($(window).scrollTop() < 62) {
        $('.nav-buttons').removeClass('nav-buttons-scrolling');
        $('nav').removeClass('nav-scrolling');
        $('nav').removeClass('fixed-top');
    }
  });
});