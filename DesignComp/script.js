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
    // https://terakoya.sejuku.net/programs/161/chapters/2187
  $(function (){
    $('.home').on('mouseover',function(){
      $(this).animate({
        opacity: 0.5,
      }, 100);
    });
    $('.home').on('mouseout',function(){
      $(this).animate({
        opacity: 1.0,
      }, 100);
    });
  });  
  $(function (){
    $('.hover-about').on('mouseover',function(){
      $(this).animate({
        opacity: 0.5,
      }, 100);
    });
    $('.hover-about').on('mouseout',function(){
      $(this).animate({
        opacity: 1.0,
      }, 100);
    });
  });  
  $(function (){
    $('.hover-works').on('mouseover',function(){
      $(this).animate({
        opacity: 0.5,
      }, 100);
    });
    $('.hover-works').on('mouseout',function(){
      $(this).animate({
        opacity: 1.0,
      }, 100);
    });
  });
  
});

$(window).scroll(function(){
  if($(this).scrollTop() < 100){
    // $('.top').css('display','none')
    $('.top').fadeOut()

  } else{
      // $('.top').css('display','inline');
      $('.top').fadeIn();
    }
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


  
  