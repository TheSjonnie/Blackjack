import { GameEnd } from './EndGame';
import { CreateElement,PickCard,Getvalue,DisplayTotalValue,ActionBtnSelection, TimeOut } from './helper';
import { SetHtmlElementContent, ClassListAddHidden, ClassListAddshow } from './PageUI';
import { UserClass, DealerClass } from "./blackjack";
async function ActionHit(deck) {
    console.log("Funtion ==> actionhit");
    let UserObject = UserClass.GetObject();
    console.log("UserObject ==> ", UserObject);
    let parentContainer = (UserObject.HtmlElementIdValue == 'UserCardsValue2') ? 'userCardsImageContainer2' : 'userCardsImageContainer';
    let card = await PickCard(parentContainer,deck);
    let NextCardsNumber = UserObject.AmouthCards+1
    let {CardValue , Acount} = Getvalue(card, UserObject.Acount);
    let NewTotalValue = UserObject.TotalValue + CardValue;
    UserClass.UpdateObject({
        TotalValue: NewTotalValue,
        AmouthCards: NextCardsNumber,
        Acount: Acount,
        [`ValueCard${NextCardsNumber}`]: CardValue,
    })
    UserObject = UserClass.GetObject()
    DisplayTotalValue(UserObject.HtmlElementIdValue, UserObject);
    if (TotalValueCheck(UserObject,deck)) {
        ActionBtnSelection();
    }
}
async function ActionStand(deck){
console.log("deck ==> ", deck);
    console.log("Funtion ==> ActionStand");
    if (UserClass.SplitCheckFinished()){
        spiltSwitch(deck)
        console.log("spiltSwitch ==> stand", UserClass.SplitCheckFinished);
        return;
    } 
    let DealerObject = DealerClass.GetObject();
    while (DealerObject.TotalValue < 17) {
        let card = await PickCard('DealerCardsImageContainer',deck);
        let NewAmouthCards = DealerObject.AmouthCards+1
        let {CardValue: CardValue} = Getvalue(card, DealerObject.Acount);
        let NewTotalValue = DealerObject.TotalValue + CardValue;
        DealerObject = {
            ...DealerObject,
            TotalValue: NewTotalValue,
            AmouthCards: NewAmouthCards,
            [`ValueCard${NewAmouthCards}`]: CardValue,
        };
        SetHtmlElementContent('DealerCardsValue', DealerObject.TotalValue);
        await TimeOut()
    }
    GameEnd(false,deck);
}
async function ActionDubble(deck) {
    console.log("Funtion ==> ActionDubble");
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
    UserObject = UserClass.GetObject()
    DisplayTotalValue(UserObject.HtmlElementIdValue, UserObject);
    // await new Promise((resolve) => setTimeout(resolve, 800));
    TotalValueCheck(UserObject,deck);
    ActionStand(deck);
}
async function ActionSplit(deck){
    console.log('Function ==> ActionSplit')
    document.getElementById('userCardsImageContainer2').classList.replace('hidden', 'flex');
    document.getElementById('UserCardsValue2').classList.replace('hidden', 'flex');
    let SecondCards = document.getElementById('userCardsImageContainer').children[1]
    SecondCards.classList.remove('absolute','left-3');
    SecondCards.classList.replace('rotate-355','rotate-345');
    document.getElementById('userCardsImageContainer2').appendChild(SecondCards);
    let UserObject = UserClass.GetObject();
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
    UserClass.SplitStart(UserObject1,UserObject2)
    console.log(UserClass.GetObject())
    ActionHit(deck);
}
async function spiltSwitch(deck){
console.log("function ==> spiltSwitch");
    UserClass.SplitSwitch();
    ActionHit(deck);
}
function TotalValueCheck(Object,deck){
    console.log("function => TotValueCheck")
    if(Object.TotalValue > 21) {
        if (Object.Acount > 0){
            Object.Acount--
            Object.TotalValue -= 10
            console.log("Object ==> ", Object);
            SetHtmlElementContent(Object.HtmlElementIdValue, Object.TotalValue);
            return true;
        }
        GameEnd(false,deck)
        console.log("return ==> ", 'false');
        return false;
    } else if(Object.TotalValue == 21){
        GameEnd(false,deck)
        console.log("return ==> ", "false");
        return false;
    } else{
        console.log("return ==> ", "true");
        return true;
    }
}
export { ActionHit, ActionStand, ActionSplit, ActionDubble}






export { CreateElement, spiltSwitch };