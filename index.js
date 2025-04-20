//ทำสไลด์ของเมนูอาหาร และ บทความ
['.mySwiper', '.myMenuSwiper'].forEach(selector => {
    new Swiper(selector, {
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
        }
      }
    });
  });
  