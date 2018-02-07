$(document).ready(function() {
  
    $(window).scroll(function () {
        if ($(window).scrollTop() > 62) {
            $('.nav-scrolling').removeClass('hide');
        }
        if ($(window).scrollTop() < 62) {
            $('.nav-scrolling').addClass('hide');
        }
    });
      
});
