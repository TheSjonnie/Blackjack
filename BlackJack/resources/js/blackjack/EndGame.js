import { setHtmlElementContent } from "./pageUI";
import { timeOut } from "./helper";
import { userClass, dealerClass } from "./blackjack";
import { spiltSwitch } from "./midGame";
import { updateProfile } from "./apiCalls";
async function gameEnd(Blackjack,deck){
    console.log("function ==> gameEnd" );
    if (userClass.splitCheck()){
        if (userClass.splitCheckFinished()){
            spiltSwitch(deck)
            let {won} = resultsValidation(Blackjack)
            let results = (won) ? 'won' : 'lost';
            userClass.updateObject({
                result: results,
            })
        } else{
            let userObject1 = userClass.getObject1()
        }
    }
    let {won,lost,result,newCredit} = resultsValidation(Blackjack)
    console.log({won,lost,result,newCredit})
    setHtmlElementContent('gameResults', result);
    timeOut();
    let data = {
        profileUpdates: {
            credits: newCredit,
            Gameswon: won,
            Gameslost: lost,
        }
    }
    await updateProfile(data);
    // window.location.href = 'http://127.0.0.1:8000/Blackjackpage';
}
function resultsValidation(Blackjack){
    let won = false
    let lost = false
    let result;
    let userObject = userClass.getObject();
    let dealerObject = dealerClass.getObject();
    let newCredit = userClass.getCredits();
    if(Blackjack){
        if (userObject.totalValue == 21){
            result = "Blackjack";
            newCredit += userClass.getUserBet() * 2.5;
            won = true
        } else if(dealerObject.totalValue == 21){
            result = "You lose";
            lost = true
        }
    } else if(userObject.totalValue > 21){
        result = "you bust";
        lost = true
    } else if (dealerObject.totalValue > 21){
        result = "dealer bust";
        newCredit += userClass.getUserBet() * 2; 
    }  else if (dealerObject.totalValue > userObject.totalValue){
        result = "you lost";
        lost = true
    } else if (dealerObject.totalValue == userObject.totalValue){
        result = "Draw";
        newCredit += userClass.getUserBet(); 
    } else{
        result = "you won";
        won = true
        newCredit += userClass.getUserBet() * 2; 
    }
    return {won,lost,result,newCredit}
}
export {gameEnd}