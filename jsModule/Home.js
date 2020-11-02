'use strict';

export default class Home{
    constructor(){
        this.contactBtn = document.querySelector('.home__contact');
        this.home = document.querySelector('#home');
        this.homeHeight = home.getBoundingClientRect().height;
    }

    contactAutoScroll(){
        this.contactBtn.addEventListener('click',()=>{
            scrollIntoView("#contact");
        })
    }
    homeOpacityDown(){
        document.addEventListener('scroll',()=>{
            this.home.style.opacity = 1 - window.scrollY / this.homeHeight;
        })
    }
}

function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:"smooth"});
}