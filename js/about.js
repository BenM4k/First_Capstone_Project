//navbar 
const menuBtn = document.querySelector('.menu-btn');
const burger = document.querySelector('.burger');
const header = document.querySelector('header');
const menuNav = document.querySelector('.menu-navbar');
let displayMenu = false;

menuBtn.addEventListener('click', toggleMenu)

function toggleMenu(){
    if(!displayMenu) {
        burger.classList.add('open');
        header.classList.add('open');
        header.classList.add('open');
        menuNav.classList.add('open');
        displayMenu = true;
    }else{
        burger.classList.remove('open');
        header.classList.remove('open');
        menuNav.classList.remove('open');
        displayMenu = false;
    }
}