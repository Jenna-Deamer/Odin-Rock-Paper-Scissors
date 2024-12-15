let round = 1;
let humanScore = 0;
let computerScore = 0; 

// Listen for click, play round & pass choice 
const rockBtn = document.querySelector("#rock").addEventListener('click', () => {
  playRound('rock', getComputerChoice());
})
const paperBtn = document.querySelector("#paper").addEventListener('click', () => {
  playRound('paper', getComputerChoice());
})
const scissorsBtn = document.querySelector("#scissors").addEventListener('click', () => {
  playRound('scissors', getComputerChoice());
})
// get labels
const humanLabel = document.querySelector("#human-score-label");
const pcLabel = document.querySelector("#pc-score-label");
const roundLabel = document.querySelector("#round-label");
const RoundInfoLabel = document.querySelector("#round-info")

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
  
  function playRound(humanSelection, computerSelection){
    console.log("Starting round...");
        if (
          (humanSelection === "rock" && computerSelection === "scissors") ||
          (humanSelection === "paper" && computerSelection === "rock") ||
          (humanSelection === "scissors" && computerSelection === "paper")
        ) {
          humanScore++;
          humanLabel.textContent = "Human: " + humanLabel;
        } else if (
          (computerSelection === "rock" && humanSelection === "scissors") ||
          (computerSelection === "paper" && humanSelection === "rock") ||
          (computerSelection === "scissors" && humanSelection === "paper")
        ) {
          computerScore++;
          pcLabel.textContent = "PC: " + computerScore;
        } else {
          console.log("It's a draw!");
          RoundInfoLabel.textContent = "Its a Draw!"
        }
      
        // Check for winner at the end of round 5
        if (round === 5 && humanScore > computerScore) {
          console.log("Human Wins with " + humanScore + " points!");
          RoundInfoLabel.textContent = "Human Wins with " + humanScore + " points!";
        } else if (round === 5 && computerScore > humanScore) {
          console.log("PC Wins with " + computerScore + " points!");
          RoundInfoLabel.textContent = "PC Wins with " + computerScore + " points!"
        } else {
          console.log("Round " + round + " over!");
          console.log("Human Score: " + humanScore + " PC Score: " + computerScore);
        }
  }




// function playGame(round) {
//   rockBtn.addEventListener("click", playRound());
//     // function getHumanChoice() {
//     //     // let humanChoice = prompt("Choose rock, paper or scissors!").toLowerCase();
    
//     //     // if (
//     //     //   humanChoice === "paper" ||
//     //     //   humanChoice === "rock" ||
//     //     //   humanChoice === "scissors"
//     //     // ) {
//     //     //   console.log("User Choose: " + humanChoice);
//     //     //   return humanChoice;
//     //     // } else {
//     //     //   humanChoice = prompt("Invalid Choice choose rock, paper or scissors!");
//     //     // }
//     //     }
        
//   function getComputerChoice() {
//     const randomNum = Math.floor(Math.random() * 3);
//     let computerChoice;

//     if (randomNum === 0) {
//       computerChoice = "rock";
//     } else if (randomNum === 1) {
//       computerChoice = "paper";
//     } else {
//       computerChoice = "scissors";
//     }
//     console.log("Computer Choose: " + computerChoice);
//     return computerChoice;
//   }

//   const computerSelection = getComputerChoice();
//   const humanSelection = getHumanChoice();

 
//   function playRound(humanSelection, computerSelection) {
//     console.log("Starting round...");
//     if (
//       (humanSelection === "rock" && computerSelection === "scissors") ||
//       (humanSelection === "paper" && computerSelection === "rock") ||
//       (humanSelection === "scissors" && computerSelection === "paper")
//     ) {
//       humanScore++;
//       console.log("Human wins");
//     } else if (
//       (computerSelection === "rock" && humanSelection === "scissors") ||
//       (computerSelection === "paper" && humanSelection === "rock") ||
//       (computerSelection === "scissors" && humanSelection === "paper")
//     ) {
//       computerScore++;
//       console.log("Computer wins");
//     } else {
//       console.log("It's a draw!");
//     }

//     // check for winner at end of round 5
//     if (round === 5 && humanScore > computerScore) {
//       console.log("Human Wins with " + humanScore + " points!");
//     } else if (round === 5 && computerScore > humanScore) {
//       console.log("PC Wins with " + computerScore + " points!");
//     } else {
//       console.log("Round " + round + " over!");
//       console.log("Human Score: " + humanScore + " PC Score: " + computerScore);
//     }
//   }

//   playRound(humanSelection, computerSelection);
// }

// while (round <= 5) {
//   playGame(round);
//   round++;
// }