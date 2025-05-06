import { userClass } from './blackjack.js';
import { createElementFunction } from './helper.js';

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
    userClass.saveUserBet(number);
    let top = Math.floor(Math.random() * 6)
    let left = Math.floor(Math.random() * 6) 
    let rotate = Math.floor(Math.random() * 80) / 10;
    (userClass.getObjectBet()) ? userClass.updateObjectBet(value, imgPath,left, top, rotate) : userClass.createObjectBet(value, imgPath);
    betElement.innerHTML = number;
    const parentElement = document.getElementById('userChipBetContainer');
    const alt = `Value ${value} Chip`;
    createElementFunction({
        type: "img",
        className: "ChipImgSize",
        alt: alt,
        src: imgPath,
        parentElement: parentElement,
        styles: {
            position: (parentElement.childElementCount == 0) ? 'relative' : 'absolute',
            top: top,
            left: left,
            rotate: rotate
        },
    }
    );
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

export { setHtmlElementContent, classListAddHidden, classListAddShow, setEventListenersToChips };