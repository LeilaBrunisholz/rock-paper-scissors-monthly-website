let userName = prompt('enter your name')
let names = `Hello, ${userName}, prepare to lose.`
let userNameOutputDiv = document.getElementById('userNameOutput')
let computerChoice


console.log(names)
userNameOutputDiv.innerHTML = `<p>${names}</p>`
//user name// 

function playRound(userSelection){
     userChoice = userSelection
    //Get Computer Choice
    const randomNumber = Math.floor(Math.random()*3);
    if (randomNumber === 1) {
        computerChoice = 'Rock'
    }
    else if (randomNumber === 2) {
        computerChoice = 'Paper'
    }
    else  {
        computerChoice = 'Scissor'
    }
 //Display Selections
 document.getElementById("comp_selection").textContent = computerChoice
 document.getElementById("user_selection").textContent = userChoice
}
   
    
const randomNumber = Math.floor(Math.random()*3);
let answer, image, color;

switch (randomNumber) {
    case 0:
        answer = "The computer chose... Rock";
        image = "yes.jpg"
        color = "text-success";
        break;
    case 1:
        answer = "The computer chose... Paper";
        image = "no.jpg" //change this!!;
        color = "text-danger";
        break;
    case 2:
        answer = "The computer chose... Scissors";
        image = "later.jpg" //change this!!;
        color = "text-secondary";
        break;
}

const responseText = document.getElementById('response-text');
responseText.innerText = answer;
responseText.classList = `display-4 ${color}`;
document.getElementById('response-image').src = image;



}






