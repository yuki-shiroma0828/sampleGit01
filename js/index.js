$(function () {
    $(".js-slider").slick({
        autoplay: true, // 自動再生
        autoplaySpeed: 4000, // 再生速度（ミリ秒設定） 1000ミリ秒=1秒
        infinite: true, // 無限スライド
        dots:true,
        arrows:false,
        dotsClass: "slide-dots" //ここでclass名を変更する（デフォルトはslick-dots）
    })

    $('#change_btn').click(function(){ /*changeColor_btnという名前の要素をクリックした時に*/
      $('#box').css({'color': '#0094d7'}) /*box要素の文字の色を変更します。*/
    });

    $('.accordion > li > div').click(function(){	/* .accordion > li > divをクリックした時に */
      $(this).next('ul').slideToggle('fast');	/* クリックされた要素の次にあるdivを表示させる。*/
    });

    $('.tooltips').hide();
    $('.nav li').hover(
      function(){
        $(this).children('.tooltips').fadeIn('fast');
      },
      function(){
        $(this).children('.tooltips').fadeOut('slow');
    });

    $(".js-open-button").on("click", function (e) {
      e.preventDefault();
      var target = $(this).data("target");//ボタンのdata属性取得
      var modal = $('.js-modal').data("target");//表示するコンテンツのdata属性取得
      // if(target = modal){//もしdata属性が一致したら表示
      //   $('.js-modal').fadeIn();
      // }
      $(".js-modal[data-target=" + target + "]").fadeIn();
      bodyFixedOn();
    });
  
    $(".js-close-button").on("click", function (e) {
      $(target).fadeOut();
      bodyFixedOff();
    });

    let tab_btn = $(".tab_trg"); //タブのボタンに付いてるクラスをtab_btnに格納

    tab_btn.click(function () {
      //クリックした時にイベント発生
      target = $(this).data("tab"); //data属性を取得
      $(".tab_content").removeClass("is-active"); //tab_contentについてるis-activeクラスを全部外す
      $(".tab_content[data-tab=" + target + "]").addClass("is-active"); //data属性が一致したtab_contentにis-active付与
    });

//スマホでモーダルをスクロールした時に後ろが動くのを防ぐ
//モーダルを開いた時のスクロール位置を保持
var scrollPosition;
//iOS（iPadOSを含む）かどうかのUA判定
var ua = window.navigator.userAgent.toLowerCase();
var isiOS =
  ua.indexOf("iphone") > -1 ||
  ua.indexOf("ipad") > -1 ||
  (ua.indexOf("macintosh") > -1 && "ontouchend" in document);

//bodyのスクロール固定
function bodyFixedOn() {
  if (isiOS) {
    // iOSの場合
    scrollPosition = $(window).scrollTop();
    $("body").css("position", "fixed");
    $("body").css("top", "-" + scrollPosition + "px");
  } else {
    // それ以外
    $("body").css("overflow", "hidden");
  }
}

//bodyのスクロール固定を解除
function bodyFixedOff() {
  if (isiOS) {
    // iOSの場合
    $("body").css("position", "");
    $("body").css("top", "");
    $(window).scrollTop(scrollPosition);
  } else {
    // それ以外
    $("body").css("overflow", "");
  }
}
});
$(function(){
  
});



