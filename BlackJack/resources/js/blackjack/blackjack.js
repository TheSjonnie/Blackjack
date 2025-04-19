import { startGame } from "./startGame";
import { User } from "./userClass";
import { Dealer } from "./dealerClass";
import { getCredits } from "./apiCalls";
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
            startGame();
        },
        { once: true }
    );
}
if (!window._blackjackInitialized) {
    window._blackjackInitialized = true;
    document.addEventListener("DOMContentLoaded", async () => {
        await setupGame();
        setEventlistenerToStartBtn();
    });
}
export { userClass, dealerClass, setEventlistenerToStartBtn };
