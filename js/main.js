(function($) {

    $(window).on('load resize', function () {

        /**
         *  set adaptive viewport on screens smaller then 640 and bigger than 1200
         *  set static viewport on screens between 641px and 1199
         */

        var mediaCheckMobile = window.matchMedia('(max-width: 640px)');
        var mediaCheckTablet = window.matchMedia('(min-width: 641px) and (max-width: 1199px)');
        var mediaCheckDesktop = window.matchMedia('(min-width: 1200px)');
        var viewport = document.getElementById('viewport');

        if (mediaCheckMobile.matches) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        } else if (mediaCheckTablet.matches) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        } else if (mediaCheckDesktop.matches) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        }
    });
})(jQuery);
window.onload = function() {

    function GetIEVersion() {
        var sAgent = window.navigator.userAgent;
        var Idx = sAgent.indexOf("MSIE");

        // If IE, return version number.
        if (Idx > 0)
            return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx)));

        // If IE 11 then look for Updated user agent string.
        else if (!!navigator.userAgent.match(/Trident\/7\./))
            return 11;

        else
            return 0; //It is not IE
    }

    if (GetIEVersion() > 0) {
        $('body').addClass('internet-explorer');
    } else {
        return;
    }
};
(function($) {

    function linkHighlight(linkClass) {

        /* highlight active menu item*/
        $(linkClass).each(function (index) {
            if (this.href.trim() == window.location)
                $(this).addClass('link_active');
        });
    }

    linkHighlight('.nav__link');

})(jQuery);
$(document).ready(function() {
    $(".services_container__inner_box").hover(function () {
        $('.active_box').removeClass('active_box');
        $(this).addClass('active_box');
        $(this).siblings().removeClass('active_box');
    });
});
(function($) {

    function smoothScroll(link) {

        $(link).click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 80
                    }, 600);
                    return false;
                }
            }
        });
    }

    smoothScroll( '#link-to-block' );

})(jQuery);
$(window).on('load', function() {
    $('body').addClass('stoppedpl');
    $('#loader').animate({
        width: "100%"
    }, 800);
    setTimeout(function() {
        $('#loader').fadeOut(200);
    }, 900);
    setTimeout(function() {
        $('#preloader').removeClass('active_load');
        $('body').removeClass('stoppedpl');
    }, 1200);
});
(function($) {
    var hamburger = $('.hamburger');
    var body = $('body');

    function hamburgerOpen() {
        hamburger.addClass('hamburger_active');
        $('body').addClass('stopped');
        $('.menu_opener').addClass('menu-mobile_opened');
    }

    function hamburgerClose() {
        hamburger.removeClass('hamburger_active');
        $('body').removeClass('stopped');
        $('.menu_opener').removeClass('menu-mobile_opened');
    }

    hamburger.on('click', function () {
        if ( $(this).hasClass('hamburger_active') ) {
            hamburgerClose();
            $('body').removeClass('stopped');
        } else {
            hamburgerOpen();
            $('body').addClass('stopped');
        }
    });

    $('.menu_wrapper').on('click', function() {
        hamburgerClose();
    });


})(jQuery);
$(document).ready(function(){
    if($('.gb_animate').length) {
        $('.gb_animate').viewportChecker({
            classToAdd: 'visible animated fadeIn',
            offset: 10
        });
        $('.gs_animate').viewportChecker({
            classToAdd: 'visible animated fadeIn',
            offset: 200
        });
        $('.gl_animate').viewportChecker({
            classToAdd: 'visible animated fadeInLeft',
            offset: 200
        });
    }
});
$(document).ready(function() {
    $(".theme-button").click(function () {
        $('body').toggleClass('change_theme');
    });
});
$(function() {

    $('.types_slider').slick({
        dots: true,
        infinite: true,
        cssEase: 'linear',
        slidesToShow: 1,
        speed: 300,
        fade: true,
        arrows: false
    });

    $('.projects_slider').slick({
        dots: true,
        infinite: true,
        cssEase:'linear',
        slidesToShow: 3,
        arrows: false,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    $('.article_slider').slick({
        dots: true,
        infinite: true,
        cssEase:'linear',
        slidesToShow: 4,
        arrows: false,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    $('.personal_slider').slick({
        dots: true,
        infinite: true,
        cssEase: 'linear',
        slidesToShow: 4,
        centerMode: false,
        speed: 300,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    $('.slider_main').slick({
        dots: true,
        infinite: true,
        cssEase:'linear',
        slidesToShow: 1,
        arrows: false,
        fade: true,
        centerMode: false
    });

    $('.feedback').slick({
        dots: true,
        infinite: true,
        cssEase:'linear',
        slidesToShow: 3,
        arrows: false,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    $('.simple_slider').slick({
        dots: false,
        infinite: true,
        cssEase: 'linear',
        slidesToShow: 4,
        centermode: false,
        speed: 300,
        arrows: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    $('.docs-slider').slick({
        dots: true,
        infinite: true,
        cssEase: 'linear',
        slidesToShow: 4,
        centermode: false,
        speed: 300,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    $('.project_slider').slick({
        dots: false,
        infinite: true,
        cssEase:'linear',
        slidesToShow: 2,
        arrows: true,
        variableWidth: true,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    dots: false
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    arrows: true,
                    variableWidth: false,
                    fade: true
                }
            }
        ]
    });

    $('.ps_slider').slick({
        dots: true,
        infinite: true,
        cssEase: 'linear',
        slidesToShow: 5,
        centermode: false,
        speed: 300,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    arrows: false,
                    dots: true
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    arrows: false,
                    dots: true
                }
            }
        ]
    });

    if ($('.ps_slider .slide').length < 5) {
        $('.slider').slick('unslick');
    }

});
(function($) {

    $('.tabs').each( function() {

        $('.tabs__buttons').on('click', '.tabs__btn:not(.tabs__btn_active)', function () {
            $(this).addClass('tabs__btn_active').siblings().removeClass('tabs__btn_active');
            $(this).closest('.tabs').find('.tabs__item').removeClass('tabs__item_active').eq($(this).index()).addClass('tabs__item_active');
        });
    });
})(jQuery);