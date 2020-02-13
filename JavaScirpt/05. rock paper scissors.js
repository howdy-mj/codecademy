const getUserChoice = function(userInput){
  userInput = userInput.toLowerCase();
  
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
  } else {
    console.log('Error');
  }
}

const getComputerChoice = function(){
  const a = Math.floor(Math.random() * 3);
  switch(a){
    case 0:
      return('rock');
      break;
    case 1:
      return('paper');
      break;
    case 2:
      return('scissors');
      break;
  }
}

const determineWinner = function(userChoice, computerChoice){
  if (userChoice === 'bomb'){
    return 'the secret cheat code!! you won';
  } if (userChoice === computerChoice){
      return 'the game was a tie';
    } if (userChoice === 'rock'){
        if(computerChoice === 'paper'){
          return 'the computer won';
        } else {
          return 'you won';
        }
    } if (userChoice === 'paper'){
        if(computerChoice === 'rock'){
          return 'you won';
        } else {
          return 'the computer won';
        }
    } if (userChoice === 'scissors'){
        if(computerChoice === 'paper'){
          return 'you won';
        } else{
          return 'the computer won';
        }
    }
}

const playGame = function(){
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('you threw: ' + userChoice);
  console.log('the computer threw: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();