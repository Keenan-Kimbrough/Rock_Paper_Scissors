const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
let userChoice
const possibleChoices = document.querySelectorAll("button")

let result
let computerChoice
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    console.log(e.target)
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))
generateComputerChoice()

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3)
    console.log(randomNumber)

    if(randomNumber ===1) {
        computerChoice = 'rock'
    }
    if ( randomNumber===2 ){
        computerChoice = 'scissors'

    }
    if (randomNumber ===3) {
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if(computerChoice === userChoice) {
        result = 'its a draw'
    }
    if(computerChoice === 'rock' && userChoice ==='paper'){
        result = 'you lost'
    }
    if(computerChoice === 'rock' && userChoice ==='scissors'){
        result = 'you win'
    }
    if(computerChoice === 'paper' && userChoice ==='rock'){
        result = 'you win'
    }
    if(computerChoice === 'paper' && userChoice ==='scissors'){
        result = 'you win'
    }
    if(computerChoice === 'scissors' && userChoice ==='paper'){
        result = 'you lose'
    }
    if(computerChoice === 'scissors' && userChoice ==='rock'){
        result = 'you win'
    }
    resultDisplay.innerHTML = result
}
