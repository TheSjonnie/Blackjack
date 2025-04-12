import { StartGame } from './StartGame';
import { User } from './UserClass';
import { Dealer } from './DealerClass';
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('StartGame').addEventListener('click', () => {
        StartGame();
    });
})
const UserClass = new User()
const DealerClass = new Dealer()
export {UserClass, DealerClass}