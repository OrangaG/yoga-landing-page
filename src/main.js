const menuBtn = document.querySelector(".nav__menu-btn");
const closeBtn = document.querySelector(".nav__close-btn");
const nav = document.querySelector(".nav__links");

menuBtn.addEventListener("click", () => {
  nav.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("active");
});
