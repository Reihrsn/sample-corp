/////////////////////////// トップに戻るボタン ///////////////////////////////
$(document).ready(function () {
    jQuery(window).on("scroll", function ($) {
        if (jQuery(this).scrollTop() > 100) {
            jQuery('.totop').fadeIn();
        } else {
            jQuery('.totop').fadeOut();
        }
    });

    jQuery('.totop').click(function () {
        jQuery('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });
});


/////////////////////////// スムーススクロール（cardからcontactまでのlist） ///////////////////////////////
$(document).ready(function(){
    // #から始まるURLがクリックされた時
jQuery('a[href^="#"]').click(function() {
    // .headerクラスがついた要素の高さを取得
    let header = jQuery(".header").innerHeight();
    let speed = 300;
    let id = jQuery(this).attr("href");
    let target = jQuery("#" == id ? "html" : id);
    // トップからの距離からヘッダー分の高さを引く
    let position = jQuery(target).offset().top - header;
    // その分だけ移動すればヘッダーと被りません
    jQuery("html, body").animate(
      {
        scrollTop: position
      },
      speed
    );
    return false;
  });
});

/////////////////////////// クリックした要素に下線を引く ///////////////////////////////
$(document).ready(function() {
    jQuery('.header-nav ul li a').click(function() {
        jQuery('.header-nav ul li a').removeClass( 'is-active' );
        jQuery(this).addClass( 'is-active' );
        return false;
      });
});


/////////////////////////// アコーディオン ///////////////////////////////
$(document).ready(function() {
    jQuery('.accordion-head').click(function() {
        jQuery(this).next().slideToggle();
        jQuery(this).children('.accordion-icon').toggleClass( 'is-open' );
      });
});