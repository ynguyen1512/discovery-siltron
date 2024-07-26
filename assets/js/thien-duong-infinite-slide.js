document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
      390: {
        slidesPerView: 5, // Show 5 slides on screens wider than 768px
        spaceBetween: 30,
      },
      0: {
        slidesPerView: 6, // Show 3 slides on screens wider than 390px
        spaceBetween: 0,
        loop: false,
        autoplay: false,
      },
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
});
