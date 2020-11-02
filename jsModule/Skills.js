const SKILLS_ITEMS = [
    {
      name: 'HTML',
      score: 80
    },
    {
      name: 'CSS',
      score: 80
    },
    {
      name: 'JAVASCRIPT',
      score: 80
    },
    {
      name: 'SCSS',
      score: 70
    },
    {
      name: 'JQUERY',
      score: 60
    },
    {
      name: 'REACT',
      score: 50
    }
  ];

export default class Skills{
    constructor(){
        this.target = document.querySelector('.skillset__left');
    }
    
    loadSkills(){
        SKILLS_ITEMS.forEach(item => {
            const containerDiv = document.createElement('div');
            const descriptionDiv = document.createElement('div');
            const nameEl = document.createElement('span');
            const scoreEl = document.createElement('span');
            const skillBarContainer = document.createElement('div');
            const skillBar = document.createElement('div');
        
            this.target.appendChild(containerDiv);
            containerDiv.setAttribute('class', 'skill');
            containerDiv.appendChild(descriptionDiv);
            descriptionDiv.setAttribute('class', 'skill__description');
            descriptionDiv.appendChild(nameEl);
            descriptionDiv.appendChild(scoreEl);
            
            nameEl.setAttribute('class', 'des__name');
            scoreEl.setAttribute('class', 'des__score');
        
            nameEl.innerText = item.name;
            scoreEl.innerText = `${item.score}%`;
        
            containerDiv.appendChild(skillBarContainer);
            skillBarContainer.setAttribute('class', 'skill__bar');
            skillBarContainer.appendChild(skillBar);
        
            skillBar.setAttribute('class', 'bar__value');
            skillBar.setAttribute('style', `width: ${item.score}%`);
        
          })
    }
}