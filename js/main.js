var map1;

function initMap() {

    var mapStyles = [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]},{"featureType":"administrative.country","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#dcf5d4"},{"saturation":"-16"},{"lightness":"4"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"transit.station.rail","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]}]

    if (document.getElementById('map1')) {
        map1 = new google.maps.Map(document.getElementById('map1'), {
            center: {lat: 60.390662, lng: 29.518850},
            zoom: 11,
            zoomControl: true,
            mapTypeControl: false,
            streetViewControl: false,
            disableDefaultUI: true,
            scrollwheel: false
        });

        google.maps.event.addDomListener(window, 'resize', function () {
            var center = map1.getCenter();
            google.maps.event.trigger(map1, 'resize');
            map1.setCenter(center);
        });

        map1.setOptions({styles: mapStyles});

    }


    var geomarkDark = {
        url: '/img/marker.png',
        size: new google.maps.Size(64, 64)
    };

    var markOffice1 = new google.maps.Marker({
        position: {lat: 60.390662, lng: 29.518850},
        map: map1,
        icon: geomarkDark,
        title: 'Here'
    });

}

initMap();

(function($) {
    var mediaCheckMobile = window.matchMedia('(max-width: 640px)');
    var mediaCheckTablet = window.matchMedia('(min-width: 641px) and (max-width: 1200px)');
    var mediaCheckDesktop = window.matchMedia('(min-width: 1201px)');
    
    $(window).on('load resize', function () {
        var viewport = document.getElementById('viewport');
    
        if (mediaCheckMobile.matches) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        } else if (mediaCheckTablet.matches) {
            viewport.setAttribute('content', 'width=device-width');
        } else if (mediaCheckDesktop.matches) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        }
    });
    /*fullpage initialization*/
    var fullpageInit = false;
    var fullpageSlider = $('.fullpage-slider');
    
    function fullpageSettings() {
    
        $('#fullpage-slider').fullpage({
            anchors: ['fp-promo', 'fp-place', 'fp-architecture', 'fp-interior'],
            verticalCentered: false,
            css3: true,
            menu: '#myMenu',
            navigationPosition: 'left',
    
            afterLoad: function() {
                fullpageInit = true;
    
                var loadedSection = $(this);
    
                $('body').addClass('fullpage-loaded');
    
                setTimeout(function() {
                    doDay();
                }, 2500);
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
        });
    }
    
    
    
    if ( $('.page-container').hasClass('page-main') ) {
    
        $(window).on('load resize', function () {
    
            if ((mediaCheckMobile.matches) || (mediaCheckTablet.matches)) {
    
                if (fullpageInit) {
                    fullpageInit = false;
                    $.fn.fullpage.destroy('all');
                }
            }
    
            else if (mediaCheckDesktop.matches) {
    
                if (!fullpageInit) {
                    fullpageSettings();
                    $.fn.fullpage.reBuild();
                }
            }
    
        });
    }
    var promoSwitcher = $('.promo-switcher');
    var btnDay = $('.promo-switcher__btn_day');
    var btnNight = $('.promo-switcher__btn_night');
    
    var promoDay = $('.promo__content_day');
    var promoNight = $('.promo__content_night');
    
    function doDay() {
        promoSwitcher.addClass('promo-switcher_day').removeClass('promo-switcher_night');
        promoNight.addClass('promo__content_hidden');
        promoDay.removeClass('promo__content_hidden');
    }
    
    function doNight() {
        promoSwitcher.addClass('promo-switcher_night').removeClass('promo-switcher_day');
        promoDay.addClass('promo__content_hidden');
        promoNight.removeClass('promo__content_hidden');
    }
    
    btnDay.on('click', function() {
        doDay();
    });
    
    btnNight.on('click', function() {
        doNight();
    });
    /* hamburger hide show */
    var hamburger = $('.hamburger');
    var menuMobile = $('.menu-mobile');
    
    function hamburgerOpen() {
        hamburger.addClass('hamburger_active');
        $('body').addClass('menu-mobile_opened');
        menuMobile.slideDown(200);
    }
    
    function hamburgerClose() {
        hamburger.removeClass('hamburger_active');
        $('body').removeClass('menu-mobile_opened');
        menuMobile.slideUp(200);
    }
    
    hamburger.on('click', function () {
        if ( $(this).hasClass('hamburger_active') ) {
            hamburgerClose()
        } else {
            hamburgerOpen();
        }
    });
    
    $(document).keyup(function(e) {
        if (e.keyCode == 27) { // escape key
            hamburgerClose()
        }
    });
    
    $('.nav__link').each(function(index) {
        if(this.href.trim() == window.location)
            $(this).addClass('nav__link_active');
    });
    $('.dots__item').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500);
                return false;
            }
        }
    });
    // var slickInit = false;
    //
    // function slickRun() {
    //     $('#slider-place').slick({
    //         autoplay: true,
    //         autoplaySpeed: 5000,
    //         arrows: true,
    //         appendArrows: $('.slider__control'),
    //         draggable: false,
    //         prevArrow: '<button type="button" class="slider__arrow slider__arrow_left"></button>',
    //         nextArrow: '<button type="button" class="slider__arrow slider__arrow_right"></button>',
    //         infinite: true,
    //         slidesToShow: 1,
    //         slidesToScroll: 1
    //     });
    // }
    //
    // slickRun();
    //
    // $(window).on('load resize', function () {
    //
    //     if ((mediaCheckMobile.matches) || (mediaCheckTablet.matches)) {
    //         $('#slider-place').slick('destroy');
    //     } else if (mediaCheckDesktop.matches) {
    //
    //     }
    // });
    //
    // $(window).on('load resize', function () {
    //
    //     if ((mediaCheckMobile.matches) || (mediaCheckTablet.matches)) {
    //
    //         if (slickInit) {
    //             slickInit = false;
    //             $('#slider-place').slick('destroy');
    //         }
    //
    //
    //     } else if (mediaCheckDesktop.matches) {
    //
    //         if (!slickInit) {
    //             slickRun();
    //         }
    //     }
    // });
    $(document).ready(function() {
        $("#myMenu").mouseover(function () {
            $("#myMenu").addClass('navbar__active');
            $(".fullpage_nav").addClass('fp_nav__active');
        });
    
        $(".navigation_bar").mouseout(function () {
            $("#myMenu").removeClass('navbar__active');
            $(".fullpage_nav").removeClass('fp_nav__active');
        });
    });
    $(document).ready(function() {
        $("#i-button").click(function () {
            $(".i-form").addClass('i-active');
            $(".darken").addClass('d-active');
            setTimeout(function() {
            $(".i-form__inner ").addClass('i-inner-active');
            }, 600);
        });
    
        $(".i-close").click(function () {
            setTimeout(function() {
            $(".i-form").removeClass('i-active');
                $(".darken").removeClass('d-active');
            }, 600);
            $(".i-form__inner ").removeClass('i-inner-active');
        });
    });
    $(document).ready(function() {
    
    });
     $('#slider-place').slick({
            autoplay: true,
            autoplaySpeed: 3500,
            arrows: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });
     $('#slider-services').slick({
            autoplay: true,
            autoplaySpeed: 3500,
            arrows: true,
            infinite: true,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1
        });

})(jQuery);