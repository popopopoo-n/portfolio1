$(function () {
    $('.fade-slide').slick({
        accessibility: false,
        fade: true,
        autoplay: true,
        infinite: true,
        dots: false,
        arrows: false,
        autoplaySpeed: 1000,
        speed: 2000,
        pauseOnHover: false,
        pauseOnFocus: false
    });

    $('.about-img').slick({
        accessibility: false,
        fade: true,
        autoplay: true,
        infinite: true,
        dots: false,
        arrows: false,
        autoplaySpeed: 1000,
        speed: 2000,
        pauseOnHover: false,
        pauseOnFocus: false
    });

    $('.works').slick({
        dots: true,
        infinite: true,
        autoplay: true,
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


$(function () {
  // スクロールしたら「トップに戻る」ボタンが表示される
  const toTopButton = $(".js-to-top");
  const scrollHeight = 600;
  toTopButton.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
      toTopButton.fadeIn();
    } else {
      toTopButton.fadeOut();
    }
  });

  // 「トップに戻る」ボタンをクリックしたらスクロールで戻る
  toTopButton.click(function () {
    $("body,html").animate({ scrollTop: 0 }, 800);
    return false;
  });
});