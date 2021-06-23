$(document).ready(function() {


    /* mobile nav */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        nav.slideToggle(200);

        if (icon.hasClass('fa fa-bars')) {
            icon.addClass('fa fa-times');
            icon.removeClass('fa fa-bars');
        } else {
            icon.addClass('fa fa-bars');
            icon.removeClass('fa fa-times');
        }
    });
});