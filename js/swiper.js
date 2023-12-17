const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: false,
  autoHeight: false,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
   
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  effect: "cards",
  cardsEffect: {
    perSlideOffset: 2, // Space between cards in px
    perSlideRotate: 4, // Rotation of cards in degrees
    rotate:true
  },
  resizeObserver: false,
});
