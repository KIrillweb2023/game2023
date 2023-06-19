let config = {
    number: 0,
    progressСhecking: 0,
    defaultUnitLevel: 0
};

const progressUnitLevel = {
    unitOne: 100,
    unitTwo: 200,
    unitThree: 500,
    unitFor: 700,
    unitFive: 1000

}

const clickNum = document.getElementById('#click-score');
const level = document.getElementById('#click-EXP');

const section = document.querySelector('.promo');

console.log(clickNum);


section.addEventListener('click', (e) =>{
    const target = e.target;
    config.number += 1;

    console.log(config.number);
    if(target && target.classList.contains('promo') || target.classList.contains('promo__wrapper')){
        config.progressСhecking += 5;
        calculationLevel();

        console.log(config.progressСhecking);
    }
    level.innerHTML = config.defaultUnitLevel;
    clickNum.innerHTML = config.number;
});


function calculationLevel(){
    if(config.progressСhecking == progressUnitLevel.unitOne){
        config.defaultUnitLevel += 1;
    } else if(config.progressСhecking == progressUnitLevel.unitTwo){
        config.defaultUnitLevel += 1;
    } else if(config.progressСhecking == progressUnitLevel.unitThree){
        config.defaultUnitLevel += 1;
    } else if(config.progressСhecking == progressUnitLevel.unitFor){
        config.defaultUnitLevel += 1;
    } else if(config.progressСhecking == progressUnitLevel.unitFive){
        config.defaultUnitLevel += 1;
    }
}







// get settings









