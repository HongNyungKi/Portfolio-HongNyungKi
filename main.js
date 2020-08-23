"use strict";

const navBar = document.querySelector("#navbar");
const navBarHeight = navBar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY > navBarHeight) {
    navBar.classList.add("down");
  } else {
    navBar.classList.remove("down");
  }
});
