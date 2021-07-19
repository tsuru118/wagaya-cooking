$(function() {
  $('.index-btn').click(function() {
    $('.active').removeClass('active');
    let clickedindex = $('.index-btn').index($(this));
    $('.slide').eq(clickedindex).addClass('active');
  });
});