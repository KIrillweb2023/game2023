let config = {
    number: 0,
    defaultUnitLevel: 0
};

const configProgress = {
    progress: 1000
}



const clickNum = document.getElementById('#click-score');
const level = document.getElementById('#click-EXP');
const section = document.querySelector('.promo');
const progress = document.querySelector('progress');


section.addEventListener('click', (e) =>{
    const target = e.target;
    config.number += 1;
    showMoney();

    if(target && target.classList.contains('promo') || target.classList.contains('promo__wrapper')){
        levelFarm();
    }

    level.innerHTML = config.defaultUnitLevel;
    clickNum.innerHTML = config.number;
});


function showMoney(){


    if(config.defaultUnitLevel == 2){
        config.number += 4;
    } else if(config.defaultUnitLevel > 3){
        config.number += 9;
    }
}
function levelFarm(){
    if(progress.value != configProgress.progress){
        progress.value += 2;
        if(progress.value == configProgress.progress){
            config.defaultUnitLevel += 1;
        } else {
            config.defaultUnitLevel += 0;
        }
    } else {
        progress.value = 0;
    }
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









