//點擊漢堡選單時展開
$(document).ready(function() {
  $('.menu-icon').click(function() {
    $('.menu').toggleClass('menu-show');
    document.querySelector('.banner').classList.toggle('banner-show');
  });
});

//點擊#產生滑動
$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
          scrollTop: target.offset().top
      }, 1000);
  }
});

$(document).ready(function () {
  
});