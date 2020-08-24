"use strict";

//재사용을 위한 함수
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({
        behavior: "smooth"
    });
}


//navBar slide down
const navBar = document.querySelector("#navbar");
const navBarHeight = navBar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
    if (window.scrollY > navBarHeight) {
        navBar.classList.add("down");
    } else {
        navBar.classList.remove("down");
    }
});

//menu auto scrolling
const navBarMenu = document.querySelector(".navbar__menu");
navBarMenu.addEventListener("click", (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return;
    }
    scrollIntoView(link);
});

//contact me btn
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
    scrollIntoView('#contact');
})

// transparent home section
const home = document.querySelector('.home__container');
const homeheight = home.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeheight;
})