let config = {
    number: 0,
    defaultUnitLevel: 0
};




const clickNum = document.getElementById('#click-score');
const level = document.getElementById('#click-EXP');
const section = document.querySelector('.promo');
const progress = document.querySelector('progress');

const moneyProfile = document.getElementById('#money-profile');


section.addEventListener('click', (e) =>{
    const target = e.target;
    config.number += 1;


    if(target && target.classList.contains('promo') || target.classList.contains('promo__wrapper')){
    }

    clickNum.innerHTML = config.number;
});





// menu

const open = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const overlay = document.querySelector('.menu__overlay');

open.addEventListener('click', () =>{
    menu.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});
close.addEventListener('click', () =>{
    menu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
});









