import { User } from "./userClass";
import { Dealer } from "./dealerClass";
import { setEventListenersToChips } from "./pageUI";
import { getCredits, startGameFetch } from "./apiCalls";
let userClass;
let dealerClass;
async function setupGame() {
    try {
        userClass = new User(await getCredits());
        dealerClass = new Dealer();
        return;
    } catch (err) {
        console.error(err);
    }
} 
function setEventlistenerToStartBtn() {
    document.getElementById("startGame").addEventListener(
        "click",
        () => {
            startGameFetch(userClass.getObjectBet());
        },
        { once: true }
    );
}
if (!window._blackjackInitialized) {
    window._blackjackInitialized = true;
    document.addEventListener("DOMContentLoaded", async () => {
        await setupGame();
        setEventlistenerToStartBtn();
        setEventListenersToChips();
    });
}
export { userClass, dealerClass, setEventlistenerToStartBtn };
