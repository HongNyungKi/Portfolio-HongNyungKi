"use strict";



//메뉴바 자동 변환
const navBar = document.querySelector("#navbar");
const navBarHeight = navBar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY > navBarHeight) {
    navBar.classList.add("down");
  } else {
    navBar.classList.remove("down");
  }
});

//메뉴바 클릭시 자동 스크롤
const navBarMenu = document.querySelector(".navbar__menu");
navBarMenu.addEventListener("click", (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  scrollIntoView(link);
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({
    behavior: "smooth",
  });
}

//contact me btn 클릭 자동 스크롤
const homeContactBtn = document.querySelector(".home__contact");
homeContactBtn.addEventListener("click", () => {
  scrollIntoView("#contact");
});

//홈 배경 사진 스크롤시 투명도 조절
const home = document.querySelector(".home__container");
const homeheight = home.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeheight;
});

//arrowUp btn
const arrowUpBtn = document.querySelector(".arrowUp");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeheight / 2) {
    arrowUpBtn.classList.add("visible");
  } else {
    arrowUpBtn.classList.remove("visible");
  }
});

arrowUpBtn.addEventListener("click", () => {
  scrollIntoView("#home");
});

//work catrgories
const workBtnContainer = document.querySelector(".work__categories");
const projectContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");

workBtnContainer.addEventListener("click", (e) => {
  const activeBtn = document.querySelector(".category__btn.active");
  activeBtn.classList.remove("active");
  //버튼이 아닌 숫자 클릭시 버그 해결위해
  const target = e.target.nodeName == "BUTTON" ? e.target : e.target.parentNode;
  target.classList.add("active");

  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;

  projectContainer.classList.add("ani-out");
  setTimeout(() => {
    projects.forEach((project) => {
      if (filter == project.dataset.type || filter == "*") {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
    projectContainer.classList.remove("ani-out");
  }, 200);
});
