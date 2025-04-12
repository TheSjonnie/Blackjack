import CardsImageClasses from './data/CardsImageClasses.json';
import FetchUrl from './data/FetchUrl.json';
import { SetHtmlElementContent, ClassListAddHidden, ClassListAddshow } from './BlackjackPageUI';
let deck = [];
let UserCardsValue = {}
let Dealercardvalue = {}
document.addEventListener('DOMContentLoaded', () => {
    deck = createdeck();
    document.getElementById('StartGame').addEventListener('click', () => {
        StartGame();
        addEventListenerToActionBtn('ActionBtnHit');
        addEventListenerToActionBtn('ActionBtnStand');
        addEventListenerToActionBtn('ActionBtnDubble');
        addEventListenerToActionBtn('ActionBtnSplit');
    });
})
async function StartGame() {
    ClassListAddHidden('ChipsbetContainer');
    ClassListAddHidden('StartBtnContainer');
    let Usercard1 = await PickCard('userCardsImageContainer');
    await TimeOut();
    let Dealercard1 = await PickCard('DealerCardsImageContainer');
    await TimeOut();
    let Usercard2 = await PickCard('userCardsImageContainer');
    await TimeOut();
    let Dealercard2 = await PickCard('DealerCardsImageContainer');

    let { CardValue: Dealercardvalue2, Acount: DealerACardsNumber2 } = Getvalue(Dealercard2, 0);
    let { CardValue: Dealercardvalue1, Acount: DealerACardsNumber1 } = Getvalue(Dealercard1, 0);
    let { CardValue: Usercardvalue1, Acount: UserACardsNumber1 } = Getvalue(Usercard1, 0);
    let { CardValue: Usercardvalue2, Acount: UserACardsNumber2 } = Getvalue(Usercard2, 0);
    UserCardsValue = {
        AmouthCards: 2,
        TotalValue: Usercardvalue1 + Usercardvalue2,
        Acount: UserACardsNumber1 + UserACardsNumber2,
        ValueCard1: Usercardvalue1,
        ValueCard2: Usercardvalue2
    }
    Dealercardvalue = {
        AmouthCards: 2,
        TotalValue: Dealercardvalue1 + Dealercardvalue2,
        Acount: DealerACardsNumber1 + DealerACardsNumber2,
        ValueCard1: Dealercardvalue1,
        ValueCard2: Dealercardvalue2
    }
    SetHtmlElementContent('DealerCardsValue', Dealercardvalue.TotalValue)
    SetHtmlElementContent('UserCardsValue', UserCardsValue.TotalValue);
    ActionBtnSelection()
}
function ActionBtnSelection() {
console.log("ActionBtnSelection ==> ", "ActionBtnSelection");
    let ActionBtnHitShow = false;
    let ActionBtnStandShow = false;
    let ActionBtnDubbleShow = false
    let ActionBtnSplitShow = false;
    console.log("UserCardsValue ==> ", UserCardsValue);
    console.log("Dealercardvalue ==> ", Dealercardvalue);
    if (!UserCardsValue.ValueCard3 ){
        if (UserCardsValue.ValueCard1 === UserCardsValue.ValueCard2) {
            ActionBtnHitShow = true;
            ActionBtnStandShow = true;
            ActionBtnSplitShow = true;

            if (UserCardsValue.TotalValue === 9 || UserCardsValue.TotalValue === 10 || UserCardsValue.TotalValue === 11) {
                ActionBtnDubbleShow = true;
    
            }
        } else if (UserCardsValue.TotalValue === 9 || UserCardsValue.TotalValue === 10 || UserCardsValue.TotalValue === 11) {
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
    (ActionBtnHitShow) ? ClassListAddshow('ActionBtnHit') : "";
    (ActionBtnStandShow) ? ClassListAddshow('ActionBtnStand') : "";
    (ActionBtnDubbleShow) ? ClassListAddshow('ActionBtnDubble') : "";
    (ActionBtnSplitShow) ? ClassListAddshow('ActionBtnSplit') : "";
    
}
function addEventListenerToActionBtn(HtmlElementId) {
    document.getElementById(HtmlElementId).addEventListener('click', (event) => {
        switch (event.target.id) {
            case 'ActionBtnHit':
                ActionHit()
                console.log("ActionHit ==> ", "ActionHit");

                break;
            case 'ActionBtnStand':
                ActionStand()
                console.log("ActionStand ==> ", "ActionStand");
                break;
            case 'ActionBtnDubble':
                ActionDubble()
                break;
            case 'ActionBtnSplit':
                ActionSplit()
                break;
            default:
                break;
        }

    })
}
function TotalValueCheck(Object){
console.log("TotalValue ==> ", Object);
console.log("TotalValueCheck ==> ", "TotalValueCheck");
    if(Object.TotalValue > 21) {
        if (Object.Acount > 0){
            Object.Acount--
            Object.TotalValue -= 10
            console.log("Object ==> ", Object);
            return true
        }
        FinalLos()
        return false;
    } else if(Object.TotalValue == 21){
        FinalWin()
        return false;
    } else{
        return true;
    }
}
async function ActionHit() {
    (!document.getElementById('ActionBtnHit').classList.contains('hidden')) ? ClassListAddHidden('ActionBtnHit') : '';
    (!document.getElementById('ActionBtnStand').classList.contains('hidden')) ? ClassListAddHidden('ActionBtnStand') : '';
    (!document.getElementById('ActionBtnDubble').classList.contains('hidden')) ? ClassListAddHidden('ActionBtnDubble') : '';
    (!document.getElementById('ActionBtnSplit').classList.contains('hidden')) ? ClassListAddHidden('ActionBtnSplit') : '';
    let card = await PickCard('userCardsImageContainer');
    let NextCardsNumber = UserCardsValue.AmouthCards+1
    let {CardValue: CardValue} = Getvalue(card);
    let NewTotalValue = UserCardsValue.TotalValue + CardValue;
    UserCardsValue = {
        ...UserCardsValue,
        TotalValue: NewTotalValue,
        AmouthCards: NextCardsNumber,
        [`ValueCard${NextCardsNumber}`]: CardValue,
    };
    console.log("UserCardsValue ==> ", UserCardsValue);
    SetHtmlElementContent('UserCardsValue', UserCardsValue.TotalValue);
    if (TotalValueCheck(UserCardsValue)) {
        ActionBtnSelection();
    }
}
async function ActionStand(){
    (!document.getElementById('ActionBtnHit').classList.contains('hidden')) ? ClassListAddHidden('ActionBtnHit') : '';
    (!document.getElementById('ActionBtnStand').classList.contains('hidden')) ? ClassListAddHidden('ActionBtnStand') : '';
    (!document.getElementById('ActionBtnDubble').classList.contains('hidden')) ? ClassListAddHidden('ActionBtnDubble') : '';
    (!document.getElementById('ActionBtnSplit').classList.contains('hidden')) ? ClassListAddHidden('ActionBtnSplit') : '';
    while (Dealercardvalue.TotalValue < 17) {
        let card = await PickCard('DealerCardsImageContainer');
        let NextCardsNumber = Dealercardvalue.AmouthCards+1
        let {CardValue: CardValue} = Getvalue(card);
        let NewTotalValue = Dealercardvalue.TotalValue + CardValue;
        Dealercardvalue = {
            ...Dealercardvalue,
            TotalValue: NewTotalValue,
            AmouthCards: NextCardsNumber,
            [`ValueCard${NextCardsNumber}`]: CardValue,
        };
        SetHtmlElementContent('DealerCardsValue', Dealercardvalue.TotalValue);
        await TimeOut();
    }
    // TotalValueCheck();
    if (TotalValueCheck(Dealercardvalue)){
           (Dealercardvalue.TotalValue > UserCardsValue.TotalValue) ? FinalLos() : FinalWin();
    }
}
function ActionDubble() {

}
function ActionSplit(){

}
async function FinalLos(){
    SetHtmlElementContent('GameResults', 'You lost');
    // TimeOut();
    // await new Promise((resolve) => setTimeout(resolve, 900));
    // window.location.href = 'http://127.0.0.1:8000/Blackjackpage';
}
async function FinalWin(){
    SetHtmlElementContent('GameResults', 'You Win');
    // TimeOut();
    await new Promise((resolve) => setTimeout(resolve, 900));
    window.location.href = 'http://127.0.0.1:8000/Blackjackpage';
}
async function TimeOut() {
    await new Promise((resolve) => setTimeout(resolve, 8));
    return;
}
function Getvalue(card, Acount) {
    let CardValue = card.split('_')[1]
    if (CardValue == 'J' || CardValue == 'Q' || CardValue == 'K') {
        CardValue = 10;
    } else if (CardValue == 'A') {
        CardValue = 11;
        Acount++;
    } else {
        CardValue = parseInt(CardValue);
    }
    return { CardValue, Acount };
}
function createdeck() {
    let suits = ['clubs', 'diamonds', 'hearts', 'spades'];
    let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    suits.forEach((type) => {
        ranks.forEach((number) => {
            deck.push(`${type}_${number}`);
        });
    });
    return deck;
}

async function PickCard(parentContainerName) {
    let card = deck[Math.floor(Math.random() * 52)];
    const ParentElement = document.getElementById(parentContainerName);
    let left = CardsImageClasses[(ParentElement.childElementCount)]['left'];
    let rotate = CardsImageClasses[(ParentElement.childElementCount)]['rotate'];
    let position = CardsImageClasses[(ParentElement.childElementCount)]['position'];
    const ClassName = `CardsImgSize ${position} left-${left} rotate-${rotate}`;
    const alt = `${card} Image`
    let Blankcard = CreateElement('img', ClassName, alt, "http://127.0.0.1:8000/image/DeckCards/back_light.png", ParentElement)
    await TimeOut();
    Blankcard.src = `http://127.0.0.1:8000/image/DeckCards/${card}.png`;
    return card;
}
function CreateElement(Element, ClassName, Alt, Src, ParentElement) {
    let CreatedElement = document.createElement(Element);
    CreatedElement.setAttribute('src', Src);
    CreatedElement.setAttribute('class', ClassName);
    CreatedElement.alt = Alt;
    ParentElement.appendChild(CreatedElement);
    return CreatedElement;
}

export { CreateElement };