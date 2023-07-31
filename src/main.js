const links = document.querySelectorAll(".nav__link");
const menuBtn = document.querySelector(".nav__menu-btn");
const closeBtn = document.querySelector(".nav__close-btn");
const nav = document.querySelector(".nav__links");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");
// Get all the sections that have ids
const sections = document.querySelectorAll("section[id]");

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

menuBtn.addEventListener("click", () => {
  nav.classList.add("active");
});
closeNav(closeBtn);
closeNav(main);
closeNav(footer);

window.addEventListener("scroll", navHighlighter);

console.log(sections);
