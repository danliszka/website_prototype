$(document).ready(function() {
  
    $(window).scroll(function () {
        if ($(window).scrollTop() > 62) {
            $('.nav-scrolling').removeClass('hide');
        }
        if ($(window).scrollTop() < 62) {
            $('.nav-scrolling').addClass('hide');
        }
    });
    
    $('#about_us').click(function(ev){
        console.log("hey");
        ev.preventDefault();
        ev.stopImmediatePropagation();
        $('#drop_down').attr("style","display: inline-block");
    });
    
    $(window).click(function(ev){
        if ($('#drop_down').attr("style") == "display: inline-block")
            {
                $('#drop_down').attr("style","display: none");
            }
        console.log("not open");
        
    });
    
    
});
