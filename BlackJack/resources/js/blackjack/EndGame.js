import { SetHtmlElementContent } from "./PageUI";
import { TimeOut } from "./helper";
import { UserClass, DealerClass } from "./blackjack";
import { spiltSwitch } from "./MidGame";
import { updateProfile } from "./ApiCalls";
async function GameEnd(Blackjack,deck){
console.log("deck ==> ", deck);
    if (UserClass.SplitCheckFinished()){
        spiltSwitch(deck)
        console.log("spiltSwitch ==> spiltSwitch", );
        return;
    } 
    console.log('next')
    let userObject = UserClass.GetObject();
    console.log("userObject ==> ", userObject);
    let DealerObject = DealerClass.GetObject();
    console.log("DealerObject ==> ", DealerObject);
    console.log("function ==> GameEnd" );
    let result;
    let newCredit = UserClass.getCredits();
    let Won = false
    let Lost = false
    if(Blackjack){
        if (userObject.TotalValue == 21){
            result = "Blackjack";
            newCredit += UserClass.getUserBet() * 2.5;
            Won = true
        } else if(DealerObject.TotalValue == 21){
            result = "You lose";
            Lost = true
        }
    } else if (DealerObject.TotalValue > 21){
        result = "dealer bust";
        newCredit += UserClass.getUserBet() * 2; 
        Won = true
    } else if(userObject.TotalValue > 21){
        result = "you bust";
        Lost = true
    } else if (DealerObject.TotalValue > userObject.TotalValue){
        result = "you lost";
        Lost = true
    } else if (DealerObject.TotalValue == userObject.TotalValue){
        result = "Draw";
        newCredit += UserClass.getUserBet(); 
    } else{
        result = "you won";
        Won = true
        newCredit += UserClass.getUserBet() * 2; 
    }
    SetHtmlElementContent('GameResults', result);
    TimeOut();
    let data = {
        ProfileUpdates: {
            credits: newCredit,
            GamesWon: Won,
            GamesLost: Lost,
        }
    }
    await updateProfile(data);
    window.location.href = 'http://127.0.0.1:8000/Blackjackpage';
}
export {GameEnd}