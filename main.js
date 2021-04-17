const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelectorAll(".nav-link");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileNav);

function mobileNav() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

navLink.forEach((item) => item.addEventListener("click", closeNav));

function closeNav() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
