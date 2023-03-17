const swiper = new Swiper(".swiper-screenshot", {
  // Optional parameters

  direction: "horizontal",
  loop: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  slidesPerView: 1,
  spaceBetween: 10,

  breakpoints: {
    1200: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

const swiperFilter = new Swiper(".swiper-filters", {
  // Optional parameters
  direction: "horizontal",
  freeMode: {
    enable: true,
  },
  spaceBetween: 10,
});

const swiperFeatured = new Swiper(".swiper-featured-artworks", {
  // Optional parameters
  direction: "horizontal",
  freeMode: {
    enable: true,
  },
  slidesPerView: 2.1,
  spaceBetween: 10,
});

//COEUR

function hide() {
  const heartFull = document.querySelector(".bi-heart-fill");
  const heartEmpty = document.querySelector(".bi-heart");
  heartFull.classList.toggle("hide");
  heartEmpty.classList.toggle("hide");
}

heartFull.addEventListener("click", hide());

heartEmpty.addEventListener("click", hide());
