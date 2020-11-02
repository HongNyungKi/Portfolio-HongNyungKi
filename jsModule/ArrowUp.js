'use strict';

export default class ArrowUp{
    constructor(){
        this.arrow = document.querySelector('#arrowUp');
        this.homeHeight = home.getBoundingClientRect().height;
    }

    showArrowBtn(){
        document.addEventListener('scroll',()=>{
            if(window.scrollY > this.homeHeight / 2){
                this.arrow.classList.add('visible');
            }else{
                this.arrow.classList.remove('visible');
            }
        })
    }

    arrowAutoScroll(){
        this.arrow.addEventListener('click',()=>{
            scrollIntoView('#home');
        })
    }
}


function scrollIntoView(selector){
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior:"smooth"});
}