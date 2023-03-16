const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


const swiperFilter = new Swiper(".swiper-filters", {
  // Optional parameters
  direction: "horizontal",
  freeMode: {
    enable: true,
  },
});

const swiperFeatured = new Swiper(".swiper-featured-artworks", {
  // Optional parameters
  direction: "horizontal",
  freeMode: {
    enable: true,
  },
});