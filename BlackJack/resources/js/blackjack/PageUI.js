import { userClass } from './blackjack.js';
import { createElementFuntion } from './helper.js';

document.addEventListener("DOMContentLoaded", function () {
    setEventListenersToChips();
});
function setEventListenersToChips() {
    const chipsContainer = document.getElementById("chipsBet");
    chipsContainer.addEventListener("click", function (event) {
        const clickedChip = event.target;
        if (clickedChip.tagName === "IMG") {
            const chipValue = clickedChip.dataset.value;
            const imgPath = clickedChip.currentSrc;
            handleChipClick(chipValue, imgPath);
        }
    });
}
function handleChipClick(value, imgPath) {
    const betElement = document.getElementById('bet');
    const creditElement = document.getElementById('credits');
    let number = parseInt(betElement.innerHTML);
    number += parseInt(value);
    if (userClass.getCredits() < number) {
        alert('You can\'t bet more than you have credits. Please buy more if you want to bet more.');
        return;
    }
    creditElement.innerHTML -= parseInt(value);
    console.log("number ==> ", number);
    console.log("getCredits ==> ", userClass.getCredits());

    userClass.saveUserBet(number);
    betElement.innerHTML = number;
    const parentElement = document.getElementById('userChipBetContainer');
    const classNameFirst = `ChipImgSize`;
    const classNameOther = `ChipImgSize absolute top-${Math.floor(Math.random() * 6)} left-${Math.floor(Math.random() * 6)} transform rotate-${Math.floor(Math.random() * 80) / 10}`;
    const className = (parentElement.childElementCount == 0) ? classNameFirst : classNameOther;
    const alt = `Value ${value} Chip`;
    createElementFuntion('img', className, alt, imgPath, parentElement);
}
function setHtmlElementContent(htmlElementId, content) {
    if (!htmlElementId) {
        console.error('htmlElementId is not given in function setHtmlElementContent');
        return;
    } else if (!content){
        console.error('content is not given in function setHtmlElementContent');
        return;
    }
    if (Array.isArray(htmlElementId)) {
        htmlElementId.forEach(id => {
            document.getElementById(id).innerHTML = content;
        });
    } else {
        document.getElementById(htmlElementId).innerHTML = content;
    }
}
function classListAddHidden(htmlElementId) {
    let htmlElement = document.getElementById(htmlElementId);
    if (htmlElement){
        htmlElement.classList.add('hidden');
    } else{
        console.error('There is a error in function classListAddhidden line 58 htmlElementId =', htmlElementId)
    }
    
}
function classListAddShow(htmlElementId) {
    let htmlElement = document.getElementById(htmlElementId);
    if (htmlElement){
        htmlElement.classList.remove('hidden');
    } else{
        console.error('There is a error in function classListAddhidden line 58 htmlElementId =', htmlElementId)
    }
}

export { setHtmlElementContent, classListAddHidden, classListAddShow };