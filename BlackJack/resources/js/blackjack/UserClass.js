export class User {
    constructor(credits) {
        this.userObject;
        this.shouldContinue = false;
        this.split = false;
        this.userBet = 0;
        this.userCredits = credits;
        this.chipCount = 1;
    }
    createObject(cardValue1, cardValue2, aCardsNumber1, aCardsNumber2) {
        return (this.userObject = {
            amouthCards: 2,
            totalValue: cardValue1 + cardValue2,
            aCount: aCardsNumber1 + aCardsNumber2,
            htmlElementIdValue: "userCardsValue",
            bet: this.userBet,
            valueCard1: cardValue1,
            valueCard2: cardValue2,
        });
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
    createObjectBet(betValue, imgPath) {
        this.betObject = {
            'chip': {
                value: betValue,
                src: imgPath,
                left: 0,
                top: 0,
                rotate: 0,
                position: 'relative',
            },
            
        };
    }
    getObjectBet() {
        return this.betObject;
    }
    updateObjectBet(betValue, imgPath, left, top, rotate) {
        this.chipCount++
        this.betObject[`chip${this.chipCount}`] = {
                value: betValue,
                src: imgPath,
                left: left,
                top: top,
                rotate: rotate,
                position: 'absolute',
        };
    }
    getUserBet() {
        return this.userBet;
    }
    saveUserBet(bet) {
        this.userBet = bet;
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
