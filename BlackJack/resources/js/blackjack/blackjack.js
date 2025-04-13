import { StartGame } from './StartGame';
import { User } from './UserClass';
import { Dealer } from './DealerClass';
import { getCredits } from './ApiCalls';
let UserClass = null;
let DealerClass = null;
async function setupGame() {
    try {
        UserClass = new User(await getCredits())
        DealerClass = new Dealer()
        console.log("UserClass ==> ", UserClass);
        console.log("DealerClass ==> ", DealerClass);
        return 
    } catch (err) {
        console.error(err)
    }
}

document.addEventListener('DOMContentLoaded', async () => {
    await setupGame();
    document.getElementById('StartGame').addEventListener('click', () => {
        StartGame();
    });
})

export {UserClass, DealerClass}