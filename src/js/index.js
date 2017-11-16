// (function() {
//     // var swiper = new Swiper('.swiper-container', {
//     //     pagination: '.swiper-pagination',
//     //     paginationClickable: true,
//     //     autoplay : 5000
//     // });
//
// })();

$(function() {
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay : 5000
    });
    $('.slogin').stop().animate({top:'30%'},2000);
    $('.content-wrap').stop().animate({bottom:'10px'},2000);
});
