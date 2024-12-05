let round = 1;
let humanScore = 0;
let computerScore = 0; 

function playGame(round) {

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



  const computerSelection = getComputerChoice();
  const humanSelection = getHumanChoice();

  function playRound(humanSelection, computerSelection) {
    console.log("Starting round...");
    if (
      (humanSelection === "rock" && computerSelection === "scissors") ||
      (humanSelection === "paper" && computerSelection === "rock") ||
      (humanSelection === "scissors" && computerSelection === "paper")
    ) {
      humanScore++;
      console.log("Human wins");
    } else if (
      (computerSelection === "rock" && humanSelection === "scissors") ||
      (computerSelection === "paper" && humanSelection === "rock") ||
      (computerSelection === "scissors" && humanSelection === "paper")
    ) {
      computerScore++;
      console.log("Computer wins");
    } else {
      console.log("It's a draw!");
    }

    // check for winner at end of round 5
    if (round === 5 && humanScore > computerScore) {
      console.log("Human Wins with " + humanScore + " points!");
    } else if (round === 5 && computerScore > humanScore) {
      console.log("PC Wins with " + computerScore + " points!");
    } else {
      console.log("Round " + round + " over!");
      console.log("Human Score: " + humanScore + " PC Score: " + computerScore);
    }
  }

  playRound(humanSelection, computerSelection);
}

while (round <= 5) {
  playGame(round);
  round++;
}
