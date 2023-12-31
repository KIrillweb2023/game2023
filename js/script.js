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

const levelText = document.querySelector('.text');

function lastLevel(){
    const progress = document.querySelector('progress');
    const level = document.getElementById('#level');

    if(progress.value != scaleProgress.scale){
        progress.value += 2;
        if(progress.value == scaleProgress.scale){
            config.defaultUnitLevel += 1;
            lvlBtn.classList.add('active');
            levelText.classList.remove('noneText');
        } else {
            config.defaultUnitLevel += 0;
        }
    } else {
        progress.value = 0;
    }
    level.innerHTML = config.defaultUnitLevel;
}

function farmLevel(){
    if(config.defaultUnitLevel >= 7){
        config.money += 10;
    }
}
const lvlBtn = document.querySelector('.card_btn');
if(lvlBtn){
    clickBtn();           
}

function clickBtn(){
    lvlBtn.addEventListener('click', () =>{
        config.money += 100;
        lvlBtn.classList.remove('active');
        levelText.classList.add('noneText');
    });
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
const tabcontainer = document.querySelector('.tabcontainer');

if(tabcontainer){
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
}


// manual

const manual = document.querySelector('.manual');
const closeBtn = document.querySelector('.manual__block-close');

if(manual){
    function showModal(){
        manual.classList.remove('hide');
    
        closeBtn.addEventListener('click', () =>{
            manual.classList.add('hide');
        });
    }
    setTimeout(()=>{
        showModal();
    }, 1000);
}

    
    
    








