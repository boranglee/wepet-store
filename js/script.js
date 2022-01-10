;(function($){
    $(function(){

    $('.tab_menu_btn').on('click',function(){
      $('.tab_menu_btn').removeClass('on');
      $(this).addClass('on')
      var idx = $('.tab_menu_btn').index(this);
      $('.tab_box').hide();
      $('.tab_box').eq(idx).show();
  });

  $('.tab_sub_menu_btn').on('click',function(){
    $('.tab_sub_menu_btn').removeClass('on');
    $(this).addClass('on')
    var idx = $('.tab_sub_menu_btn').index(this);
    $('.tab_sub_box').hide();
    $('.tab_sub_box').eq(idx).show();
});

 jQuery.fn.tabs = function(tabContents, options) {
  options = $.extend({
      linkClass: "active",
      contentClass: "active",
      allowClose: false
  }, options);

  var $tabLinks = this,
      $tabContents = $(!!tabContents ? tabContents : ".tab-content");

  return $(this).click(function(event, hadClass) {
      event.preventDefault();

      hadClass = $(this).hasClass(options.linkClass);

      $tabLinks.removeClass(options.linkClass);
      $tabContents.removeClass(options.contentClass);

      if (hadClass && options.allowClose) return;

      $($(this).addClass(options.linkClass)[0].hash).addClass(options.contentClass);
  });
};

$('.tab-link').tabs('.tab-content', { contentClass: 'alive', allowClose: true }).each(function() {
  $(this.hash + ' .tab-inner_link').tabs(this.hash + ' .tab-inner_content')
});

$('.open-popup-link').magnificPopup({
type:'inline',
midClick: true
});


});
$(document).ready(function(){
  $(".info--accordian").click(function() {
    $(this).nextAll(".content:first").slideToggle("fast");
    $(this).find(".accordian-arrow").toggleClass("less");
    });
  });
})(jQuery);