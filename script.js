let userName = prompt('enter your name')
let names = `Hello, ${userName}, prepare to lose.`
document.getElementById('userWins').textContent = `${userName} wins = 0`
let userNameOutputDiv = document.getElementById('userNameOutput')
let computerChoice
let compScore = 0
let userScore = 0
let ties = 0


console.log(names)
userNameOutputDiv.innerHTML = `<p>${names}</p>`
//user name// 

function playRound(userSelection){
     userChoice = userSelection
    //Get Computer Choice
    const randomNumber = Math.floor(Math.random()*3);
    if (randomNumber === 0) {
        computerChoice = 'Rock'
        console.log(randomNumber)
    }
    else if (randomNumber === 1) {
        computerChoice = 'Paper'
        console.log(randomNumber)
    }
    else  {
        computerChoice = 'Scissor'
        console.log(randomNumber)
    }
 //Display Selections
 document.getElementById("comp_selection").textContent = computerChoice
 document.getElementById("user_selection").textContent = userChoice

 //Evaluate the winner
//USer Chooses Rock
 if (userChoice === 'Rock' && computerChoice === 'Rock'){
    console.log('Tie')
    ties++   
    console.log(userScore)
} else if (userChoice === 'Rock' && computerChoice === 'Paper'){
    console.log('Computer Wins')
    compScore++
    console.log(userScore)
} else (userChoice === 'Rock' && computerChoice === 'Scissors'){
    console.log('You win')
    userScore++
    console.log(userScore)
} 
//user chooses Paper
if (userChoice === 'Paper' && computerChoice === 'Paper'){
    console.log('Tie')
    ties++   
    console.log(userScore)
} else if (userChoice === 'Paper' && computerChoice === 'Scissors'){
    console.log('Computer Wins')
    compScore++
    console.log(userScore)
} else (userChoice === 'Paper' && computerChoice === 'Rock'){
    console.log('You win')
    userScore++
    console.log(userScore)
} 


//update visuals on site
document.getElementById('userWins').textContent = `${userName} wins = ${userScore}`
document.getElementById('compWins').textContent = `Computer wins = ${compScore}`
document.getElementById('ties').textContent = `Ties = ${ties}`


} 


   













