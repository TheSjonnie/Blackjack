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
        ValueCard1: Usercardvalue1,
        ValueCard2: Usercardvalue2
    }
    Dealercardvalue = {
        AmouthCards: 2,
        TotalValue: Dealercardvalue1 + Dealercardvalue2,
        ValueCard1: Dealercardvalue1,
        ValueCard2: Dealercardvalue2
    }
    SetHtmlElementContent('DealerCardsValue', Dealercardvalue.TotalValue)
    SetHtmlElementContent('UserCardsValue', UserCardsValue.TotalValue);
    ActionBtnSelection()
}
function ActionBtnSelection() {
    let ActionBtnHitShow = false;
    let ActionBtnStandShow = false;
    let ActionBtnDubbleShow = false
    let ActionBtnSplitShow = false;
    console.log(Dealercardvalue, UserCardsValue);
    if (!UserCardsValue.ValueCard3 ){
        console.log('hoi')
        if (UserCardsValue.ValueCard1 === UserCardsValue.ValueCard2) {
            ActionBtnHitShow = true;
            ActionBtnStandShow = true;
            ActionBtnSplitShow = true;
            console.log('hoi')
            if (UserCardsValue.TotalValue === 9 || UserCardsValue.TotalValue === 10 || UserCardsValue.TotalValue === 11) {
                ActionBtnDubbleShow = true;
                console.log('hoi')
            }
        } else if (UserCardsValue.TotalValue === 9 || UserCardsValue.TotalValue === 10 || UserCardsValue.TotalValue === 11) {
            ActionBtnHitShow = true;
            ActionBtnStandShow = true;
            ActionBtnDubbleShow = true;
            console.log('hoi')
        } else {
            ActionBtnHitShow = true;
            ActionBtnStandShow = true;  
            console.log('hoi')
        }
    } else {
        ActionBtnHitShow = true;
        ActionBtnStandShow = true;
        console.log('hoi')
    }
    console.log(ActionBtnDubbleShow,ActionBtnHitShow,ActionBtnSplitShow,ActionBtnStandShow)
    if (ActionBtnHitShow) {
        ClassListAddshow('ActionBtnHit')
        addEventListenerToActionBtn('ActionBtnHit')
    }
    if (ActionBtnStandShow) {
        ClassListAddshow('ActionBtnStand')
        addEventListenerToActionBtn('ActionBtnStand')
    }
    if (ActionBtnDubbleShow) {
        ClassListAddshow('ActionBtnDubble')
        addEventListenerToActionBtn('ActionBtnDubble')
    }
    if (ActionBtnSplitShow) {
        ClassListAddshow('ActionBtnSplit')
        addEventListenerToActionBtn('ActionBtnSplit')
    }
}
function addEventListenerToActionBtn(HtmlElementId) {
    document.getElementById(HtmlElementId).addEventListener('click', (event) => {
        switch (event.target.id) {
            case 'ActionBtnHit':
                ActionHit()
                break;
            case 'ActionBtnStand':
                ActionStand()
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
function TotalValueCheck(TotalValue){
    if(TotalValue > 21) {
        FinalBust()
        return false;
    } else if(TotalValue == 21){
        FinalWin()
        return false;
    } else{
        return true;
    }
}
async function ActionHit() {
    console.log(UserCardsValue);
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
    console.log(UserCardsValue);
    SetHtmlElementContent('UserCardsValue', UserCardsValue.TotalValue);
    if (TotalValueCheck(UserCardsValue.TotalValue)) {
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
    TotalValueCheck();
}
function ActionDubble() {

}
function ActionSplit(){

}
function FinalBust(){
    SetHtmlElementContent('GameResults', 'Bust');
    TimeOut();
    window.location.href = 'http://127.0.0.1:8000/Blackjackpage';
}
function FinalWin(){
    SetHtmlElementContent('GameResults', 'You Win');
    TimeOut();
    window.location.href = 'http://127.0.0.1:8000/Blackjackpage';
}
async function TimeOut() {
    await new Promise((resolve) => setTimeout(resolve, 800));
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