import cardsImageClasses from "../data/cardsImageClasses.json";
import { setHtmlElementContent, classListAddShow } from "./pageUI";
import { userClass, dealerClass } from "./blackjack";
function createElementFuntion(element, className, alt, src, parentElement) {
console.log("parentElement ==> ", parentElement);
    let createdElement = document.createElement(element);
    createdElement.setAttribute("src", src);
    createdElement.setAttribute("class", className);
    createdElement.alt = alt;
    parentElement.appendChild(createdElement);
    return createdElement;
}
async function pickCard(parentContainerName, deck) {
console.log("parentContainerName ==> ", parentContainerName);
    console.log("function ==> pickCard");
    let card = deck[Math.floor(Math.random() * 52)];
    const parentElement = document.getElementById(parentContainerName);
    let dealerObject = dealerClass.getObject();
    console.log("dealerobject ==> ", dealerObject);
    let childsInparentElement;
    let blankcard;
    if (parentContainerName == "dealerCardsImageContainer" && dealerObject && dealerObject.amouthCards == 1) {
        blankcard = document.getElementById("dealerCardsImageContainer").children[1];
        blankcard.alt = card
    } else {
        childsInparentElement = parentElement.childElementCount;
        let left = cardsImageClasses[childsInparentElement]["left"];
        let rotate = cardsImageClasses[childsInparentElement]["rotate"];
        let position = cardsImageClasses[childsInparentElement]["position"];
        const className = `CardsImgSize ${position} left-${left} rotate-${rotate}`;
        const alt = `${card} Image`;
        blankcard = createElementFuntion(
            "img",
            className,
            alt,
            "http://127.0.0.1:8000/image/DeckCards/back_light.png",
            parentElement
        );
        await timeOut();
    }

    blankcard.src = `http://127.0.0.1:8000/image/DeckCards/${card}.png`;
    return card;
}
function getvalue(card, aCount) {
    let cardValue = card.split("_")[1];
    if (cardValue == "J" || cardValue == "Q" || cardValue == "K") {
        cardValue = 10;
    } else if (cardValue == "A") {
        cardValue = 11;
        aCount++;
    } else {
        cardValue = parseInt(cardValue);
    }
    return { cardValue, aCount };
}
async function timeOut() {
    await new Promise((resolve) => setTimeout(resolve, 8));
    return;
}
function actionBtnSelection() {
    console.log("function ==> ", "actionBtnSelection");
    let userObject = userClass.getObject();
    let actionBtnHitShow = false;
    let actionBtnStandShow = false;
    let actionBtnDubbleShow = true;
    let actionBtnSplitShow = true;
    console.log("UsercardValue ==> ", userObject ? userObject : "not difend");
    if (!userObject.valueCard3) {
        if (userObject.valueCard1 === userObject.valueCard2) {
            actionBtnHitShow = true;
            actionBtnStandShow = true;
            actionBtnSplitShow = true;
            if (
                userObject.TotalValue === 9 ||
                userObject.TotalValue === 10 ||
                userObject.TotalValue === 11
            ) {
                actionBtnDubbleShow = true;
            }
        } else if (
            userObject.TotalValue === 9 ||
            userObject.TotalValue === 10 ||
            userObject.TotalValue === 11
        ) {
            actionBtnHitShow = true;
            actionBtnStandShow = true;
            actionBtnDubbleShow = true;
        } else {
            actionBtnHitShow = true;
            actionBtnStandShow = true;
        }
    } else {
        actionBtnHitShow = true;
        actionBtnStandShow = true;
    }
    actionBtnHitShow ? classListAddShow("actionBtnHit") : "";
    actionBtnStandShow ? classListAddShow("actionBtnStand") : "";
    actionBtnDubbleShow ? classListAddShow("actionBtnDubble") : "";
    actionBtnSplitShow ? classListAddShow("actionBtnSplit") : "";
}
function displayTotalValue(htmlElementId, object) {
console.log("object ==> ", object);
console.log("htmlElementId ==> ", htmlElementId);
    let htmlDisplay;
    if (object.Acount > 0) {
        htmlDisplay = `${object.totalValue - 10}/${object.totalValue}`;
    } else {
        htmlDisplay = object.totalValue;
    }
    setHtmlElementContent(htmlElementId, htmlDisplay);
}

export {
    createElementFuntion,
    actionBtnSelection,
    displayTotalValue,
    pickCard,
    timeOut,
    getvalue,
};
