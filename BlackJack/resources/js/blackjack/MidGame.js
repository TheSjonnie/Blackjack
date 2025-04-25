import { gameEnd } from './endGame';
import { pickCard,getvalue,displayTotalValue,actionBtnSelection, timeOut } from './helper';
import { setHtmlElementContent, classListAddShow } from './pageUI';
import { userClass, dealerClass } from "./blackjack";
import { updateCredits } from './apiCalls';
async function actionHit(deck) {
    console.log("Funtion ==> actionhit");
    let userObject = userClass.getObject();
    let parentContainer = (userObject.htmlElementIdValue == 'userCardsValue2') ? 'userCardsImageContainer2' : 'userCardsImageContainer';
    let card = await pickCard(parentContainer,deck);
    let nextCardsNumber = userObject.amouthCards+1
    let {cardValue , aCount} = getvalue(card, userObject.aCount);
    let newTotalValue = userObject.totalValue + cardValue;
    userClass.updateObject({
        totalValue: newTotalValue,
        amouthCards: nextCardsNumber,
        aCount: aCount,
        [`valueCard${nextCardsNumber}`]: cardValue,
    })
    userObject = userClass.getObject()
    displayTotalValue(userObject.htmlElementIdValue, userObject);
    if (totalValueCheck(userObject,deck)) {
        actionBtnSelection();
    }
}
async function actionStand(deck){
    console.log("Funtion ==> actionStand");
    if (userClass.splitCheckFinished()){
        spiltSwitch(deck)
        return;
    }
    let userObject = userClass.getObject();
    if (userObject.aCount > 0){
        setHtmlElementContent(userObject.htmlElementIdValue, userObject.totalValue);
    }
    let dealerObject = dealerClass.getObject();
    while (dealerObject.totalValue < 17) {
        let card = await pickCard('dealerCardsImageContainer',deck);
        let nextCardsNumber = dealerObject.amouthCards + 1
        let {cardValue , aCount} = getvalue(card, dealerObject.aCount);
        let newTotalValue = dealerObject.totalValue + cardValue;
        dealerClass.updateObject({
            totalValue: newTotalValue,
            amouthCards: nextCardsNumber,
            aCount: aCount,
            [`ValueCard${nextCardsNumber}`]: cardValue,
        })
        dealerObject = dealerClass.getObject()
        totalValueCheck(dealerObject, deck)
        displayTotalValue(dealerObject.htmlElementIdValue, dealerObject);
        await timeOut()
    }
    gameEnd(false,deck);
}
async function actionDubble(deck) {
    console.log("Funtion ==> actionDubble");
    dubbleBet(true);
    let userObject = userClass.getObject();
    let card = await pickCard('userCardsImageContainer',deck);
    let nextCardsNumber = userObject.amouthCards+1
    let {cardValue , aCount} = getvalue(card, userObject.aCount);
    let newTotalValue = userObject.totalValue + cardValue;
    userClass.updateObject({
        totalValue: newTotalValue,
        amouthCards: nextCardsNumber,
        aCount: aCount,
        [`ValueCard${nextCardsNumber}`]: cardValue,
    })
    userObject = userClass.getObject()
    displayTotalValue(userObject.htmlElementIdValue, userObject);
    // await new Promise((resolve) => settimeout(resolve, 800));
    totalValueCheck(userObject,deck);
    actionStand(deck);
}
async function actionSplit(deck){
    console.log('Function ==> actionSplit')
    
    document.getElementById('userCardsImageContainer2').classList.replace('hidden', 'flex');
    document.getElementById('userCardsValue2').classList.replace('hidden', 'flex');
    let secondCards = document.getElementById('userCardsImageContainer').children[1]
    secondCards.classList.remove('absolute','left-3');
    secondCards.classList.replace('rotate-355','rotate-345');
    document.getElementById('userCardsImageContainer2').appendChild(secondCards);
    let userObject = userClass.getObject();
    let aCount = (userObject.aCount == 2) ? 1 : 0;
    let userObject1 = {
        aCount: aCount,
        results: false,
        amouthCards: 1,
        htmlElementIdValue: 'userCardsValue',
        totalValue: userObject.valueCard1,
        valueCard1: userObject.valueCard1,
    }
    let userObject2 = {
        aCount: aCount,
        amouthCards: 1,
        htmlElementIdValue: 'userCardsValue2',
        totalValue: userObject.valueCard2,
        valueCard1: userObject.valueCard2,
    }
    dubbleBet(true);
    setHtmlElementContent(['userCardsValue','userCardsValue2'], userObject1.totalValue);
    classListAddShow('actionBtnHit')
    classListAddShow('actionBtnStand')
    userClass.splitStart(userObject1,userObject2)
    actionHit(deck);
}
async function dubbleBet(splitCheck){
    console.log("function ==> dubbleBet", );
    let userObject = userClass.getObject();
    let copyedContainer = document.getElementById('userChipBetContainer').cloneNode(true);
    copyedContainer.id = 'userChipBetContainer2';
    document.getElementById('userChipBetHeadContainer').appendChild(copyedContainer);
    document.getElementById('bet').innerHTML = (userObject.bet * 2)
    let newCredit = userClass.getCredits() - userClass.getUserBet();
    userClass.saveCredits(newCredit);
    userClass.updateObject({
        bet: userObject.bet * 2
    })
    
    await updateCredits(newCredit);
    userClass.saveCredits(newCredit);
    document.getElementById('credits').innerHTML = newCredit
}
async function spiltSwitch(deck){
    console.log("function ==> spiltSwitch");
    userClass.splitSwitch();
    actionHit(deck);
}
function totalValueCheck(object,deck){
    console.log("function => TotValueCheck")
    if(object.totalValue > 21) {
        if (object.aCount > 0){
            object.aCount--
            object.totalValue -= 10
            setHtmlElementContent(object.htmlElementIdValue, object.totalValue);
            return true;
        }
        gameEnd(false,deck)
        return false;
    } else if(object.totalValue == 21){
        gameEnd(false,deck)
        return false;
    } else{
        return true;
    }
}
export { spiltSwitch, actionHit, actionStand, actionSplit, actionDubble, totalValueCheck};