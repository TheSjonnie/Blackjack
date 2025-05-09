import { userClassBetting } from './setupGame.js';

import { startGameFetch, updateCredits } from '../apiCalls.js';
function setEventlistenerToStartBtn() {
    document.getElementById("startGame").addEventListener(
        "click",
        async() => {
            let userBet = userClassBetting.getUserBet();
            if (userBet == 0){
                alert('please bet something to contine')
                setEventlistenerToStartBtn();
                return;
            }
            let objectBet = userClassBetting.getObjectBet();
            // console.log("🚀 ~ setEventlistenerToStartBtn ~ userBet:", objectBet)
            await updateCredits(userClassBetting.getCredits());
            startGameFetch(objectBet, userBet);
        },
        { once: true }
    );
}
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

    let currectBet = parseInt(userClassBetting.getUserBet())
    let newBet = currectBet + parseInt(value)
    if (userClassBetting.getCredits() < newBet) {
        alert('You can\'t bet more than you have credits. Please buy more if you want to bet more.');
        return;
    }
    userClassBetting.updateCredits(value)
    betElement.innerHTML = newBet;
    creditElement.innerHTML -= parseInt(value);
    const parentElement = document.getElementById('userChipBetContainer');

    let top = Math.floor(Math.random() * 6)
    let left = Math.floor(Math.random() * 6) 
    let rotate = Math.floor(Math.random() * 80) / 10;
    let position = (parentElement.childElementCount == 0) ? 'relative' : 'absolute';
    let alt = `Value ${value} Chip`;

    (userClassBetting.getObjectBet()) ? userClassBetting.updateObjectBet(value, imgPath,left, top, rotate) : userClassBetting.createObjectBet(value, imgPath);
    userClassBetting.updateUserBet(value);
    let createdElement = document.createElement('img');
    createdElement.classList.add(
        'ChipImgSize',
        `${position}`,
        `top-${top}`,
        `left-${left}`,
        `rotate-${rotate}`
      );
    createdElement.setAttribute('src', imgPath);
    createdElement.alt = alt;
    parentElement.appendChild(createdElement)
}
export {setEventListenersToChips, setEventlistenerToStartBtn}