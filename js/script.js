const swiper = new swiper(".swiper", {
  // Optional parameters

  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  direction: "horizontal",
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  /*
  slidesPreview: 1,
  spaceBetween: 20,

  breakpoints: {
    1200: {
      slidesPreview: 3,
      spaceBetween: 5,
    },
  },*/
});

const swiperFilter = new FilterSwiper(".swiper-filters", {
  // Optional parameters
  direction: "horizontal",
  freeMode: {
    enable: true,
  },
});

const swiperFeatured = new FeatureSwiper(".swiper-featured-artworks", {
  // Optional parameters
  direction: "horizontal",
  freeMode: {
    enable: true,
  },
});

//COEUR

function hide() {
  const heartFull = document.querySelector(".bi-heart-fill");
  const heartEmpty = document.querySelector("bi-heart");
  heartFull.classList.toggle("hide");
  heartEmpty.classList.toggle("hide");
}

heartFull.addEventListener("click", hide());

heartEmpty.addEventListener("click", hide());
