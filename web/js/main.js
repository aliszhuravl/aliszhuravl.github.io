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
            viewport.setAttribute('content', 'width=device-width');
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
var fullpageInit = false;


var mediaCheckMobile = window.matchMedia('(max-width: 640px)');
var mediaCheckTablet = window.matchMedia('(min-width: 641px) and (max-width: 1199px)');
var mediaCheckDesktop = window.matchMedia('(min-width: 1200px)');
var viewport = document.getElementById('viewport');

// function fullpageSettings() {

    $('#fullpage').fullpage({
        anchors: ['main', 'second', 'third', 'fourth'],
        verticalCentered: false,
        css3: true,
        // menu: '#myMenu',
        navigation: true,
        navigationPosition: 'left',
        afterLoad: function() {
            fullpageInit = true;
        },
        onLeave: function(index, nextIndex, direction){
            if (direction == 'down') {
                $('.cover-animation').addClass('cover-action');
                setTimeout(function() {
                    $('.cover-animation').removeClass('cover-action');
                }, 1100);
            }
            if (direction == 'up') {
                $('.cover-animation').addClass('cover-action');
                setTimeout(function() {
                    $('.cover-animation').removeClass('cover-action');
                }, 1100);
            }
        }
        // onLeave: function(index, nextIndex, direction){
        //
        // }
    });
    $.fn.fullpage.setAllowScrolling(false);
// }




if ( $('.page-container').hasClass('page-main') ) {

    $(window).on('load resize', function () {

        if (mediaCheckDesktop.matches) {

            if (!fullpageInit) {
                fullpageSettings();
                $.fn.fullpage.reBuild();
            }
        } else if ((mediaCheckMobile.matches) || (mediaCheckTablet.matches)) {

            if (fullpageInit) {
                fullpageInit = false;
                $.fn.fullpage.destroy('all');
            }

        }
    });
}
$('.hamburger').on('click', function () {
    if ( $(this).hasClass('hamburger_active') ) {
        $(this).removeClass('hamburger_active');
        $('.menu').removeClass('menu_active');
        $('.sir_content').removeClass('content_closed');
        $('.number').removeClass('num_active');
    } else {
        $(this).addClass('hamburger_active');
        $('.menu').addClass('menu_active');
        $('.sir_content').addClass('content_closed');
        $('.number').addClass('num_active');
    }
});

$('.link_menu').on('click', function () {
    $('.hamburger').removeClass('hamburger_active');
    $('.menu').removeClass('menu_active');
    $('.sir_content').removeClass('content_closed');
    $('.number').removeClass('num_active');
});