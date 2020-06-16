$(document).ready(function () {
    $('.reviews-slider').slick({
        dots: true,
        arrows: false,
        infinite: true
    });
    $("#carouselExampleIndicators").carousel({
        interval: false
    });
    $('.menu').click(function () {
        $('nav.nav').toggleClass('nav-active')
    })
})