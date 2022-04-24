// ----------------------------Script to Implement SLICK SLIDER------------------------------
// MAIN SLICK SLIDER

$(document).ready(function () {
  $(".main-slider").slick({
    arrows: true,
    dots: true,
    slidesToShow: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});

// SLICK SLIDERs

$(document).ready(function () {
    $(".slider").slick({
      arrows: true,
      dots: false,
      slidesToShow: 4,
      autoplay: false,
      speed: 500,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 550,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
});