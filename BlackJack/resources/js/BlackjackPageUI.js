document.addEventListener("DOMContentLoaded", function () {
    setEventlistenersToChips();
});
function setEventlistenersToChips(){
    const chipsContainer = document.getElementById("ChipsBet");
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
    const ClassnNameOther = `ChipImgSize absolute top-${Math.floor(Math.random() * 40) / 10} left-${Math.floor(Math.random() * 40) / 10}  transform rotate-${Math.floor(Math.random() * 80) / 10}`;
    const ClassName = (ParentElement.childElementCount == 0) ? ClassNameFirst : ClassnNameOther;
    const alt = `Value ${value} Chip`
    CreateElement('img',ClassName, alt, imgPath, ParentElement)
}
function CreateElement(Element,ClassName,Alt,Src,ParentElement){
    let CreatedElement = document.createElement(Element);
    CreatedElement.setAttribute('src',Src);
    CreatedElement.setAttribute('class',ClassName);
    CreatedElement.Alt =Alt;
    ParentElement.appendChild(CreatedElement);
}