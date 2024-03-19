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
  
  $('.modalImg').on('click', function () {
    var imgSrc = $(this).children().attr('src');
    $('.bigImg').children().attr('src', imgSrc);
    $('.modal').fadeIn();
    $('body,html').css('overflow-y', 'hidden');
    return false
    });

  $('.close-button').click(function(){
    $('.modal').fadeOut();
    $('body,html').css('overflow-y', 'vidible')
    return false;
  });

  // ページ内スクロール
$('a[href^="#"]').click(function () {
  const speed = 600;
  let href = $(this).attr("href");
  let target = $(href == "#" || href == "" ? "html" : href);
  let position = target.offset().top;
  $("body,html").animate({ scrollTop: position }, speed, "swing");
  return false;
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

$("")







  
  