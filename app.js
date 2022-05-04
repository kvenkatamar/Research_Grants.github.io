// CUSTOM CURSOR

const cursor = document.querySelector(".cursor");
const follow_cursor = document.querySelector(".follow_cursor");

document.addEventListener("mousemove", e => {
  cursor.setAttribute("style", "top: "+(e.pageY+5)+"px; left: "+(e.pageX+5)+"px");
  follow_cursor.setAttribute("style", "top: "+(e.pageY)+"px; left: "+(e.pageX)+"px");
})

document.addEventListener('click', () => {
  cursor.classList.add("expand");

  setTimeout(() => {
      cursor.classList.remove("expand");
  }, 500)
})


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

$('.main-slider').mouseover(function() {
  $(this).slick('play')
});

// SLICK SLIDERs

$(document).ready(function () {
    $(".slider").slick({
      arrows: true,
      dots: false,
      slidesToShow: 5,
      autoplay: true,
      speed: 500,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 2000,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 3,
          },
        },{
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            arrows: false,
          },
        },{
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            arrows: false,
          },
        },{
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            arrows: false,
          },
        },
      ],
    });
});

$('.slider').mouseover(function() {
  $(this).slick('play')
});

/*  Loader  */

$(window).on("load",function(){
  $(".load-container").fadeOut("slow");
});