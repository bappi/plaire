(function () {
  // Whole-script strict mode syntax
  "use strict";
  var WindowHeight = $(window).height(),
    WindowWidth = $(window).width(),
    __this = $(this);

  // Banner Carousel
  let BannerCarousel = $(".plaire-banner-area.type-1");
  if (BannerCarousel.length > 0) {
    BannerCarousel.slick({
      dots: true,
      infinite: true,
      speed: 500,
      prevArrow:
        '<button class="slick-prev banner1-button"><i class="fas fa-arrow-up"></i></button>',
      nextArrow:
        '<button class="slick-next banner1-button"><i class="fas fa-arrow-down"></i></button>',
      slidesToShow: 1,
      dotsClass: "plaire-banner-dots type-1",
      fade: true,
      cssEase: "linear",
    });
  }

  $(".plaire-search-btn").on("click", function (e) {
    e.preventDefault();
    $(".plaire-banner-search-container").addClass("active");
  });

  $(".plaire-banner-arrows .slick-prev").on("click", function () {
    $(".plaire-banner-area.type-1").slick("slickPrev");
  });
  $(".plaire-banner-arrows .slick-next").on("click", function () {
    $(".plaire-banner-area.type-1").slick("slickNext");
  });
  let BannerCarousel2 = $(".plaire-banner.type-2");
  BannerCarousel2.on("init", function () {
    $(".slick-active").prev().removeClass("nextdiv").addClass("prevdiv");
    $(".slick-active").next().removeClass("prevdiv").addClass("nextdiv");
  });

  if (BannerCarousel2.length > 0) {
    BannerCarousel2.slick({
      dots: true,
      infinite: true,
      speed: 500,
      appendArrows: $(".plaire-banner-arrows.type-1"),
      prevArrow:
        '<button class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
      nextArrow:
        '<button class="slick-next"><i class="fas fa-chevron-right"></i></button>',
      slidesToShow: 3,
      centerPadding: "0px",
      dots: false,
      centerMode: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    })
      .on("afterChange", function () {
        $(".plaire-banner.type-2 .slick-active")
          .prev()
          .removeClass("nextdiv")
          .addClass("prevdiv");
        $(".plaire-banner.type-2 .slick-active")
          .next()
          .removeClass("prevdiv")
          .addClass("nextdiv");
      })
      .on("beforeChange", function () {
        $(".slick-slide").removeClass("prevdiv nextdiv");
      });
  }
  // Banner Carousel
  let BannerCarousel3 = $(".plaire-banner-area.type-3");
  if (BannerCarousel3.length > 0) {
    BannerCarousel3.slick({
      dots: true,
      infinite: true,
      speed: 500,
      prevArrow:
        '<button class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
      nextArrow:
        '<button class="slick-next"><i class="fas fa-chevron-right"></i></button>',
      slidesToShow: 1,
      dotsClass: "plaire-banner-dots type-1",

      fade: true,
      cssEase: "linear",
    });
  }
  // Featured Post Carousel
  let FeatuedPostCarousel = $(".plaire-featured-post-carousel");
  if (FeatuedPostCarousel.length > 0) {
    FeatuedPostCarousel.slick({
      dots: false,
      infinite: true,
      speed: 500,
      prevArrow:
        '<button class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
      nextArrow:
        '<button class="slick-next"><i class="fas fa-chevron-right"></i></button>',
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }

  //Header Room Scroll

  // if ($(this).scrollTop() > 30) {
  //   $('.headroom').addClass('headroom--unpinned');
  //   $('.headroom').removeClass('headroom--top');
  //   $('.headroom').removeClass('headroom--not-top');
  // } else {
  //   $('.headroom').removeClass('headroom--unpinned');
  //   $('.headroom').addClass('headroom--top');
  //   $('.headroom').addClass('headroom--not-top');
  // }

  $(window).on("scroll", function (e) {});

  // Window Load Function
  $(window).on("scroll", function () {
    var documentHeight = $(document).height();
    var scrollableHeight = documentHeight / 1.7;
    var Content = $(".plaire-to-top");
    if (Content.length > 0) {
      $(".plaire-to-top").hide();
      if ($(this).scrollTop() > scrollableHeight) {
        $(".plaire-to-top").show();
      } else {
        $(".plaire-to-top").hide();
      }
    }
    if ($(".plaire-sticky-element").length > 0) {
      if (
        $(this).scrollTop() > WindowHeight &&
        $(this).scrollTop() < documentHeight - WindowHeight
      ) {
        $(".plaire-sticky-element").fadeIn();
      } else {
        $(".plaire-sticky-element").fadeOut();
      }
    }
  });

  //Set background image for WordPress
  jQuery(".set-bg").each(function () {
    var thesrc = jQuery(this).attr("data-bg");
    if (thesrc) {
      jQuery(this).css("background-image", "url(" + thesrc + ")");
      jQuery(this).css("background-position", "center");
      jQuery(this).css("background-size", "cover");
      jQuery(this).css("background-repeat", "no-repeat");
      jQuery(this).removeAttr("data-bg");
    }
  });

  $(".plaire-to-top").on("click", function (e) {
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
  });

  // Offcanvas Nav
  var offcanvasNav, subMenu, hasDropdown;
  offcanvasNav = $(".plaire-offcanvas-nav");

  offcanvasNav.find("li").children("ul").addClass("sub-menu");
  $(".plaire-offcanvas-nav li").each(function () {
    if ($(this).children("ul").length > 0) {
      $(this).addClass("has-dropdown");
    }
  });
  $(".plaire-offcanvas-nav .has-dropdown").on("click", function (e) {
    e = window.event || e;
    e.stopPropagation();
    // $(this).children('.sub-menu').addClass('test');
    $(this).children(".sub-menu").stop().slideToggle();
    $(this).siblings("li").find(".sub-menu").slideUp();
  });
  $(".offcanvas_cancel").on("click", function (e) {
    e.preventDefault();
    $(".plaire-offcanvas-nav .has-dropdown").find(".sub-menu").slideUp();
  });
})();
