$(document).ready(function () {
    $('.slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        adaptiveHeight: true,
        fade: true,
        cssEase: 'linear'

    });
});