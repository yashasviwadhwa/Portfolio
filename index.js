new Typewriter(".typewriter", {
  strings: ["Developer", "Designer", "Creator"],
  autoStart: true,
  loop: true,
  delay: 75,
  deleteSpeed: 77,
  pauseFor: 1500,
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 35,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 3,
    },
  },
});

window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.classList.add("hide-preloader");
  }, 1000);
});

const CursorDot = document.querySelector("[data-cursor-dot]");
const CursorOutline = document.querySelector("[data-cursor-outline]");
window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;
  CursorDot.style.left = `${posX}px`;
  CursorDot.style.top = `${posY}px`;
  CursorOutline.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 500, fill: "forwards" }
  );
});

function changBg() {
  let ScrollValue = window.scrollY;
  let header = document.getElementById("header");
  if (ScrollValue > 874) {
    header.classList.add("New-Navbar");
  } else {
    header.classList.remove("New-Navbar");
  }
}

window.addEventListener("scroll", changBg);

document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-button");
  const items = document.querySelectorAll(".product-item");

  const filterProducts = (filter) => {
    items.forEach((item) => {
      const shouldShow = filter === "all" || item.dataset.item === filter;
      item.classList.toggle("hide", !shouldShow);
      item.classList.toggle("active", shouldShow);
    });
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => {
        btn.classList.remove("active");
        btn.setAttribute("aria-pressed", "false");
      });
      button.classList.add("active");
      button.setAttribute("aria-pressed", "true");

      filterProducts(button.dataset.filter);
    });
  });
});
