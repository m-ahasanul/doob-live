(function($){
    "use strict"
    $("#about-slider").owlCarousel({
        items:1,
        loop:true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        // stagePadding: 70,
        navText: ['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
        nav: true,
    });





})(jQuery)