let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection, computerSelection){

    console.log("Starting round...")
    if(humanSelection === "rock" && computerSelection === "scissors" || humanSelection === "paper" && computerSelection === "rock" || humanSelection === "scissors" && computerSelection === "paper"){
        humanScore++
        console.log("Human wins: " + humanScore);
    }
    else if(computerSelection === "rock" && humanSelection === "scissors" || computerSelection === "paper" && humanSelection === "rock" || computerSelection === "scissors" && humanSelection === "paper"){
        computerScore++
        console.log("Computer wins: " + computerScore);
    }
    else{
        console.log("It's a draw!")
    }
    console.log("Round over!");
}

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);
  let computerChoice;

  if (randomNum === 0) {
    computerChoice = "rock";
  } else if (randomNum === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  console.log("Computer Choose: " + computerChoice);
  return computerChoice;
}

function getHumanChoice() {
  let humanChoice = prompt("Choose rock, paper or scissors!").toLowerCase();

  if (
    humanChoice === "paper" ||
    humanChoice === "rock" ||
    humanChoice === "scissors"
  ) {
    console.log("User Choose: " + humanChoice);
    return humanChoice;
  } else {
    humanChoice = prompt("Invalid Choice choose rock, paper or scissors!");
  }
}

const computerSelection = getComputerChoice();
const humanSelection = getHumanChoice();
playRound(humanSelection, computerSelection)