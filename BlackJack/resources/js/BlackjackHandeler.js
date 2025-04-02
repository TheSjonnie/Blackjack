import CardsImageClasses from './data/CardsImageClasses.json';

let deck = [];
document.addEventListener('DOMContentLoaded', () => {
    deck = createdeck();
    document.getElementById('StartGame').addEventListener('click', () => {
        StartGame();
    });
})
async function StartGame(){
    ClassListAddHidden(document.getElementById('ChipsbetContainer')); // hide Chips
    ClassListAddHidden(document.getElementById('StartBtnContainer')); // hide Start btn
    let Usercard1 = await PickCard('userCardsImageContainer');
    await new Promise((resolve) => setTimeout(resolve, 800));
    let Dealercard1 = await PickCard('DealerCardsImageContainer');
    await new Promise((resolve) => setTimeout(resolve, 800));
    let Usercard2 = await PickCard('userCardsImageContainer');
    await new Promise((resolve) => setTimeout(resolve, 800));
    let Dealercard2 = await PickCard('DealerCardsImageContainer');

    let { CardValue: Dealercardvalue2, Acount: DealerACardsNumber2 } = Getvalue(Dealercard2, 0);
    let { CardValue: Dealercardvalue1, Acount: DealerACardsNumber1 } = Getvalue(Dealercard1, 0);
    let { CardValue: Usercardvalue1, Acount: UserACardsNumber1 } = Getvalue(Usercard1, 0);
    let { CardValue: Usercardvalue2, Acount: UserACardsNumber2 } = Getvalue(Usercard2, 0);
    let UserCardsValue = Usercardvalue1 + Usercardvalue2;
    let Dealercardvalue = Dealercardvalue1 + Dealercardvalue2;
    document.getElementById('DealerCardsValue').innerHTML = Dealercardvalue;
    document.getElementById('UserCardsValue').innerHTML = UserCardsValue;
}
function Getvalue(card, Acount){
    let CardValue = card.split('_')[1]
    if (CardValue== 'J' || CardValue == 'Q' || CardValue == 'K') {
        CardValue = 10;
    } else if (CardValue == 'A') {
        CardValue = 11;
        Acount++;
    } else {
        CardValue = parseInt(CardValue);
    }
    return {CardValue, Acount};
}
function createdeck() {
    let suits = ['clubs', 'diamonds', 'hearts', 'spades'];
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
async function PickCard(parentContainerName) {
    let card = deck[Math.floor(Math.random() * 52)];
    console.log("card ==> ", card);
    const ParentElement = document.getElementById(parentContainerName);
    let left = CardsImageClasses[(ParentElement.childElementCount)]['left'];
    let rotate = CardsImageClasses[(ParentElement.childElementCount)]['rotate'];
    
    const ClassNameFirst = `CardsImgSize rotate-345`;
    const ClassnNameOther = `CardsImgSize absolute left-${left} rotate-${rotate}`;
    const ClassName = (ParentElement.childElementCount == 0) ? ClassNameFirst : ClassnNameOther;
    const alt = `${card} Image`
    let Blankcard = CreateElement('img', ClassName, alt, "http://127.0.0.1:8000/image/DeckCards/back_light.png", ParentElement)
    await new Promise((resolve) => setTimeout(resolve, 800));
    Blankcard.src = `http://127.0.0.1:8000/image/DeckCards/${card}.png`;
    return card;
}
function CreateElement(Element,ClassName,Alt,Src,ParentElement){
    let CreatedElement = document.createElement(Element);
    CreatedElement.setAttribute('src',Src);
    CreatedElement.setAttribute('class',ClassName);
    CreatedElement.alt =Alt;
    ParentElement.appendChild(CreatedElement);
    return CreatedElement;
}

export {CreateElement};