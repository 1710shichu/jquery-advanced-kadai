// カルーセル
$(function(){
  $('.carousel').slick({
      autoplay: true,
      infinite: true,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      speed: 1000,
      autoplaySpeed: 3000,
      pauseOnFocus: false,
      pauseOnHover: false
    });
    
  });

// 参考：https://codepen.io/kzmytute/pen/LYpaOdL

$(".course-item-img").click(function(){
  $("#grayDisplay").html($(this).prop("outerHTML"));
  $("#grayDisplay").fadeIn(200);
  return false;
});

$("#grayDisplay").click(function(){
  $("#grayDisplay").fadeOut(200);
  return false;
});



// ボタンをクリックしたらJavaScriptでクラスを付加する
const modal = document.querySelector('.js-modal');
const modalButton = document.querySelector('.modal-open');
  // js-modal-button = modal-open

const modalClose = document.querySelector('.close-button');
// xボタンのjs-close-buttonを取得し変数に格納

modalButton.addEventListener('click',() =>{
  modal.classList.add('is-open');
});
  
modalClose.addEventListener('click',() =>{
   // xボタンをクリックしたときのイベントを登録
  modal .classList.remove('is-open');
});


  
  