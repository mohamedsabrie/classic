$(function () {
    'use strict';
    var myHeader = $('.header');
    myHeader.height($(window).height());

    $(window).resize(function () {
        myHeader.height($(window).height());
        $('.slider').each(function () {
            $(this).css('paddingTop', (($(window).height() - $('.slider li').height()) / 2))
        });

    });


    $('.links li a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active')
    });

    $('.slider').each(function () {
        $(this).css('paddingTop', (($(window).height() - $('.slider li').height()) / 2))
    });


    // Trigger The Slider

    $('.slider').bxSlider({
        pager: false
    });

    //smooth scroll down 

    $('.links li a').click(function(){
        $('html, body').animate({
            scrollTop: $('#'+ $(this).data('value')).offset().top

        },1000)
    });

    //Our Auto Slider Code 

    (function autoSlider(){
        $('.testi-slider .active').each(function(){
            if(!$(this).is(':last-child')){
                $(this).delay(3000).fadeOut(1000,function(){
                    $(this).removeClass('active').next().addClass('active').fadeIn();
                    autoSlider()
                })
            }
            else{
                $(this).delay(3000).fadeOut(1000,function(){
                    $(this).removeClass('active');
                    $('.testi-slider div').eq(0).addClass('active').fadeIn();
                    autoSlider();

                })

            }
        })

    }());

    $('#container').mixItUp();

    $("body").niceScroll({
        cursorcolor:"#28bda0",

        cursorwidth:'12px',

        cursorborder:'1px solid #28bda0'
    });




})