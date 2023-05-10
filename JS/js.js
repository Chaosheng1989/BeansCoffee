//點擊漢堡選單時展開
$(document).ready(function () {
  $('.menu-icon').click(function () {
    $('.menu').toggleClass('menu-show');
    document.querySelector('.banner').classList.toggle('banner-show');
  });
});

//點擊#產生滑動
$('a[href^="#"]').on('click', function (event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: target.offset().top
    }, 10);
  }
});

//spec-btn 按鈕點選顏色變更
//選擇每個產品規格按鈕容器元素
const productSpecsContainers = document.querySelectorAll('.product-specs');
// 為每個容器元素中的規格按鈕添加點擊事件監聽器
productSpecsContainers.forEach(container => {
  const specBtns = container.querySelectorAll('.spec-btn');

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
});

//+-按鈕，quantity-input 增加或減少
// 獲取所有的加減按鈕
const minusBtns = document.querySelectorAll('.quantity-btn.minus-btn');
const plusBtns = document.querySelectorAll('.quantity-btn.plus-btn');

// 為所有的加減按鈕添加監聽器
minusBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const input = btn.parentNode.querySelector('.quantity-input');
    if (input.value > 1) {
      input.value = parseInt(input.value) - 1;
    }
  });
});

plusBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const input = btn.parentNode.querySelector('.quantity-input');
    input.value = parseInt(input.value) + 1;
  });
});


//總價格=規格單價*數量
