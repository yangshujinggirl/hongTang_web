;(function(){
  function join() {
    var item = $('.join-list .join-item');
    item.on('click',function(){

      var _current = $(this).find('.hidden'),
          jsJob = $(this).find('.JS-job'),
          _joinpro = $('.hidden');

      if(_current.is(":hidden")) {
          _joinpro.slideUp('slow');
          _current.slideDown("slow");
      }else {
          _current.slideUp('slow');
      };
      jsJob.on('click',function() {
        event.stopPropagation();
        window.open($(this).attr('data-url'));
      })
      // $(this).siblings('.joinpro').slideToggle('slow');
    })
  }
  join();
})();
