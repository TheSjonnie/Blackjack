export class Dealer {
    constructor() {
        this.dealerObject;
    }
    createObject(cardValue1, aCardsNumber1) {
        return this.dealerObject = {
            amouthCards: 1,
            totalValue: cardValue1,
            aCount: aCardsNumber1,
            htmlElementIdValue: "dealerCardsValue",
            valueCard1: cardValue1,
        };
    }
    getObject() {
        return this.dealerObject;
    }
    updateObject(updates) {
        console.log("updates ==> ", updates);
        Object.entries(updates).forEach(([property, value]) => {
            this.dealerObject[property] = value;
        });
    }
};