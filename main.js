'use strict';

import Navbar from './jsModule/Navbar.js';
import Home from './jsModule/Home.js';
import Work from './jsModule/Work.js';
import ArrowUp from './jsModule/ArrowUp.js';

const navbar = new Navbar();
const home = new Home();
const work = new Work();
const arrowUp = new ArrowUp();


navbar.resizeNavbar();
navbar.clickAutoScroll();
navbar.respondMenu();
home.contactAutoScroll();
home.homeOpacityDown();
work.controllWorkProject();
arrowUp.showArrowBtn();
arrowUp.arrowAutoScroll();