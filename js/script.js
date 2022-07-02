$(function () {
    $('.fade-slide').slick({
        accessibility: false,
        fade: true,
        autoplay: true,
        infinite: true,
        dots: false,
        arrows: false,
        autoplaySpeed: 1500,
        speed: 2000,
    });

    $('.about-img').slick({
        accessibility: false,
        fade: true,
        autoplay: true,
        infinite: true,
        dots: false,
        arrows: false,
        autoplaySpeed: 1500,
        speed: 2000,
    });

    $('.works').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        swipe: true,
        cssEase: 'linear',
      });
        //   ページ内スクロール
      $(function () {
        $('a[href^="#"]').click(function () {
          var href = $(this).attr("href");
          var target = $(href == "#" || href == "" ? 'html' : href);
          var position = target.offset().top;
          var speed = 500;
          $("html, body").animate({
            scrollTop: position
          }, speed, "swing");
          return false;
        });
      });
});

// ハンバーガーメニュー
$(function() {
  $('.hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.globalMenuSp').addClass('active');
      } else {
          $('.globalMenuSp').removeClass('active');
      }
  });
});



// スクロールフェードインアニメーション

$(function () {
  $(window).scroll(function () {
    const windowHeight = $(window).height();
    const scroll = $(window).scrollTop();

    $('.element').each(function () {
      const targetPosition = $(this).offset().top;
      if (scroll > targetPosition - windowHeight + 100) {
        $(this).addClass("is-fadein");
      }
    });
  });
});


