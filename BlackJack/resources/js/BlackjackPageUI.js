document.getElementById('ChipsBet').addEventListener('click',displayChipBet);

function displayChipBet(event){
    if (event.target.classList.contains("ChipImgSize")) {
        console.log("Chip clicked:", event.target.alt);
    }
}
function CreateElement(Element,ClassName,Alt,Src,ParentElement){
    let CreatedElement = document.createElement(Element);
    CreatedElement.src(Src);
    CreatedElement.classname(ClassName);
    CreatedElement.Alt(Alt);
    ParentElement.appendChild(CreatedElement);
}