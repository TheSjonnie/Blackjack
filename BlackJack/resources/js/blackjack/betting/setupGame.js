import { UserBetting } from "./userClassBetting";
import { setEventlistenerToStartBtn, setEventListenersToChips } from "./bettingHandler";
import { getCredits } from "../apiCalls";
let userClassBetting;
async function setupGame() {
    try {
        userClassBetting = new UserBetting(await getCredits());
        return;
    } catch (err) {
        console.error(err);
    }
} 
if (!window._blackjackInitialized) {
    window._blackjackInitialized = true;
    document.addEventListener("DOMContentLoaded", async () => {
      console.log('hoi');
      await setupGame();
      setEventlistenerToStartBtn();
      setEventListenersToChips();
    });
  }
  

export { userClassBetting, setEventlistenerToStartBtn };
