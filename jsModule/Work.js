'use strict';

export default class Work{
    constructor(){
        this.workBtnContainer = document.querySelector('.work__categories');
        this.projectContainer = document.querySelector('.work__projects');
        this.projects = document.querySelectorAll('.project');
    }
    controllWorkProject(){
        this.workBtnContainer.addEventListener('click',(e)=>{
            const workActiveBtn = document.querySelector(".category__btn.active");
            workActiveBtn.classList.remove('active');

            const target = e.target.nodeName === "BUTTON"? e.target : e.target.parentNode;
            target.classList.add('active');
            
            const filter = e.target.dataset.filter ||  e.target.parentNode.dataset.filter;
            this.projectContainer.classList.add('ani-out');
            
            setTimeout(()=>{
                this.projects.forEach((project)=>{
                    if (filter == project.dataset.type || filter == "*") {
                        project.classList.remove("invisible");
                      } else {
                        project.classList.add("invisible");
                      };
                      this.projectContainer.classList.remove("ani-out");
                })
            },200)
        })
    }
}