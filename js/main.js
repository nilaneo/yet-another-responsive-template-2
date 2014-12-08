$(document).ready(function() {
    $('select').fancySelect();
    $('.jcarousel')
        .on('jcarousel:create jcarousel:reload', function() {
            var element = $(this),
                width = element.innerWidth();

            if (width > 700) {
                width = (width - 60) / 3;
            } else if (width > 500) {
                width = (width - 40) / 2;
            } else if (width < 499) {
                width = width;
            }

            element.jcarousel('items').css('width', width + 'px');
        });


    $('.jcarousel-control-prev')
    .jcarouselControl({
        target: '-=1',
    });

    $('.jcarousel-control-next')
    .jcarouselControl({
        target: '+=1'
    });

    $('.jcarousel-control').on('jcarouselcontrol:inactive', function() {
        $(this).addClass("inactive");
    });

    $('.jcarousel-control').on('jcarouselcontrol:active', function() {
        $(this).removeClass("inactive");
    });

    $('.jcarousel').jcarousel();
});