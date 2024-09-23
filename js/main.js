$(document).ready(function(){

    var swiper = new Swiper(".mySwiper", {
        navigation: {
            nextEl: ".btn > .btn2",
            prevEl: ".btn > .btn1",
          },
        spaceBetween: 10,
        loop: true,
        slidesPerView : 1.5,
        breakpoints: {
            1200: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
        }
    });

    var swiper = new Swiper(".mainSwiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        1200: {
            loop: false,  // 데스크탑에서 루프 비활성화
            allowTouchMove: false,  // 데스크탑에서 슬라이딩 비활성화
        },
    }
    });

    var swiper = new Swiper(".mymainSwiper", {
      navigation: {
        nextEl: ".eventbtn > .eventbtn2",
        prevEl: ".eventbtn > .eventbtn1",
      },
      slidesPerView: 1.5,
      spaceBetween: 10,
      breakpoints: {
        1200: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });


    // $(".wrap .btn .menu").on("click", function() {
    //   $(this).toggleClass("on");
    //   $("nav").css("left", "0");
    // });
    // $("nav .btn .menu.on").on("click", function() {
    //   $("nav").css("left", "-100%");
    // });

    $(".wrap .btn .menu").on("click", function() {
      $(this).toggleClass("on");
      if ($(this).hasClass("on")) {
          $("nav").css("left", "0");
      } else {
          $("nav").css("left", "-100%");
      }
  });

    $(".gnb .menu").on("click", function() {
      $(this).find(".submenu").stop().slideToggle();
      $(this).siblings().find(".submenu").stop().slideUp();
    }); 

    // $(".inner .tit").on("click", function() {
    //   $(this).next(".con").stop().slideToggle();
    //   $(this).siblings().find(".con").stop().slideUp();
    // }); 
    function toggleContent() {
      if (window.innerWidth < 1200) {
          $(".inner .tit").on("click", function() {
              $(this).next(".con").stop().slideToggle();
              $(this).siblings().find(".con").stop().slideUp();
          });
      } else {
          // 1200px 이상일 때는 클릭 이벤트 제거 (선택적으로)
          $(".inner .tit").off("click");
      }
  }
  
  // 페이지 로드 시 한번 실행
  toggleContent();
  
  // 윈도우 리사이즈 시 다시 체크
  $(window).resize(function() {
      toggleContent();
  });

});