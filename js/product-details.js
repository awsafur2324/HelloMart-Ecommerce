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

//slider on the top section
!(function (e, n, t) {
  "use strict";
  var o =
      "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900&amp;display=swap",
    r = "__3perf_googleFonts_c2536";
  function c(e) {
    (n.head || n.body).appendChild(e);
  }
  function a() {
    var e = n.createElement("link");
    (e.href = o), (e.rel = "stylesheet"), c(e);
  }
  function f(e) {
    if (!n.getElementById(r)) {
      var t = n.createElement("style");
      (t.id = r), c(t);
    }
    n.getElementById(r).innerHTML = e;
  }
  e.FontFace && e.FontFace.prototype.hasOwnProperty("display")
    ? (t[r] && f(t[r]),
      fetch(o)
        .then(function (e) {
          return e.text();
        })
        .then(function (e) {
          return e.replace(
            /@font-face {/g,
            "@font-face{font-display:swap;"
          );
        })
        .then(function (e) {
          return (t[r] = e);
        })
        .then(f)
        .catch(a))
    : a();
})(window, document, localStorage);