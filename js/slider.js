/**
 * Created by artem on 22.02.16.
 */
$(document).ready(function() {
    var slideCount = $('.slides .slide').length;
    var slideWidth = $('.slides').width();
    var slideWidthAll  = slideCount * slideWidth;

    $('.slides').css({ width: slideWidthAll});

    $('.prev').click(function(){
        $('.slides').animate({
            right: '-=540px'
        }, 500 );
    });

    $('.next').click(function(){
        $('.slides').animate({
            right: '+=540px'
        }, 500 );
    });



});