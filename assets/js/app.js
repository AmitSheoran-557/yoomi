// =============================== navbar =========================================
const menuicon = document.querySelector(".menubar");
const menuList = document.querySelector(".menulist");
const menubarFirst = document.querySelector(".menubarFirst");
const menubarSecond = document.querySelector(".menubarSecond");
const menubarThird = document.querySelector(".menubarThird");
const body = document.body;

menuicon.addEventListener("click", function () {
    menuList.classList.toggle("-right-full");
    menuList.classList.toggle("right-0");
    menubarFirst.classList.toggle("rotate-[40deg]");
    menubarSecond.classList.toggle("hidden");
    menubarThird.classList.toggle("-rotate-[40deg]");
    body.classList.toggle("overflow-lg-hidden")
})

// ====================  ===========================

$('.sec-3-slider').slick({
    infinite: true,
    variableWidth: true,
    slidesToShow: 1.2,
    slidesToScroll: 1,
    prevArrow: '.prevarrow',
    nextArrow: '.nextarrow',
    responsive: [
        {
            breakpoint: 1921,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1442,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 580,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


// ==================== figure in sports slider ======================
$(document).ready(function () {
    $(".big-img-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: ".second-row-slider",
        infinite: true,
        
    });

    $(".second-row-slider").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: ".big-img-slider",
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
        infinite: true,
        variableWidth: true,

        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                centerMode: true,
                dots: false
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                centerMode: true,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                centerMode: true,
                slidesToScroll: 1
              },
            },
          ]
    });
});