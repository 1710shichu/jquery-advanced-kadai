$(function(){
  $('.button-more').on('mouseover', function(){
    $(this).animate({
      opacity: 0.5,
      marginLeft: 20,
    }, 100);  
    // $('.carousel').slick({
      // autoplay: true,
      // dots: true,
      // infinite: true,
      // autoplaySpeed: 5000,
      // arrows: false,
    // });
  });
  $('.button-more').on('mouseout', function(){
    $(this).animate({
      opacity: 1.0,
      marginLeft: 0
  }, 100);
  });

  // カーセル
  $('.carousel').slick({
    autoplay: true,
    dots: true,
    infinite: true,
    autoplaySpeed: 5000,
    arrows: false,
  });

  // 送信ボタンクリック時の処理
  $('#submit').on('click',function (event){
    
    // formタグによる送信を拒否
    event.preventDefault();

    // 入力チェックした結果、エラーがあるかないか判定
    let result = inputCheck();

    let error = result.error;
    let message = result.message;

    // エラーがなかったらフォームを送信する
    if(error == false) {
      // フォーム送信は実際には行わず、送信成功メッセージのみ表示する
      alert('お問い合わせを送信しました。');
    } else {
      // エラーメッセージを表示する
      alert(message);
    }

  });

  // フォーカスが外れた時（blur)にフォームの入力チェックする
  $('#name').blur(function(){
    inputCheck();
  });
  $('#furigana').blur(function(){
    inputCheck();
  });
  $('#email').blur(function(){
    inputCheck();
  });
  $('#tel').blur(function(){
    inputCheck();
  });
  $('#message').blur(function(){
    inputCheck();
  });
  $('#agree').click(function(){
    inputCheck();
  });

  // お問い合わせフォームの入力チェック
  function inputCheck(){
    // console.log('inputCheck関数の呼び出し')

    // エラーのチェック結果
    let result;

    // エラーメッセージのテキスト
    let message = '';

    // エラーがなければfalseエラーがあればtrue
    let error = false;

    // お名前のチェック
    if ($('#name').val() == ''){
      // エラーあり
      $('#name').css('background-color', '#f79999');
      error = true;
      message += 'お名前を入力してください。\n';
    } else {
      // エラーなし
      $('#name').css('background-color', '#fafafa');
    }

    // フリガナのチェック
    if ($('#furigana').val() == ''){
      // エラーあり
      $('#furigana').css('background-color', '#f79999');
      error = true;
      message += 'フリガナを入力してください。\n';
    } else {
      // エラーなし
      $('#furigana').css('background-color', '#fafafa');
    }
    // 問い合わせチェック
    if ($('#message').val() == ''){
      // エラーあり
      $('#message').css('background-color', '#f79999');
      error = true;
      message += 'お問い合わせ内容を入力してください。\n';
    } else {
      // エラーなし
      $('#message').css('background-color', '#fafafa');
    }
    //メールアドレスのチェック
    if ($('#email').val() == '' || $('#email').val().indexOf('@') == -1 || $('#email').val().indexOf('.') == -1){
      // エラーあり
      $('#email').css('background-color', '#f79999');
      error = true;
      message += 'メールアドレスが未記入、または「@」「.」が含まれていません\n';
    } else {
      // エラーなし
      $('#email').css('background-color', '#fafafa');
    }
    //電話番号のチェック（未入力はOK、未入力でない場合は-が必要）
    if ($('#tel').val() != '' && $('#tel').val().indexOf('-') == -1){
      // エラーあり
      $('#tel').css('background-color', '#f79999');
      error = true;
      message += '電話番号に「-」が含まれていません。\n';
    } else {
      // エラーなし
      $('#tel').css('background-color', '#fafafa');
    }

    // 個人情報のチェックボックスのチェック
    if($('#agree').prop('checked') == false){
      error = true;
      message += '個人情報の取り扱いについてご同意いただける場合は、チェックボックスにチェックしてください。\n';
    }
    // エラーの有無で送信ボタンを切り替え
    if(error == true){
      $('#submit').attr('src', 'images/button-submit.png' )
    }else{
      $('#submit').attr('src', 'images/button-submit-blue.png')
      }
    // オブジェクトでエラー判定とメッセージを返す
    result = {
      error: error,
      message: message
    }

    // 戻り値としてエラーがあるかどうかを返す
    return result;
      
    }
});