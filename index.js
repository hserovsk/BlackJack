


let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let playerEl = document.getElementById("player-el")

let player = {
    name: "Per",
    chips: 145
}
playerEl.innerText = player.name + ": $" + player.chips
function startGame(){
    isAlive = true
    hasBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    sum = firstCard + secondCard
    cards = [firstCard, secondCard]
    renderGame()
}
function renderGame(){
    if (sum <= 20){
        message = "Do you want to draw a new card?"
    } else if(sum===21){
        message = "Wohoo! You've got the Blackjack!!"
        hasBlackJack = true
        player.chips += 100
    } else {
        message = "You're out of the game!"
        isAlive = false
        player.chips -= 50
    }
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.innerText = `Sum: ${sum}`
    messageEl.textContent = message
    playerEl.innerText = player.name + ": $" + player.chips
}

function newCard(){
    if(isAlive === true && hasBlackJack === false && player.chips > 0){
        let newCard = getRandomCard()
        cards.push(newCard)
        sum += newCard
        renderGame()
    }

}

function getRandomCard(){
    let randomCard = Math.floor(Math.random() * 13) + 1
    if (randomCard === 1){
        return 11
    } else if (randomCard > 10){
        return 10
    } else {
        return randomCard
    }
}

