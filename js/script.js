let config = {
    money: 0,
    defaultUnitLevel: 0
};

const scaleProgress = {
    scale: 100
}

const section = document.querySelector('.promo');


section.addEventListener('click', (e) =>{
    lastLevel();
    farmMoney();
});


function lastLevel(){
    const progress = document.querySelector('progress');
    const level = document.getElementById('#level');

    if(progress.value != scaleProgress.scale){
        progress.value += 2;
        if(progress.value == scaleProgress.scale){
            config.defaultUnitLevel += 1;
        } else {
            config.defaultUnitLevel += 0;
        }
    } else {
        progress.value = 0
    }

    level.innerHTML = config.defaultUnitLevel;
}

function farmMoney(){
    const clickNum = document.getElementById('#click-score');
    config.money += 1;
    clickNum.innerHTML = config.money;
}


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









