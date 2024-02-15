console.log('hi');
const getUserChoice (userInput) =>{
  userInput = userInput.toLowerCase ();
  if (userInput === 'rock' || userInput === 'scissors' || userInput === 'paper' || userInput === 'bomb'){
    return userInput
  } else{
    console.log ('Error please type: rock, paper, or scissors')
  }
}

const getComputerChoice = () => {
  const randomNumber = (math.floor(math.random() *3))

  switch (randomNumber){
    case 0:
    return 'rock';
    case 1:
    return 'paper';
    case 2:
    return 'scissors';
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice){
    return 'this game is a tie';
  }
  if (userChoice === 'rock' ){
    if (userChoice === 'paper'){
      return 'sorry computer won';
    } else{
      return 'congratualations you won'
    }
  }
if (userChoice === 'scissors'){
  if (computerChoice === 'paper'){
    return 'sorry computer won'
  } else{
    return 'congratulations you won'
  }
} 
if (userChoice === 'bomb'){
  return 'congratulations you won'
  
}
}

const playGame = () => {
  const userChoice = getUserChoice('paper');
  const comupterChoice = getComputerChoice();
  console.log ('you threw:' + userChoice);
  console.log ('the computer threw:' + computerChoice)

  console.log(determineWinner(userChoice,computerChoice))
}



