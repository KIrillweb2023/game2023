let config = {
    money: 0,
    defaultUnitLevel: 0
};

const scaleProgress = {
    scale: 100,
}

const section = document.querySelector('.promo');

if(section){   
    section.addEventListener('click', () =>{
        lastLevel();
        farmMoney();
        farmLevel();
    });
}

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

function farmLevel(){
    if(config.defaultUnitLevel >= 7){
        config.money += 10;
    }
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

const tab = document.querySelectorAll('.tabheader__item');
const parentTab = document.querySelector('.tabheader__items');
const tabcontent = document.querySelectorAll('.tabcontent');

function visibleOffTab(){
    tabcontent.forEach(item =>{
        item.classList.remove('show');
        item.classList.add('hide');
    });
    tab.forEach(item =>{
        item.classList.remove('tabheader__item_active')
    });
}
function visibleOnTab(i = 0){
    tabcontent[i].classList.add('show');
    tabcontent[i].classList.remove('hide');
    tab[i].classList.add('tabheader__item_active');
}
visibleOffTab();
visibleOnTab();

parentTab.addEventListener('click', (event) =>{
    const target = event.target;
    if(target && target.classList.contains('tabheader__item')){
        tab.forEach((item, i) =>{
            if(target == item){
                visibleOffTab();
                visibleOnTab(i);
            }
        });
    }
});









