import { SetHtmlElementContent } from "./PageUI";
import { TimeOut } from "./helper";
import { UserClass, DealerClass } from "./blackjack";
function GameEnd(Blackjack){
    let userObject = UserClass.GetObject();
    let DealerObject = DealerClass.GetObject();
    console.log("function ==> GameEnd" );
    let result;
    if(Blackjack){
        if (userObject.TotalValue == 21){
            result = "Blackjack";
        } else if(DealerObject.TotalValue == 21){
            result = "You lose";
        }
    } else if (DealerObject.TotalValue > 21){
        result = "dealer bust";
    } else if(userObject.TotalValue > 21){
        result = "you bust";
    } else if (DealerObject.TotalValue > userObject.TotalValue){
        result = "you lost";
    } else if (DealerObject.TotalValue == userObject.TotalValue){
        result = "Draw";
    } else{
        result = "you won";
    }
    SetHtmlElementContent('GameResults', result);
    TimeOut();
    // window.location.href = 'http://127.0.0.1:8000/Blackjackpage';
}
export {GameEnd}