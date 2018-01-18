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