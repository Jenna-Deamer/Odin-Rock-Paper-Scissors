let humanScore = 0;
let computerSCore = 0;

function getComputerChoice(){
    const randomNum = Math.floor(Math.random() * 3);
    
    if (randomNum === 0){
        computerChoice = "rock";
    }
    else if (randomNum === 1){
        computerChoice = "paper"
    }
    else {
         computerChoice = "scissors"
    }
    console.log("Computer Choose: " + randomNum)
    return computerChoice
}

function getHumanChoice (){ 
        let userChoice = prompt("Choose rock, paper or scissors!").toLowerCase();

        if (userChoice === "paper" || userChoice === "rock" || userChoice === "scissors"){
            console.log("User Choose: " + userChoice);
        }
        else{
            userChoice = prompt("Invalid Choice choose rock, paper or scissors!");
        }
        
      
    
    
}


getComputerChoice();
getHumanChoice();