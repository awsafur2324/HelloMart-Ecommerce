/*
javascript for swiper
var swiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

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
  slidesPerView: 1,
  spaceBetween: "20px",
  autoplay: {
    delay: 3000,
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});

*/

// Javascript for product quantity.
let quantityElement = document.getElementById("quantity");
let quantity = parseInt(quantityElement.innerText);

// for increment quantity.
document.getElementById("increase-btn").addEventListener("click", function () {
  quantity += 1;
  quantityElement.textContent = quantity;
});

// for decrement quantity.
document.getElementById("decrease-btn").addEventListener("click", function () {
  if (quantity > 0) {
    quantity -= 1;
  }
  quantityElement.textContent = quantity;
});
