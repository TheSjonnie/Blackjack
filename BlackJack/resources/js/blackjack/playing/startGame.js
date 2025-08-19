import { classListAddHidden,  } from "./pageUI";
import { pickCard, timeOut, getvalue, displayTotalValue, actionBtnSelection, createElementFunction } from "./helper";
import { gameEnd } from "./endGame";
import { actionHit,actionStand,actionDubble,actionSplit, totalValueCheck } from "./midGame";
import { Dealer } from "../dealerClass";
import { UserPlaying } from "./userClassPlaying";
let dealerClass;
let userClass;
if (!window._blackjackInitialized){
    window._blackjackInitialized = true;
    document.addEventListener('DOMContentLoaded', async () => {
        console.log("Funtion ==> startGame")
        dealerClass = new Dealer();
        userClass = new UserPlaying(window.credits, window.totalBetValue)
        console.log("🚀 ~ document.addEventListener ~ window.credits, window.totalBetValue:", window.credits, window.totalBetValue)
        console.log("🚀 ~ document.addEventListener ~ userClass:", userClass)
    
        userClass.saveCredits(window.credits);
        let deck = createdeck();
    
        let usercard1 = await pickCard('userCardsImageContainer',deck);
        await timeOut();
    
        let dealercard1 = await pickCard('dealerCardsImageContainer',deck);
        await timeOut();
    
        let usercard2 = await pickCard('userCardsImageContainer',deck);
        await timeOut();
        createElementFunction({
            type: "img",
            className: "CardsImgSize",
            alt: 'blank card',
            src: "http://127.0.0.1:8000/image/DeckCards/back_light.png",
            parentElement: document.getElementById('dealerCardsImageContainer'),
            styles: {
                position: "absolute",
                left: 3,
                rotate: 355
            },
            category: "cards"
        }
        );
        let { cardValue: dealerCardValue1, aCount: dealerACardsNumber1 } = getvalue(dealercard1, 0);
        let { cardValue: userCardValue1, aCount: userACardsNumber1, cardStringValue: userCardStingValue1 } = getvalue(usercard1, 0);
        let { cardValue: userCardValue2, aCount: userACardsNumber2,cardStringValue: userCardStingValue2  } = getvalue(usercard2, 0);
        console.log(userCardValue1,userCardValue2,userACardsNumber1,userACardsNumber2,userCardStingValue1,userCardStingValue2)
        let userObject = userClass.createObject(userCardValue1,userCardValue2,userACardsNumber1,userACardsNumber2,userCardStingValue1,userCardStingValue2);
        console.log("🚀 ~ startGame ~ userObject:", {...userObject})
        let dealerObject = dealerClass.createObject(dealerCardValue1,dealerACardsNumber1);
    
        if (dealerObject.totalValue == 21){
            gameEnd(true);
            return
        } else if (userObject.totalValue == 21){
            gameEnd(true)
            return
        }
    
        addEventListenerToActionBtn(deck);
        totalValueCheck(userObject, deck)
        displayTotalValue('dealerCardsValue', dealerObject)
        displayTotalValue('userCardsValue', userObject);
        actionBtnSelection(userObject)
    },{ once: true })
}

function addEventListenerToActionBtn(deck) {
    console.log("function ==> addEventListenerToActionBtn" );
    let btns = [
        { id: 'actionBtnHit', func: actionHit },
        { id: 'actionBtnStand', func: actionStand },
        { id: 'actionBtnDubble', func: actionDubble },
        { id: 'actionBtnSplit', func: actionSplit },
    ]
    btns.forEach(btn => {
        document.getElementById(btn.id).addEventListener('click', () => {
            (!document.getElementById('actionBtnHit').classList.contains('hidden')) ? classListAddHidden('actionBtnHit', 'invisible') : '';
            (!document.getElementById('actionBtnStand').classList.contains('hidden')) ? classListAddHidden('actionBtnStand', 'invisible') : '';
            (!document.getElementById('actionBtnDubble').classList.contains('hidden')) ? classListAddHidden('actionBtnDubble', 'hidden') : '';
            (!document.getElementById('actionBtnSplit').classList.contains('hidden')) ? classListAddHidden('actionBtnSplit', 'hidden') : '';
            btn.func(deck)
        })
    });

}
function createdeck() {
    console.log("function ==> createdeck", );
    let deck = [];
    let suits = ['clubs', 'diamonds', 'hearts', 'spades'];
    // let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    // let ranks = ['10', 'J', 'Q', 'K', 'A','A','A','A','A','A','A','A','A']; // voor het testen met A
    // let ranks = ['10', 'J', 'Q', 'K', '10','J','Q','K','10','J','Q','K','10']; // voor het testen met split
    let ranks = ['A', 'A', 'A', 'A', 'A','A','A','A','A','A','A','A','A']; // voor het testen met A
    suits.forEach((type) => {
        ranks.forEach((number) => {
            deck.push(`${type}_${number}`);
        });
    });
    return deck;
}
export {userClass, dealerClass};