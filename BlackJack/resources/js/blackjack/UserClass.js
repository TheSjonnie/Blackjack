export class User {
    constructor() {
        this.UserObject;
    }
    CreateObject(cardvalue1,cardvalue2,ACardsNumber1,ACardsNumber2){
        return this.UserObject = {
            AmouthCards: 2,
            TotalValue: cardvalue1 + cardvalue2,
            Acount: ACardsNumber1 + ACardsNumber2,
            HtmlElementIdValue: "UserCardsValue",
            ValueCard1: cardvalue1,
            ValueCard2: cardvalue2
        }
    }
    GetObject(){
        return this.UserObject;
    }
    UpdateObject(updates){
        console.log(updates);
        Object.entries(updates).forEach(([property, value]) => {
            this.UserObject[property] = value;
        });
    }
};