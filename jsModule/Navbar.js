'use strict';

export default class Navbar{
    constructor(){
        this.navBar = document.querySelector('#navbar');
        this.navBarHeight = this.navBar.getBoundingClientRect().height;
        this.navBarMenu = document.querySelector('.navbar__menu');
        this.navBarToggle = document.querySelector('.navbar__toggle-btn');
    }

    resizeNavbar(){
        document.addEventListener('scroll',()=>{
            if(window.scrollY > this.navBarHeight){
                this.navBar.classList.add('down');
            }else{
                this.navBar.classList.remove('down');
            }
        })
    }
    clickAutoScroll(){
        this.navBarMenu.addEventListener('click',(e)=>{
            const target = e.target;
            const link = target.dataset.link;
            if(link == null){
                return ;
            }
            scrollIntoView(link)
            this.navBarMenu.classList.remove('open');
        })
    }
    respondMenu(){
        this.navBarToggle.addEventListener('click',()=>{
            this.navBarMenu.classList.toggle('open');
        })
    }
}

function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:"smooth"});
}