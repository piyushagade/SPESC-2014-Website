/*
Author: Piyush Agade
Oct. 2013 */


$(window).bind("scroll", function() {
    if ($(this).scrollTop() < 480) {
        $("#subOverlay").fadeIn();
		
    } else {
        $("#subOverlay").stop().fadeOut();
		
    }
});

// Per-property easing
