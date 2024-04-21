$(function () {
  
  //ページ内スクロール
  var $nav = $(".header");
  var navHeight = $nav.outerHeight();

  //スクロールを途中から出す
    $(window).scroll(function () {           /* スクロールされた時 */         /* mvを過ぎたmainタグの高さを取得して変数[pos]に格納 */
    if ($(this).scrollTop() > 50) {   /* 変数[pos]より、スクロールされていたら */
      $('header').fadeIn();               /* ヘッダーをふわっと表示 */
    } else {                              /* それ以外の場合 */
     $('header').fadeOut();              /* ヘッダーをふわっと非表示 */
  }
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      300
    );
    return false;
  });
});

$(function() {
  $('.button').click(function(){
  $(this).toggleClass('active');
  $('.nav').toggleClass('view_menu');
  });
});

$(function() {  
  $('.button').click(function () {　  
    if ($(this).hasClass("active")) {  
      $("html").addClass("no-scroll");  
    } else {                              
      $("html").removeClass("no-scroll");
    }
  });
});

$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

// 変数に要素を入れる
var trigger = $('.modal__trigger'),
    wrapper = $('.modal__wrapper'),
    layer = $('.modal__layer'),
    container = $('.modal__container'),
    close = $('.modal__close'),
    content = $('.modal__content');

// 『モーダルを開くボタン』をクリックしたら、『モーダル本体』を表示
$(trigger).click(function() {
  $(wrapper).fadeIn(400);

  // クリックした画像のHTML要素を取得して、置き換える
  $(content).html($(this).prop('outerHTML'));

  // スクロール位置を戻す
  $(container).scrollTop(0);

  // サイトのスクロールを禁止にする
  $('html, body').css('overflow', 'hidden');
});

// 『背景』と『モーダルを閉じるボタン』をクリックしたら、『モーダル本体』を非表示
$(layer).add(close).click(function() {
  $(wrapper).fadeOut(400);

  // サイトのスクロール禁止を解除する
  $('html, body').removeAttr('style');
});

const firstViewHeight = () => {
  const vh = window.innerHeight * 0.01;   //①
  document.getElementById('firstView').style.setProperty('--vh', `${vh}px`);  //②
}
window.addEventListener('resize', firstViewHeight);  //③