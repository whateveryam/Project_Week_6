// automated version of the classic card game WAR! In this version there are only 2 players.
// You do not need to do anything special when there is a tie in a round.
// Think about how you would build this project and write your plan down. 
// classes: Card, Deck, Player, as well as what properties and methods they may include.
// You do not need to accept any user input
// The entire game should play out instantly without any user input inside of your browser's console.


// Deal 26 Cards to each Player from a Deck of 52 cards.
// Iterate through the turns where each Player plays a Card.
// The Player who played the higher card is awarded a point.
// Ties result in zero points for both Players.
// After all cards have been played, display the score and declare the winner.
// Write a Unit Test using Mocha and Chai for at least one of the functions you write.


//       WAR!!! 

//  what a card is
class Card {
    constructor(suit, face, value) {
        this.suit = suit;
        this.face = face;
        this.value = value;
    }
}
// what player is. They have a name, hand of cards, and score
class Player {
    constructor(name, hand, score) {
        this.name = name;
        this.hand = hand;
        this.score = score;
    }
}
//This will put cards into deck with suits, ranks, and values. ADD Shuffle deck.
class Deck {
    constructor() {
        this.deck = [];
    }
    createDeck() {
        const suits = ['♦', '♣', '♠', '♥'];
        const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        const faces = ['Ace', 2, 3,4,5,6,7,8,9,10,'J','Q','K'];  
       
        //2 loops,loop over suits, inside should be values OR facees
        for ( let i = 0; i < suits.length; i++) {
                for (let j = 0; j < values.length; j++) {                   
                    this.deck.push(new Card(suits[i], faces[j], values[j]))
                }
          }        
    }
    shuffle(){
        const shuffledDeck = this.deck;
 
        function shuffleCards() {
            for (let i = shuffledDeck.length - 1; i > 0; i--){
                const k = Math.floor(Math.random() * (i + 1));
                const temp = shuffledDeck[i];
                shuffledDeck[i] = shuffledDeck[k];
                shuffledDeck[k] = temp;
            }
        } shuffleCards();
    }
}

//playing the game
class Game {
    constructor(){
}
playGame(){
    const myDeck = new Deck();
    myDeck.createDeck();
    myDeck.shuffle();
    const player1 = new Player('Willie', myDeck.deck.splice(0, 26), 0);
    const player2 = new Player('Bubs', myDeck.deck, 0);
    for (let i = 0; i < player1.hand.length; i++){
        if(player1.hand[i].value > player2.hand[i].value){
            player1.score = player1.score + 1;
            console.log('Willie wins this round!');
            console.log('');
        }
        else if(player2.hand[i].value > player1.hand[i].value){
            player2.score = player2.score + 1;
            console.log('Bubs wins this round!');
            console.log('');
        }
        else {
            console.log('No points for anyone!')
            console.log('Willies score = ' + player1.score + ' : Bubs score = ' + player2.score);
            console.log('');
        }
    }
    if (player1.score > player2.score){
        console.log('Willie wins the game!');
    } else if (player2.score > player1.score){
        console.log('Bubs wins the game!')
    } else {
        console.log('NO WINNER DECLARED: Battle again?')
    }
    

}
}

const game= new Game();
game.playGame();
const deck = new Deck();
deck.createDeck();
deck.shuffle();



