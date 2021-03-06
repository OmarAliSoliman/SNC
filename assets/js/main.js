$(document).ready(function () {
  var currentDir = $("a").css("direction");
  console.log(currentDir);

  if ($(".news-slider").length) {
    $(".news-slider").slick({
      dots: true,
      infinite: false,
      speed: 400,
      autoplaySpeed: 1000,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      // rtl: currentDir == "rtl" ? true : false,
      loop: true,
      arrows: false,
      infinite: true,
      cssEase: 'linear', 
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          },
        },
      ],
    });
  }

  if ($(".companies-slider").length) {
    $(".companies-slider").slick({
      dots: true,
      infinite: false,
      speed: 400,
      autoplaySpeed: 1000,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      // rtl: currentDir == "rtl" ? true : false,
      loop: true,
      arrows: false,
      infinite: true,
      cssEase: 'linear',
      responsive: [
        {
          breakpoint: 1026,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          },
        },
      ],
    });
  }

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
});
