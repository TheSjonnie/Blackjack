import { ClassListAddHidden } from "./PageUI";
import { PickCard, TimeOut, Getvalue, DisplayTotalValue, ActionBtnSelection,showBlackcard } from "./helper";
import { GameEnd } from "./EndGame";
import { ActionHit,ActionStand,ActionDubble,ActionSplit } from "./MidGame";
import { UserClass, DealerClass } from "./blackjack";
import { updateCredits } from './ApiCalls';
async function StartGame() {
    if (UserClass.getUserBet() == 0) return;
    let newCredit = UserClass.getCredits() - UserClass.getUserBet();
    console.log("newCredit ==> ", newCredit);
    await updateCredits(newCredit);
    UserClass.saveCredits(newCredit);
    let deck = createdeck();
    console.log("Funtion ==> startGame")
    ClassListAddHidden('ChipsbetContainer');
    ClassListAddHidden('StartBtnContainer');

    let Usercard1 = await PickCard('userCardsImageContainer',deck);
    await TimeOut();

    let Dealercard1 = await PickCard('DealerCardsImageContainer',deck);
    await TimeOut();

    let Usercard2 = await PickCard('userCardsImageContainer',deck);
    await TimeOut();
    showBlackcard('DealerCardsImageContainer');
    // let Dealercard2 = await PickCard('DealerCardsImageContainer', deck);

    // let { CardValue: Dealercardvalue2, Acount: DealerACardsNumber2 } = Getvalue(Dealercard2, 0);
    let { CardValue: Dealercardvalue1, Acount: DealerACardsNumber1 } = Getvalue(Dealercard1, 0);
    let { CardValue: Usercardvalue1, Acount: UserACardsNumber1 } = Getvalue(Usercard1, 0);
    let { CardValue: Usercardvalue2, Acount: UserACardsNumber2 } = Getvalue(Usercard2, 0);

    let UserObject = UserClass.CreateObject(Usercardvalue1,Usercardvalue2,UserACardsNumber1,UserACardsNumber2);
    console.log("UserObject ==> ", UserObject);

    let DealerObject = DealerClass.CreateObject(Dealercardvalue1,DealerACardsNumber1);
    console.log("DealerObject ==> ", DealerObject);
    if (DealerObject.TotalValue == 21){
        GameEnd(true);
        return
    } else if (UserObject.TotalValue ==21){
        GameEnd(true)
        return
    }

    addEventListenerToActionBtn(deck);
    DisplayTotalValue('DealerCardsValue', DealerObject)
    DisplayTotalValue('UserCardsValue', UserObject);
    ActionBtnSelection(UserObject)
}
function addEventListenerToActionBtn(deck) {
    let Btns = [
        { id: 'ActionBtnHit', func: ActionHit },
        { id: 'ActionBtnStand', func: ActionStand },
        { id: 'ActionBtnDubble', func: ActionDubble },
        { id: 'ActionBtnSplit', func: ActionSplit },
    ]
    Btns.forEach(Btn => {
        document.getElementById(Btn.id).addEventListener('click', () => {
            (!document.getElementById('ActionBtnHit').classList.contains('hidden')) ? ClassListAddHidden('ActionBtnHit') : '';
            (!document.getElementById('ActionBtnStand').classList.contains('hidden')) ? ClassListAddHidden('ActionBtnStand') : '';
            (!document.getElementById('ActionBtnDubble').classList.contains('hidden')) ? ClassListAddHidden('ActionBtnDubble') : '';
            (!document.getElementById('ActionBtnSplit').classList.contains('hidden')) ? ClassListAddHidden('ActionBtnSplit') : '';
            Btn.func(deck)
        })
    });

}
function createdeck() {
    let deck = [];
    let suits = ['clubs', 'diamonds', 'hearts', 'spades'];
    let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    suits.forEach((type) => {
        ranks.forEach((number) => {
            deck.push(`${type}_${number}`);
        });
    });
    return deck;
}

export {StartGame};