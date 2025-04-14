export class Dealer {
    constructor() {
        this.DealerObject;
    }
    CreateObject(cardvalue1,ACardsNumber1){
        return this.DealerObject = {
            AmouthCards: 1,
            TotalValue: cardvalue1,
            Acount: ACardsNumber1,
            HtmlElementIdValue: "DealerCardsValue",
            ValueCard1: cardvalue1,
        }
    }
    GetObject(){
        return this.DealerObject;
    }
    UpdateObject(updates){
        console.log("updates ==> ", updates);
            Object.entries(updates).forEach(([property, value]) => {
                this.DealerObject[property] = value;
            });
        }
    
};