import { setHtmlElementContent } from "./pageUI";
import { timeOut } from "./helper";
import { userClass, dealerClass } from './StartGame';
import { spiltSwitch } from "./midGame";
import { updateProfile } from "../apiCalls";
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
            let userObject1 = userClass.getObject1();
            let dealerObject = dealerClass.getObject();
            let credits = userClass.getCredits();
            let {won: won1,lost: lost1,draw: draw, result: result1,newCredit} = resultsValidation(Blackjack, userObject1.totalValue, dealerObject.totalValue, credits)
            let userObject2 = userClass.getObject2();
            let {won: won2,lost: lost2,draw: draw2,result: result2,newCredit: finalCredit} = resultsValidation(Blackjack, userObject2.totalValue, dealerObject.totalValue, newCredit)
            setHtmlElementContent('gameResults', result1);
            setHtmlElementContent('gameResults2', result2);
            timeOut();
            let data = {
                profileUpdates: {
                    credits: finalCredit,
                    gamesWon: won1 + won2,
                    gamesLost: lost1 + lost2,
                    gamesDraw: draw + draw2,
                }
            }
            await updateProfile(data);
            
        }
    } else{
        let userObject = userClass.getObject();
        let dealerObject = dealerClass.getObject();
        let {won,lost,draw,result,newCredit} = resultsValidation(Blackjack, userObject.totalValue, dealerObject.totalValue, userClass.getCredits())
        setHtmlElementContent('gameResults', result);
        timeOut();
        let data = {
            profileUpdates: {
                credits: newCredit,
                gamesWon: won,
                gamesLost: lost,
                gamesDraw: draw
            }
        }
        await updateProfile(data);
    }

}
function resultsValidation(Blackjack,userTotalValue, dealerTotalValue, newCredit){
    let won = 0
    let lost = 0
    let draw = 0
    let result;
    if(Blackjack){
        if (userTotalValue == 21){
            result = "Blackjack";
            newCredit += userClass.getUserBet() * 2.5;
            won = 1
        } else if(dealerTotalValue == 21){
            result = "You lose";
            lost = 1
        }
    } else if(userTotalValue > 21){
        result = "you bust";
        lost = 1
    } else if (dealerTotalValue > 21){
        result = "dealer bust";
        newCredit += userClass.getUserBet() * 2; 
    }  else if (dealerTotalValue > userTotalValue){
        result = "you lost";
        lost = 1
    } else if (dealerTotalValue == userTotalValue){
        result = "Draw";
        draw = 1
        newCredit += userClass.getUserBet(); 
    } else{
        result = "you won";
        won = 1
        newCredit += userClass.getUserBet() * 2; 
    }
    return {won,lost,draw,result,newCredit}
}
export {gameEnd}