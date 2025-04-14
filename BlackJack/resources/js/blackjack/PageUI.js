import { UserClass } from './blackjack.js';
import {CreateElement} from './helper.js';

document.addEventListener("DOMContentLoaded", function () {
    setEventlistenersToChips();
});
function setEventlistenersToChips(){
    const chipsContainer = document.getElementById("ChipsBet");
    console.log("chipsContainer ==> ", chipsContainer);
    chipsContainer.addEventListener("click", function (event) {
        const clickedChip = event.target;
        if (clickedChip.tagName === "IMG") {
            const chipValue = clickedChip.dataset.value;
            const imgPath = clickedChip.currentSrc;
            handleChipClick(chipValue,imgPath);
        }
    });
}
function handleChipClick(value,imgPath) {
    const BetElement = document.getElementById('Bet');
    const creditElement = document.getElementById('Credits');
    let number = parseInt( BetElement.innerHTML);
    number += parseInt(value);
    if (UserClass.getCredits() < number){
        alert('You cant bet more when you have credits please buy more if you want to bet more')
        return;
    }
    creditElement.innerHTML -= parseInt(value);
    console.log("number ==> ", number);
    console.log("getCredits ==> ", UserClass.getCredits());

    UserClass.saveUserBet(number);
    BetElement.innerHTML = number
    const ParentElement = document.getElementById('userChipBetContainer');
    const ClassNameFirst = `ChipImgSize`;
    const ClassnNameOther = `ChipImgSize absolute top-${Math.floor(Math.random() * 6)} left-${Math.floor(Math.random() * 6)}  transform rotate-${Math.floor(Math.random() * 80) / 10}`;
    const ClassName = (ParentElement.childElementCount == 0) ? ClassNameFirst : ClassnNameOther;
    const alt = `Value ${value} Chip`
    CreateElement('img',ClassName, alt, imgPath, ParentElement)
}
function SetHtmlElementContent(HtmlElementId, content){
    if (!HtmlElementId || !content){
        console.error('HtmlElementId or Content is not given Funtion SetHtmlELement');
        return;
    }
    if (Array.isArray(HtmlElementId)){
        HtmlElementId.forEach(id => {
            document.getElementById(id).innerHTML = content;
        });
    } else{
        document.getElementById(HtmlElementId).innerHTML = content;
    }
    
}
function ClassListAddHidden(HtmlElementId){
    document.getElementById(HtmlElementId).classList.add('hidden')
}
function ClassListAddshow(HtmlElementId){
    document.getElementById(HtmlElementId).classList.remove('hidden')
}
export {SetHtmlElementContent, ClassListAddHidden, ClassListAddshow};