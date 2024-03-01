let userName = prompt('enter your name')
let names = `Hello, ${userName}, prepare to lose.`
document.getElementById('userWins').textContent = `${userName} wins = 0`
let userNameOutputDiv = document.getElementById('userNameOutput')
let computerChoice
let compScore = 0
let userScore = 0
let ties = 0
let rounds = 0


userNameOutputDiv.innerHTML = `<p>${names}</p>`
//user name// 

function playRound(userChoice) {
    
    //Get Computer Choice
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        computerChoice = 'Rock'
        console.log(randomNumber)
    }
    else if (randomNumber === 1) {
        computerChoice = 'Paper'
        console.log(randomNumber)
    }
    else {
        computerChoice = 'Scissor'
        console.log(randomNumber)
    }
    //Display Selections
    document.getElementById("comp_selection").textContent = computerChoice
    document.getElementById("user_selection").textContent = userChoice

    //Evaluate the winner
    //USer Chooses Rock
    if (userChoice === computerChoice) {
        console.log('Tie')
        ties++
        console.log(userScore)
    } else if (userChoice === 'Rock' && computerChoice === 'Paper') {
        console.log('Computer Wins')
        compScore++
        console.log(userScore)
    } else if (userChoice === 'Rock' && computerChoice === 'Scissor') {
        console.log('You win')
        userScore++
        console.log(userScore)
    }
    //user chooses Paper
    else if (userChoice === 'Paper' && computerChoice === 'Scissor') {
        console.log('Computer Wins')
        compScore++
        console.log(userScore)
    } else if (userChoice === 'Paper' && computerChoice === 'Rock') {
        console.log('You win')
        userScore++
        console.log(userScore)

    } else if (userChoice === 'Scissor' && computerChoice === 'Rock') {
        console.log('Computer Wins')
        compScore++
        console.log(userScore)
    } else if (userChoice === 'Scissor' && computerChoice === 'Paper') {
        console.log('You win')
        userScore++
        console.log(userScore)
    }
rounds = rounds +1
displayResults();
checkEndGame();

    }

function displayResults(){
    
    //update visuals on site
    document.getElementById('userWins').textContent = `${userName} wins = ${userScore}`
    document.getElementById('compWins').textContent = `Computer wins = ${compScore}`
    document.getElementById('ties').textContent = `Ties = ${ties}`
    document.getElementById('rounds').textContent = `Rounds = ${rounds}`
}


function checkEndGame(){

    if (rounds >= 5) {
        console.log('Game over')
        if (compScore > userScore) {
            console.log('computer wins')
        } else if (compScore < userScore) {
            console.log('you win')
        } else {
            console.log('No one wins')
        }
    } 

}













