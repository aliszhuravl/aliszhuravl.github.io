(function($) {

    $(window).on('load resize', function () {

        /**
         *  set adaptive viewport on screens smaller then 640 and bigger than 1200
         *  set static viewport on screens between 641px and 1199
         */

        var mediaCheckMobile = window.matchMedia('(max-width: 640px)');
        var mediaCheckTablet = window.matchMedia('(min-width: 641px) and (max-width: 1349px)');

        var mediaCheckDesktop = window.matchMedia('(min-width: 1350px)');
        var viewport = document.getElementById('viewport');

        // if (mediaCheckMobile.matches) {
        //     viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        // }

        if (mediaCheckTablet.matches) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        }
        else if (mediaCheckDesktop.matches) {
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
var map1;
var map2;
var map3;

function initMap() {

    var mapStyles = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}];

    if (document.getElementById('map1')) {
        map1 = new google.maps.Map(document.getElementById('map1'), {
            center: {lat: 55.672288, lng: 37.848493},
            zoom: 14,
            zoomControl: true,
            mapTypeControl: false,
            streetViewControl: false,
            scrollwheel: true
        });

        google.maps.event.addDomListener(window, 'resize', function () {
            var center1 = map1.getCenter();
            google.maps.event.trigger(map1, 'resize');
            map1.setCenter(center1);
        });

        map1.setOptions({styles: mapStyles});
    }

    if (document.getElementById('map2')) {
        map2 = new google.maps.Map(document.getElementById('map2'), {
            center: {lat: 55.672288, lng: 37.848493},
            zoom: 14,
            //disableDefaultUI: true,
            zoomControl: true,
            mapTypeControl: false,
            streetViewControl: false,
            scrollwheel: false
        });

        google.maps.event.addDomListener(window, 'resize', function () {
            var center2 = map2.getCenter();
            google.maps.event.trigger(map2, 'resize');
            map2.setCenter(center2);
        });

        map2.setOptions({styles: mapStyles});
    }

    if (document.getElementById('map3')) {
        map3 = new google.maps.Map(document.getElementById('map3'), {
            center: {lat: 55.672288, lng: 37.848493},
            zoom: 14,
            zoomControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            scrollwheel: false
        });

        google.maps.event.addDomListener(window, 'resize', function () {
            var center3 = map3.getCenter();
            google.maps.event.trigger(map3, 'resize');
            map3.setCenter(center3);
        });

        map3.setOptions({styles: mapStyles});
    }

    var geomarkDark = {
        url: '/img/pin.png',
        size: new google.maps.Size(60, 69)
    };

    var markOffice1 = new google.maps.Marker({
        position: {lat: 55.672288, lng: 37.848493},
        map: map1,
        icon: geomarkDark,
        title: 'Тут'
    });

    var markOffice2 = new google.maps.Marker({
        position: {lat: 55.672288, lng: 37.848493},
        map: map2,
        icon: geomarkDark,
        title: 'Тут'
    });

    var markOffice3 = new google.maps.Marker({
        position: {lat: 55.672288, lng: 37.848493},
        map: map3,
        icon: geomarkDark,
        title: 'Тут'
    });
}

initMap();
$(document).ready(function() {
    $('.slider_main').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.btn_prev'),
        nextArrow: $('.btn_next'),
        dots: true,
        appendDots: $('.slick-dots')
    });

    $('.slider_for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        asNavFor: '.slider_nav'
    });
    $('.slider_nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        asNavFor: '.slider_for',
        focusOnSelect: true
    });

    $('.slider_same').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.btn_prev'),
        nextArrow: $('.btn_next'),
        dots: false
    });

    $('.about-slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: $('.btn_prev'),
        nextArrow: $('.btn_next'),
        dots: false
    });

    $('.about-slick')

        .on('beforeChange', function(event, slick, currentSlide, nextSlide){
            var indexSlide = nextSlide + 1;
            $('.slide-number').text(indexSlide);
        });

});

$(document).ready(function() {
    $("#moscow").click(function () {
        $(".popm").addClass('visible_popup');
        $("body").addClass('stop');
    });

    $(".cross-pop").click(function () {
        $(".popup_wrapper").removeClass('visible_popup');
        $("body").removeClass('stop');
    });

});


$(document).ready(function() {
    $("#novgorod").click(function () {
        $(".popn").addClass('visible_popup');
        $("body").addClass('stop');
    });

    $(".cross-pop").click(function () {
        $(".popup_wrapper").removeClass('visible_popup');
        $("body").removeClass('stop');
    });

});

$(document).ready(function() {
    $("#open-job").click(function () {
        $(".popv").addClass('visible_popup');
        $("body").addClass('stop');
    });

    $(".cross-pop").click(function () {
        $(".popup_wrapper").removeClass('visible_popup');
        $("body").removeClass('stop');
    });

});
$(document).ready(function() {
    $(".fancybox").fancybox();
});

