const btnMenu = document.querySelector(".btn--menu");
const navMenu = document.querySelector(".nav__menu");
const icon = document.querySelector(".nav__menu--icon");
const body = document.querySelector("body");
btnMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");

  if (navMenu.classList.contains("show")) {
    icon.src = "./images/icon-close.svg";
    btnMenu.setAttribute("aria-expanded", true);
    body.classList.add("no-scroll");
  } else {
    icon.src = "./images/icon-hamburger.svg";
    btnMenu.setAttribute("aria-expanded", false);
    body.classList.remove("no-scroll");
  }
});
