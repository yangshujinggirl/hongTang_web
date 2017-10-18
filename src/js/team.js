$(function() {
    var labels = $('.label .item');
    var detail = $('.leader-list .detail-item');
    labels.hover(function() {
        var index = $(this).index();
        detail.eq(index).show().siblings().hide();
    });
});
