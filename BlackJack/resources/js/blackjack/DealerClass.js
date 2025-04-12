export class Dealer {
    constructor() {
        this.DealerObject;
    }
    CreateObject(cardvalue1,cardvalue2,ACardsNumber1,ACardsNumber2){
        return this.DealerObject = {
            AmouthCards: 2,
            TotalValue: cardvalue1 + cardvalue2,
            Acount: ACardsNumber1 + ACardsNumber2,
            HtmlElementIdValue: "DealerCardsValue",
            ValueCard1: cardvalue1,
            ValueCard2: cardvalue2
        }
    }
    GetObject(){
        return this.DealerObject;
    }
    
};