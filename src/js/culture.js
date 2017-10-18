
;(function() {
  // console.log('2')
  $('.img-list .img-item').hover(function(){
    $(this).find('.cover-conent').stop().animate({bottom:'0'},"slow")
  },function() {
    $(this).find('.cover-conent').stop().animate({bottom:'-312px'},"slow")
  })
})();
