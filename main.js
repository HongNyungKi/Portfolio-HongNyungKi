'use strict';

import Navbar from './jsModule/Navbar.js';
import Home from './jsModule/Home.js';
import Skills from './jsModule/Skills.js';
import Work from './jsModule/Work.js';
import ArrowUp from './jsModule/ArrowUp.js';

const navbar = new Navbar();
const home = new Home();
const skills = new Skills();
const work = new Work();
const arrowUp = new ArrowUp();


navbar.resizeNavbar();
navbar.clickAutoScroll();
navbar.respondMenu();
home.contactAutoScroll();
home.homeOpacityDown();
skills.loadSkills();
work.controllWorkProject();
arrowUp.showArrowBtn();
arrowUp.arrowAutoScroll();