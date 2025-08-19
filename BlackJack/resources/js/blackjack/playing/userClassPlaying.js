export class UserPlaying {
    constructor(credits, userBet) {
        this.userObject;
        this.shouldContinue = false;
        this.split = false;
        this.userCredits = credits;
        this.userBet = userBet;
    }
    createObject(cardValue1, cardValue2, aCardsNumber1, aCardsNumber2,userCardStingValue1,userCardStingValue2) {
        return (this.userObject = {
            amouthCards: 2,
            totalValue: cardValue1 + cardValue2,
            aCount: aCardsNumber1 + aCardsNumber2,
            htmlElementIdValue: "userCardsValue",
            bet: this.userBet,
            valueCard1: cardValue1,
            valueCard2: cardValue2,
            stringValueCard1: userCardStingValue1,
            stringValueCard2: userCardStingValue2,
        });
    }
    getUserBet(){
        return this.userBet
    }
    getObject() {
        return this.userObject;
    }
    getObject1() {
        return this.userObject1;
    }
    getObject2() {
        return this.userObject2;
    }
    updateObject(updates) {
        console.log("updates ==> ", updates);
        Object.entries(updates).forEach(([property, value]) => {
            this.userObject[property] = value;
        });
    }
    getCredits() {
        return this.userCredits;
    }
    saveCredits(newCredits) {
        this.userCredits = newCredits;
    }
    splitStart(userObject1, userObject2) {
        this.shouldContinue = true;
        this.split = true;
        this.userObject2 = userObject2;
        this.userObject1 = userObject1;
        this.userObject = userObject1;
    }
    splitCheckFinished() {
        return this.shouldContinue;
    }
    splitCheck() {
        return this.split;
    }
    splitSwitch() {
        this.userObject = this.userObject2;
        console.log(this.userObject);
        this.shouldContinue = false;
    }
}
