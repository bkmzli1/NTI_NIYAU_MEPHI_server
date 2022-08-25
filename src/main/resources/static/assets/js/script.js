// МЕНЮ ДЛЯ ТЕЛЕФОНА
$(document).ready(function () {
  // ОСНОВНОЙ СЛАЙДЕР
  $('.slider').slick({
    arrows: true,
    dots: true,
    responsive:[
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]

  });
  // СЛАЙДЕР НОВОСТЕЙ
  $('.slider-news').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive:[
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 670,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 450,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  // СЛАЙДЕР ГАЛЕРЕЙ
  $('.slider-gallery').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive:[
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 670,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 450,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  // СЛАЙДЕР ПАРТНЁРЫ
  $('.slider-partners').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive:[
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 670,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 450,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  // МОБИЛЬНОЕ МЕНЮ
  $('.nav-burger').click(function(event) {
    $('.nav-burger, .main-nav').toggleClass('active');
    $("body").toggleClass("lock");
  })


  // САБМЕНЮ
  $(".under-nav-item").hover(function () {
      //stuff to do on mouse enter
      $(this).children(".under-nav-link").addClass("open");
      $(this).children(".under-nav-link").children('.arrow').addClass("open");
      $(this).children(".sub-menu").css('display', 'block');

    },
    function () {
      $(this).children(".under-nav-link").removeClass("open");
      $(this).children(".under-nav-link").children('.arrow').removeClass("open");
      $(this).children(".sub-menu").css('display', 'none');
    });

  // ИНФОКАРТОЧКИ
  const $firstLayer = $(".first-layer");
  const $secondLayer = $(".second-layer");
  $firstLayer.click(function(event) {
    $firstLayer.css("display", "none");
    $secondLayer.css("display", "block");
  })
  $secondLayer.click(function(event) {
    $secondLayer.css("display", "none");
    $firstLayer.css("display", "block");
  })

  const $header = $(".up-nav");
  var $headerNav = $('.header-nav');
  var $underNav = $('.under-nav');
  let prevScroll
  let lastShowPos

  $(window).on("scroll", function() {
    const scrolled = $(window).scrollTop()

    if (scrolled > 50 && scrolled > prevScroll) {
      $header.addClass("header-out")
      lastShowPos = scrolled
      $headerNav.addClass("nav-out")
      $underNav.addClass("undernav-out")
    } else if (scrolled <= 0) {
      $header.removeClass("header-out")
      $headerNav.removeClass("nav-out")
      $underNav.removeClass("undernav-out")
    }
    prevScroll = scrolled
  })

  //ГАЛАРЕИИ ФОТО-ВИДЕО ПЕРЕКЛЮЧЕНИЕ
  const $viedoGallery = $("#video");
  const $photoGallery = $("#photo");
  const $photoLink = $("#photo-link");
  const $videoLink = $("#video-link");

  $photoLink.click(function(event) {
    $photoLink.addClass('active-link');
    $videoLink.removeClass('active-link');
    $viedoGallery.css("display", "none");
    $photoGallery.css("display", "block");
  })
  $videoLink.click(function(event) {
    $videoLink.addClass('active-link');
    $photoLink.removeClass('active-link');
    $photoGallery.css("display", "none");
    $viedoGallery.css("display", "block");
  })

  // ПОЛЕЗНЫЕ ССЫЛКИ
  $(".useful-header").click(function (event) {
    $(this).toggleClass("active-useful").next().slideToggle(400);
  });
});
