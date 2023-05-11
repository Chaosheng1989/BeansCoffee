//點擊menu漢堡選單時展開
$(document).ready(function () {
  $('.menu-icon').click(function () {
    $('.menu').toggleClass('menu-show');
    document.querySelector('.banner').classList.toggle('banner-show');
  });
});

//點擊manu#產生滑動
$('a[href^="#"]').on('click', function (event) {
  var target = $(this.getAttribute('href'));
  if (target.length) {
    event.preventDefault();
    $('html, body').stop().animate({
      scrollTop: target.offset().top
    }, 10);
  }
});


//漢堡選單時點擊#，menu自動收合
// 取得所有的選單連結
const menuLinks = document.querySelectorAll('.menu a');

// 為每個選單連結加上點擊事件
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    // 移除 .menu-show 的 class
    document.querySelector('.menu').classList.remove('menu-show');
  });
});



//關鍵字搜索產品列表中的產品
//獲取搜索欄位和搜索按鈕及產品標題元素
const searchButton = document.querySelector('#search-button');
searchButton.addEventListener('click', function (event) {
  // 獲取搜尋關鍵字，轉換為小寫並去除空白字符
  const keyword = document.querySelector('#search-input').value.trim().toLowerCase();
  // 搜索所有產品標題，隱藏未匹配的產品，顯示匹配的產品
  const products = document.querySelectorAll('.product-item');
  for (let i = 0; i < products.length; i++) {
    const productName = products[i].querySelector('.product-name');
    const text = productName.textContent.trim().toLowerCase();
    if (text.includes(keyword)) {
      products[i].classList.remove('hidden');
    } else {
      products[i].classList.add('hidden');
    }
  }

  event.preventDefault(); // 阻止表單提交行為
  // 追加跳轉到商品列表的行
  location.href = "#product-head";
});

//獲取product-list-show按鈕
const showAllBtn = document.querySelector('#show-all-btn');
//新增點擊#show-all-btn事件，顯示所有產品
showAllBtn.addEventListener('click', function () {
  const products = document.querySelectorAll('.product-item.hidden');
  products.forEach(function (product) {
    product.classList.remove('hidden');
  });
});

//跳轉#product-head 增加paddingTop值
const headerHeight = document.querySelector('header').offsetHeight; // 獲取 header 的高度
const productHead = document.querySelector('#product-head'); // 獲取 #product-head 元素
productHead.style.paddingTop = (headerHeight + 20) + 'px'; // 給 #product-head 元素設定一個 padding-top 偏移量












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
