import CardsImageClasses from '../data/CardsImageClasses.json'
import { SetHtmlElementContent,ClassListAddshow } from './PageUI';
import { UserClass, DealerClass } from "./blackjack";
function CreateElement(Element, ClassName, Alt, Src, ParentElement) {
    let CreatedElement = document.createElement(Element);
    CreatedElement.setAttribute("src", Src);
    CreatedElement.setAttribute("class", ClassName);
    CreatedElement.alt = Alt;
    ParentElement.appendChild(CreatedElement);
    return CreatedElement;
}
async function PickCard(parentContainerName,deck) {
    console.log("function ==> PickCard");
    let card = deck[Math.floor(Math.random() * 52)];
    const ParentElement = document.getElementById(parentContainerName);
    let left = CardsImageClasses[ParentElement.childElementCount]["left"];
    let rotate = CardsImageClasses[ParentElement.childElementCount]["rotate"];
    let position =
        CardsImageClasses[ParentElement.childElementCount]["position"];
    const ClassName = `CardsImgSize ${position} left-${left} rotate-${rotate}`;
    const alt = `${card} Image`;
    let Blankcard = CreateElement(
        "img",
        ClassName,
        alt,
        "http://127.0.0.1:8000/image/DeckCards/back_light.png",
        ParentElement
    );
    await TimeOut();
    Blankcard.src = `http://127.0.0.1:8000/image/DeckCards/${card}.png`;
    return card;
}
function showBlackcard(parentContainerName){
    console.log("function ==> PickCard");
    const ParentElement = document.getElementById(parentContainerName);
    let left = CardsImageClasses[ParentElement.childElementCount]["left"];
    let rotate = CardsImageClasses[ParentElement.childElementCount]["rotate"];
    let position =
        CardsImageClasses[ParentElement.childElementCount]["position"];
    const ClassName = `CardsImgSize ${position} left-${left} rotate-${rotate}`;
    const alt = `blankCard Image`;
    CreateElement(
        "img",
        ClassName,
        alt,
        "http://127.0.0.1:8000/image/DeckCards/back_light.png",
        ParentElement
    );
}
function Getvalue(card, Acount) {
    let CardValue = card.split("_")[1];
    if (CardValue == "J" || CardValue == "Q" || CardValue == "K") {
        CardValue = 10;
    } else if (CardValue == "A") {
        CardValue = 11;
        Acount++;
    } else {
        CardValue = parseInt(CardValue);
    }
    return { CardValue, Acount };
}
async function TimeOut() {
    await new Promise((resolve) => setTimeout(resolve, 8));
    return;
}
function ActionBtnSelection() {
    console.log("function ==> ", "ActionBtnSelection");
    let UserObject = UserClass.GetObject();
    let ActionBtnHitShow = false;
    let ActionBtnStandShow = false;
    let ActionBtnDubbleShow = false;
    let ActionBtnSplitShow = false;
    console.log('UserCardValue ==> ', (UserObject) ? UserObject : 'not difend');
    if (!UserObject.ValueCard3) {
        if (UserObject.ValueCard1 === UserObject.ValueCard2) {
            ActionBtnHitShow = true;
            ActionBtnStandShow = true;
            ActionBtnSplitShow = true;
            if (
                UserObject.TotalValue === 9 ||
                UserObject.TotalValue === 10 ||
                UserObject.TotalValue === 11
            ) {
                ActionBtnDubbleShow = true;
            }
        } else if (
            UserObject.TotalValue === 9 ||
            UserObject.TotalValue === 10 ||
            UserObject.TotalValue === 11
        ) {
            ActionBtnHitShow = true;
            ActionBtnStandShow = true;
            ActionBtnDubbleShow = true;
        } else {
            ActionBtnHitShow = true;
            ActionBtnStandShow = true;
        }
    } else {
        ActionBtnHitShow = true;
        ActionBtnStandShow = true;
    }
    ActionBtnHitShow ? ClassListAddshow("ActionBtnHit") : "";
    ActionBtnStandShow ? ClassListAddshow("ActionBtnStand") : "";
    ActionBtnDubbleShow ? ClassListAddshow("ActionBtnDubble") : "";
    ActionBtnSplitShow ? ClassListAddshow("ActionBtnSplit") : "";
}
function DisplayTotalValue(HtmlElementId, Object) {
    let HtmlDisplay;
    if (Object.Acount > 0) {
        HtmlDisplay = `${Object.TotalValue - 10}/${Object.TotalValue}`;
    } else {
        HtmlDisplay = Object.TotalValue;
    }
    SetHtmlElementContent(HtmlElementId, HtmlDisplay);
}

export {CreateElement,ActionBtnSelection,DisplayTotalValue,PickCard, TimeOut,Getvalue,showBlackcard}