// Fires whenever a player has finished loading
function onPlayerReady(event) {
    event.target.playVideo();
}

// Fires when the player's state changes.
function onPlayerStateChange(event) {
    // Go to the next video after the current one is finished playing
    if (event.data === 0) {
        $.fancybox.next();
    }
}


// The API will call this function when the page has finished downloading the JavaScript for the player API
function onYouTubePlayerAPIReady() {

    // Initialise the fancyBox after the DOM is loaded
    $(document).ready(function() {
        $(".fancybox-video")
            .attr('rel', 'gallery')
            .fancybox({
                openEffect  : 'none',
                closeEffect : 'none',
                nextEffect  : 'none',
                prevEffect  : 'none',
                padding     : 0,
                margin      : 50,
                beforeShow  : function() {
                    // Find the iframe ID
                    var id = $.fancybox.inner.find('iframe').attr('id');

                    // Create video player object and add event listeners
                    var player = new YT.Player(id, {
                        events: {
                            'onReady': onPlayerReady,
                            'onStateChange': onPlayerStateChange
                        }
                    });
                }
            });
    });

}
$(document).ready(function() {
    (function ($) {
        var Accordion = function (el, multiple) {
            this.el = el || {};
            this.multiple = multiple || false;

            // Variable
            var links = this.el.find('.accordion__btn');
            // Event
            links.on('click', {
                el: this.el,
                multiple: this.multiple
            }, this.dropdown)
        };

        Accordion.prototype.dropdown = function (e) {
            var $el = e.data.el;
            $this = $(this);
            $next = $this.next();

            $next.slideToggle(150);
            $this.parent().toggleClass('accordion__item_open');

            // collapse other accordions
            if (!e.data.multiple) {
                $el.find('.accordion__content').not($next).slideUp().parent().removeClass('accordion__item_open');
            }
        };

        var accordion = new Accordion($('.accordion'), false);

    })(jQuery);

});
$('.dd_menu').each(function () {

    // Cache the number of options
    var $dropdown = $(this),
        $dropdowns = $('.dd_menu').not(this),
        $dropdownList = $dropdown.find('.dropdown__list'),
        $dropdownText = $dropdown.find('.dropdown__text');
        $dropdownsText = $dropdowns.find('.dropdown__text');

    // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
    $dropdown.on('mouseover', function(e) {
        e.stopPropagation();
        $dropdowns.removeClass('dropdown_opened');
        $dropdowns.find('.dropdown__list').fadeOut(250);
        $dropdownsText.removeClass('red');

        if ($dropdown.hasClass('dropdown_opened')) {
            $dropdownText.addClass('red');

        } else {
            $dropdown.addClass('dropdown_opened');
            $dropdownText.removeClass('red');
            $dropdown.find('.dropdown__list').css('display', 'flex').addClass('dl_open');
        }
    });

    $dropdown.on('click', function(e) {
        e.stopPropagation();
        $dropdowns.removeClass('dropdown_opened');
        $dropdowns.find('.dropdown__list').fadeOut(250);
        $dropdownText.removeClass('red');

        if ($dropdown.hasClass('dropdown_opened')) {
            $dropdownText.addClass('red');

        } else {
            $dropdown.addClass('dropdown_opened');
            $dropdownText.addClass('red');
            $dropdown.find('.dropdown__list').css('display', 'flex').addClass('dl_open');
        }
    });

    // Hides the unordered list when clicking outside of it
    $(document.body).click(function() {
        $dropdown.removeClass('dropdown_opened');
        $dropdownList.fadeOut(250);
        $dropdownText.removeClass('red');
    });

});

$('.dd_filter').each(function () {

    // Cache the number of options
    var $dropdown = $(this),
        $dropdowns = $('.dd_filter').not(this),
        $dropdownList = $dropdown.find('.dropdown__list')

    // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
    $dropdown.on('click', function(e) {
        e.stopPropagation();
        $dropdowns.removeClass('dropdown_opened');
        $dropdowns.find('.dropdown__list').fadeOut(250);

        if ($dropdown.hasClass('dropdown_opened')) {
            //$dropdown.removeClass('dropdown_opened');
            //$dropdown.find('.dropdown__list').slideUp(250);
        } else {
            $dropdown.addClass('dropdown_opened');
            $dropdown.find('.dropdown__list').css('display', 'flex');
        }
    });

    // Hides the unordered list when clicking outside of it
    $(document.body).click( function() {
        $dropdown.removeClass('dropdown_opened');
        $dropdownList.slideUp(150);
    });
});
(function($) {

    //$('.tabs').each( function() {

        $('.tabs__buttons').on('click', '.tabs__btn:not(.tabs__btn_active)', function () {
            $(this).addClass('tabs__btn_active').siblings().removeClass('tabs__btn_active');
            $(this).closest('.tabs').find('.tabs__item').removeClass('active').eq($(this).index()).addClass('active');
        });
  //  });
})(jQuery);