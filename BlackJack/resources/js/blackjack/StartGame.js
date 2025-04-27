import { classListAddHidden,  } from "./pageUI";
import { pickCard, timeOut, getvalue, displayTotalValue, actionBtnSelection, createElementFunction } from "./helper";
import { gameEnd } from "./endGame";
import { actionHit,actionStand,actionDubble,actionSplit, totalValueCheck } from "./midGame";
import { userClass, dealerClass,setEventlistenerToStartBtn } from "./blackjack";
import { updateCredits } from './apiCalls';
async function startGame() {
    console.log("Funtion ==> startGame")
    if (userClass.getUserBet() == 0){
        setEventlistenerToStartBtn();
        return;
    } 
    let newCredit = userClass.getCredits() - userClass.getUserBet();
    await updateCredits(newCredit);
    userClass.saveCredits(newCredit);
    let deck = createdeck();
    classListAddHidden('chipsBetContainer');
    classListAddHidden('startBtnContainer');

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
    let { cardValue: userCardValue1, aCount: userACardsNumber1 } = getvalue(usercard1, 0);
    let { cardValue: userCardValue2, aCount: userACardsNumber2 } = getvalue(usercard2, 0);

    let userObject = userClass.createObject(userCardValue1,userCardValue2,userACardsNumber1,userACardsNumber2);
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
            (!document.getElementById('actionBtnHit').classList.contains('hidden')) ? classListAddHidden('actionBtnHit') : '';
            (!document.getElementById('actionBtnStand').classList.contains('hidden')) ? classListAddHidden('actionBtnStand') : '';
            (!document.getElementById('actionBtnDubble').classList.contains('hidden')) ? classListAddHidden('actionBtnDubble') : '';
            (!document.getElementById('actionBtnSplit').classList.contains('hidden')) ? classListAddHidden('actionBtnSplit') : '';
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
    let ranks = ['10', 'J', 'Q', 'K', '10','J','Q','K','10','J','Q','K','10']; // voor het testen met split
    // let ranks = ['2', '3', '4', '5', 'A','A','A','A','A','A','A','A','A']; // voor het testen met A
    suits.forEach((type) => {
        ranks.forEach((number) => {
            deck.push(`${type}_${number}`);
        });
    });
    return deck;
}

export {startGame};