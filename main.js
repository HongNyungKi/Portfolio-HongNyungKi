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

//show arrowUp btn when scrolling down
//auto scrolling up when arrow btn tapping
const arrowUpBtn = document.querySelector('.arrowUp');
document.addEventListener('scroll', () => {
    if (window.scrollY > homeheight / 2) {
        arrowUpBtn.classList.add('visible');
    } else {
        arrowUpBtn.classList.remove('visible');
    }
})

arrowUpBtn.addEventListener('click', () => {
    scrollIntoView('#home');
})

//work catrgories
//버튼을 클릭하면 해당하는 버튼의 data-filter값과 상응하는 data-type을 갖고있는
//것들만 나타나게 하는것이다. 
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter == null) {
        return;
    }
    projects.forEach((project) => {
        if (filter === '*' || filter === project.dataset.type) {
            project.classList.remove('invisible')
        } else {
            project.classList.add('invisible')

        }
    })
    console.log(filter);
})