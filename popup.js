
var tags = localStorage.getItem('dados');
var $ul = $('<ul />');
var clientes = [];


      // console.log(tabUrl)

$ul.html(tags);
if (tags) {

  $.each($ul.children(), function(i, li) {
    //clientes[i] = $(li).html();
    var html = $(li).html();
    $('#clientes ul').append('<li><a href="mailto: ?subject=['+html+']" target="_blank"><i class="fa fa-thumb-tack"></i> ['+html+']</a></li>');
  });
} else {
  $('#clientes ul').append(' <li>Sem tags</li>');

}
// mailto:info@example.com?subject='Mi casa'&body=Telefono

/**
 *Tabs from Skeleton
 */
(function ($) {
  // hash change handler
  function hashchange () {
    var hash = window.location.hash,
        el = $('ul.tabs [href*="' + hash + '"]'),
        content = $(hash);

    if (el.length && !el.hasClass('active') && content.length) {
        el.closest('.tabs').find('.active').removeClass('active');
        el.addClass('active');
        content.show().addClass('active').siblings().hide().removeClass('active');
    }
  }

  // listen on event and fire right away
  $(window).on('hashchange.skeleton', hashchange);
  hashchange();
  $(hashchange);
})(jQuery);
