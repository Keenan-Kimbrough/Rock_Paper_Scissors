const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const result = document.getElementById('result')
let userChoice
const possibleChoices = document.querySelectorAll('button')
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', () => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
}))
function generateComputerChoice() {
    
}