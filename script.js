let userName = prompt('enter your name')
let names = `Hello, ${userName}, prepare to lose.`
let userNameOutputDiv = document.getElementById('userNameOutput')
console.log(names)
userNameOutputDiv.innerHTML = `<p>${names}</p>`
//user name// 


function shakeMagic8Ball(){
    const question = prompt('Ask the magic 8 ball a question');
    if(question === null){
        document.getElementById('response-text').innerText = 'Please ask a question'
        document.getElementById('response-text').classList ='text-danger'
        document.getElementById('response-image').src = '#BAD/BROKENIMAGE' //FIX THIS 
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






