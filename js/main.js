$(function(){

    $('.swipe-btn').on('click', function(e){
        $('html,body').stop().animate({ scrollTop: $('#description').offset().top }, 1000);
        e.preventDefault();
        $('.swipe-btn').fadeOut(500);
    });

});

var count = 1;
setInterval(function() {
    count = ($(".slideshow :nth-child("+count+")").fadeOut().next().length == 0) ? 1 : count+1;
    $(".slideshow :nth-child("+count+")").hide().fadeIn(2500);
}, 6000);

var xscount = 1;
setInterval(function() {
    xscount = ($(".xs-slideshow :nth-child("+xscount+")").fadeOut().next().length == 0) ? 1 : xscount+1;
    $(".xs-slideshow :nth-child("+xscount+")").hide().fadeIn(2500);
}, 6000);

