(function() {
    // var navHeight = $('.components-head').offset().top;
    function toggleEvent() {
        $(window).scroll(function() {
            var scrollTop = $(window).scrollTop();
            if(scrollTop>70) {
                $('.components-head').addClass('solid');
            } else {
                $('.components-head').removeClass('solid');
            }
        });
    }
    toggleEvent();
})();
