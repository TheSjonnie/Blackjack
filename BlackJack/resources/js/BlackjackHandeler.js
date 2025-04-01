let deck = [];
document.addEventListener('DOMContentLoaded', () => {
    deck = createdeck();
    document.getElementById('StartGame',addEventListener('click', () => {
        StartGame();
    }));
})
function StartGame(){
    ClassListAddHidden(document.getElementById('ChipsbetContainer')); // hide Chips
    ClassListAddHidden(document.getElementById('StartBtnContainer')); // hide Start btn
}
function createdeck() {
    let suits = ['club', 'diamonds', 'hearts', 'spades'];
    let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    suits.forEach((type) => {
        ranks.forEach((number) => {
            deck.push(`${type}_${number}`);
        });
    });
    return deck;
}
function ClassListAddHidden(HtmlElement){
    HtmlElement.classList.add('hidden')
}
function ClassListAddshow(HtmlElement){
    HtmlElement.classList.remove('hidden')
}