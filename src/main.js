const links = document.querySelectorAll(".nav__link");
const menuBtn = document.querySelector(".nav__menu-btn");
const closeBtn = document.querySelector(".nav__close-btn");
const themeBtn = document.querySelector(".nav__moon-btn");
const iconTheme = "ri-sun-line";
const nav = document.querySelector(".nav__links");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");
// Get all the sections that have ids
const sections = document.querySelectorAll("section[id]");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    themeBtn.classList.remove("ri-moon-line");
    themeBtn.classList.add(iconTheme);
  } else {
    themeBtn.classList.add("ri-moon-line");
    themeBtn.classList.remove(iconTheme);
  }
});

function closeNav(tag) {
  tag.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

function navHighlighter() {
  // Loop all the sections to get the height, top and the id of each
  sections.forEach((section) => {
    // Get the current scroll position of the page
    let currentPosition = window.scrollY;
    let sectionHeight = section.offsetHeight;
    let sectionTop = section.offsetTop - 50;
    let sectionId = section.getAttribute("id");

    if (
      currentPosition > sectionTop &&
      currentPosition <= sectionTop + sectionHeight
    ) {
      links.forEach((link) => {
        closeNav(link);
        link.classList.remove("current");
        document
          .querySelector(`li a[href*='${sectionId}']`)
          .classList.add("current");
      });
    }
  });
}

function addBlur() {
  const header = document.querySelector("header");

  window.scrollY >= 50
    ? header.classList.add("blur-header")
    : header.classList.remove("blur-header");
}

menuBtn.addEventListener("click", () => {
  nav.classList.add("active");
});
closeNav(closeBtn);
closeNav(main);
closeNav(footer);

window.addEventListener("scroll", addBlur);
window.addEventListener("scroll", navHighlighter);
