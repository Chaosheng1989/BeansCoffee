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

//spec-btn 按鈕點選顏色變更
// 所有的.spec-btn按鈕元素
const specBtns = document.querySelectorAll('.spec-btn');

// 為每個按鈕添加點擊事件監聽器
specBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // 如果按鈕已經是活躍狀態，則刪除active類
    if (btn.classList.contains('active')) {
      btn.classList.remove('active');
    } 
    // 如果按鈕不是活躍狀態，則從所有按鈕中刪除active類，並將其添加到當前點擊的按鈕中
    else {
      specBtns.forEach(otherBtn => {
        otherBtn.classList.remove('active');
      });
      btn.classList.add('active');
    }
  });
});
