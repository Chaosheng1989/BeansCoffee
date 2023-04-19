$(document).ready(function() {
  $('.menu-icon').click(function() {
    $('.menu').toggleClass('menu-show');
    document.querySelector('.banner').classList.toggle('banner-show');
  });
});
