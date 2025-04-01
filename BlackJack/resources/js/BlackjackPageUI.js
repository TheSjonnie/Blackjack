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
    const ParentElement = document.getElementById('userChipBetContainer');
    console.log("ParentElement ==> ", ParentElement);
    
    const ClassName = `ChipImgSize absolute top-${Math.floor(Math.random() * 30) / 10} left-${Math.floor(Math.random() * 30) / 10}  transform rotate-${Math.floor(Math.random() * 80) / 10}`
    const alt = `Value ${value} Chip`
    const src = `{{asset('image/Chips/${value}.png')}}`
    CreateElement('img',ClassName, alt, imgPath, ParentElement)
}
function CreateElement(Element,ClassName,Alt,Src,ParentElement){
    let CreatedElement = document.createElement(Element);
    CreatedElement.setAttribute('src',Src);
    CreatedElement.setAttribute('class',ClassName);
    CreatedElement.Alt =Alt;
    ParentElement.appendChild(CreatedElement);
}