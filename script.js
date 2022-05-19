// Swiper JS script 

let swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    roundLengths: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: -65,
    coverflowEffect: {
        rotate: 0,
        stretch: 160,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
      type: 'bullets',
    }
  });