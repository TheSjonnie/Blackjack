import { GameEnd } from './EndGame';
import { CreateElement,PickCard,Getvalue,DisplayTotalValue,ActionBtnSelection } from './helper';
import { SetHtmlElementContent, ClassListAddHidden, ClassListAddshow } from './PageUI';
import { UserClass, DealerClass } from "./blackjack";
async function ActionHit(deck) {
    console.log("Funtion ==> actionhit");
    (!document.getElementById('ActionBtnHit').classList.contains('hidden')) ? ClassListAddHidden('ActionBtnHit') : '';
    (!document.getElementById('ActionBtnStand').classList.contains('hidden')) ? ClassListAddHidden('ActionBtnStand') : '';
    (!document.getElementById('ActionBtnDubble').classList.contains('hidden')) ? ClassListAddHidden('ActionBtnDubble') : '';
    (!document.getElementById('ActionBtnSplit').classList.contains('hidden')) ? ClassListAddHidden('ActionBtnSplit') : '';
    let UserObject = UserClass.GetObject();
    let card = await PickCard('userCardsImageContainer',deck);
    let NextCardsNumber = UserObject.AmouthCards+1
    let {CardValue , Acount} = Getvalue(card, UserObject.Acount);
    let NewTotalValue = UserObject.TotalValue + CardValue;
    UserClass.UpdateObject({
        TotalValue: NewTotalValue,
        AmouthCards: NextCardsNumber,
        Acount: Acount,
        [`ValueCard${NextCardsNumber}`]: CardValue,
    })
    console.log("UserCardsValue ==> ", UserClass.GetObject());
    DisplayTotalValue('UserCardsValue', UserObject);
    if (TotalValueCheck(UserObject)) {
        ActionBtnSelection();
    }
}
async function ActionStand(deck,DealerCardsObject){
    console.log("Funtion ==> ActionStand");
    (!document.getElementById('ActionBtnHit').classList.contains('hidden')) ? ClassListAddHidden('ActionBtnHit') : '';
    (!document.getElementById('ActionBtnStand').classList.contains('hidden')) ? ClassListAddHidden('ActionBtnStand') : '';
    (!document.getElementById('ActionBtnDubble').classList.contains('hidden')) ? ClassListAddHidden('ActionBtnDubble') : '';
    (!document.getElementById('ActionBtnSplit').classList.contains('hidden')) ? ClassListAddHidden('ActionBtnSplit') : '';
    while (DealerCardsObject.TotalValue < 17) {
        let card = await PickCard('DealerCardsImageContainer',deck);
        let NewAmouthCards = DealerCardsObject.AmouthCards+1
        let {CardValue: CardValue} = Getvalue(card, DealerCardsObject.Acount);
        let NewTotalValue = DealerCardsObject.TotalValue + CardValue;
        DealerCardsObject = {
            ...DealerCardsObject,
            TotalValue: NewTotalValue,
            AmouthCards: NewAmouthCards,
            [`ValueCard${NewAmouthCards}`]: CardValue,
        };
        SetHtmlElementContent('DealerCardsValue', DealerCardsObject.TotalValue);
        await TimeOut();
    }
    GameEnd(false,DealerCardsObject,UserObject);
}
async function ActionDubble() {
    console.log("Funtion ==> ActionDubble");
    (!document.getElementById('ActionBtnHit').classList.contains('hidden')) ? ClassListAddHidden('ActionBtnHit') : '';
    (!document.getElementById('ActionBtnStand').classList.contains('hidden')) ? ClassListAddHidden('ActionBtnStand') : '';
    (!document.getElementById('ActionBtnDubble').classList.contains('hidden')) ? ClassListAddHidden('ActionBtnDubble') : '';
    (!document.getElementById('ActionBtnSplit').classList.contains('hidden')) ? ClassListAddHidden('ActionBtnSplit') : '';
    let card = await PickCard('userCardsImageContainer');
    let NextCardsNumber = UserObject.AmouthCards+1
    let {CardValue , Acount} = Getvalue(card, UserObject.Acount);
    let NewTotalValue = UserObject.TotalValue + CardValue;
    UserObject = {
        ...UserObject,
        TotalValue: NewTotalValue,
        AmouthCards: NextCardsNumber,
        Acount: Acount,
        [`ValueCard${NextCardsNumber}`]: CardValue,
    };
    console.log("UserCardsValue ==> ", UserObject);
    DisplayTotalValue('UserCardsValue', UserObject);
    await new Promise((resolve) => setTimeout(resolve, 800));
    TotalValueCheck(UserObject,DealerCardsObject,UserObject);
    ActionStand();
}
function ActionSplit(){
    console.log('Function ==> ActionSplit')
    document.getElementById('userCardsImageContainer2').classList.replace('hidden', 'flex');
    document.getElementById('UserCardsValue2').classList.replace('hidden', 'flex');
    let SecondCards = document.getElementById('userCardsImageContainer').children[1]
    SecondCards.classList.remove('absolute','left-3');
    SecondCards.classList.replace('rotate-355','rotate-345');
    document.getElementById('userCardsImageContainer2').appendChild(SecondCards);
    let Acount = (UserObject.Acount == 2) ? 1 : 0;
    let UserObject1 = {
        Acount: Acount,
        AmouthCards: 1,
        HtmlElementIdValue: 'UserCardsValue',
        TotalValue: UserObject.ValueCard1,
        ValueCard1: UserObject.ValueCard1,
    }
    let UserObject2 = {
        Acount: Acount,
        AmouthCards: 1,
        HtmlElementIdValue: 'UserCardsValue2',
        TotalValue: UserObject.ValueCard2,
        ValueCard1: UserObject.ValueCard2,
    }
    SetHtmlElementContent(['UserCardsValue','UserCardsValue2'], UserObject1.TotalValue);
    ClassListAddshow('ActionBtnHit')
    ClassListAddshow('ActionBtnStand')
}
function TotalValueCheck(Object){
    console.log("function => TotValueCheck")
    if(Object.TotalValue > 21) {
        if (Object.Acount > 0){
            Object.Acount--
            Object.TotalValue -= 10
            console.log("Object ==> ", Object);
            SetHtmlElementContent(Object.HtmlElementIdValue, Object.TotalValue);
            return true;
        }
        GameEnd(false)
        console.log("return ==> ", 'false');
        return false;
    } else if(Object.TotalValue == 21){
        GameEnd(false)
        console.log("return ==> ", "false");
        return false;
    } else{
        console.log("return ==> ", "true");
        return true;
    }
}
export { ActionHit, ActionStand, ActionSplit, ActionDubble}






export { CreateElement };