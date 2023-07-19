let cards = []
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEL = document.getElementById('message-el') 
let displaySum = document.getElementById('sum-el')
let displaycard = document.getElementById('card-el')

let sum = 0

let player = {
    name: 'dimz',
    chips: 145
}
let playerEl = document.getElementById('player')
playerEl.textContent = player.name + ': $' + player.chips 



function getRandomCard() {
   let  random  = Math.floor(Math.random()*13) + 1
   if( random > 10 ){
    return 10
   } else if( random === 1){
    return 11
   }
   return random
}

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
   let secondCard = getRandomCard()
   cards  = [firstCard , secondCard]
   sum = cards[0] + cards[1] 


    renderGame()
}
function renderGame() {
    displaySum.textContent = 'sum: ' + sum
    displaycard.textContent = 'cards: '
    for ( let i = 0; i < cards.length; i++){
        
        displaycard.textContent += cards[i] +'  '
        
    }
    
    if( sum < 21) {
        message = 'Do you want to draw a new card? 😇'
    } else if(sum === 21){
        message = 'Wohoo! You have got Blackjack 🥳'
        hasBlackJack = true
    } else if( sum > 21) {
        message = 'You are out of the game 😭'
        isAlive = false
    }
    messageEL.textContent = message  
     
     
    }
    function newCard() {

        if( isAlive === true) {

            let card = getRandomCard()
            sum += card    
            cards.push(card)
            
            renderGame()
        }
        
}

