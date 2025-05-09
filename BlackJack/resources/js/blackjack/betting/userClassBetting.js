export class UserBetting {
    constructor(credits) {
        this.userBet = 0;
        this.userCredits = credits;
        this.chipCount = 1;
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
    updateUserBet(bet) {
        this.userBet = parseInt(this.userBet) + parseInt(bet)
    }
    getCredits(){
        return this.userCredits;
    }
    updateCredits(newCredit){
        this.userCredits = parseInt(this.userCredits) - parseInt(newCredit);
    }
}
