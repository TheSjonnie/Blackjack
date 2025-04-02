import {CreateElement} from './BlackjackHandeler.js';

document.addEventListener("DOMContentLoaded", function () {
    setEventlistenersToChips();
});
function setEventlistenersToChips(){
    const chipsContainer = document.getElementById("ChipsBet");
    console.log("chipsContainer ==> ", chipsContainer);
    chipsContainer.addEventListener("click", function (event) {
        const clickedChip = event.target; // Getting the right Chip
        if (clickedChip.tagName === "IMG") {
            const chipValue = clickedChip.dataset.value;  // Getting the value of the pressed chip
            const imgPath = clickedChip.currentSrc;
            handleChipClick(chipValue,imgPath);
        }
    });
}
function handleChipClick(value,imgPath) {
    const Betelement = document.getElementById('Bet');
    let number = parseInt( Betelement.innerHTML);
    number += parseInt(value);
    Betelement.innerHTML = number
    const ParentElement = document.getElementById('userChipBetContainer');
    const ClassNameFirst = `ChipImgSize`;
    const ClassnNameOther = `ChipImgSize absolute top-${Math.floor(Math.random() * 6)} left-${Math.floor(Math.random() * 6)}  transform rotate-${Math.floor(Math.random() * 80) / 10}`;
    const ClassName = (ParentElement.childElementCount == 0) ? ClassNameFirst : ClassnNameOther;
    const alt = `Value ${value} Chip`
    CreateElement('img',ClassName, alt, imgPath, ParentElement)
}
