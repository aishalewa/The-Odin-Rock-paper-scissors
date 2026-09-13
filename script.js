let gameItems = ["rock","paper","scissors"];
let humanScore = 0;
let computerScore = 0; 

function getComputerChoice(){
    return gameItems[Math.floor(Math.random() * 3)];
}


function getHumanChoice(){
    let humanChoice = prompt('Enter ROCK, PAPER or SCISSORS');
    return humanChoice.toLowerCase();
    
}


// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();



function playRound(humanChoice, computerChoice) {
    let message;
    if (humanChoice === computerChoice){
        message = "It's a tie"
    }
    else if (
        //checks all conditions where the humanchoice win against the computerchoice
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper") 
    ){
        message = (`You win ${humanChoice} beats ${computerChoice}`)
        humanScore++;
    }

    else {
        message = (`You lose ${computerChoice} beats ${humanChoice}`)
        computerScore++;
    }
    
    return message;

}

function playGame(){
    let round = 1;
    while (round <= 5) {

        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

    
        // console.log(humanSelection);
        // console.log(computerSelection)
        console.log(playRound(humanSelection, computerSelection));
         round++;
    };
   
    console.log(`humanScore is ${humanScore} : computerScore is ${computerScore}`);

}
 



playGame();