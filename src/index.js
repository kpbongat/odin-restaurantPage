import aboutPage from './aboutPage';
import homePage from './homePage';
import menuPage from './menuPage';
import removeContent from './removeContent';

import './style.css';

document.querySelector('button#homePage').addEventListener('click', ()=>{
    homePage();
})

document.querySelector('button#aboutPage').addEventListener('click', ()=>{
    aboutPage();
})

document.querySelector('button#menuPage').addEventListener('click', ()=>{
    menuPage();
})