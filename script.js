let gameItems = ["rock","paper","scissors"];
let humanScore = 0;
let computerScore = 0; 

let humanChoice;
let computerChoice;

let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissors = document.querySelector('.scissors');

let resultContainer = document.querySelector(".result-container");
let paragraph = document.createElement("p");
resultContainer.appendChild(paragraph);



function getComputerChoice(){
    return gameItems[Math.floor(Math.random() * 3)];
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    paragraph.textContent = `Human Score : 0 : Computer Score : 0`
}


resetGame()

let humanSelection;
let computerSelection = getComputerChoice();



function playRound(humanChoice, computerChoice) {
    computerSelection = getComputerChoice();
    let message;
    let winner;
    if (humanChoice === computerChoice){
        message = "It's a tie!"
    }
    else if (
        //checks all conditions where the humanchoice win against the computerchoice
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper") 
    ){
        message = (`You win this round! ${humanChoice} beats ${computerChoice}`)
        humanScore++;
        if (humanScore == 5){
            winner = "human";
            alert (`Winner is ${winner}`);
            resetGame();

        }
    }

    else {
        message = (`You lose this round ${computerChoice} beats ${humanChoice}`)
        computerScore++;
        if (computerScore == 5){
            winner = "computer"
            alert (`Winner is ${winner}`);
            resetGame();
        }
    }

    return message;
    

}

rock.addEventListener("click", function(){
    humanSelection = "rock";
    let message =  playRound(humanSelection, computerSelection);
     playRound(humanSelection, computerSelection);
    paragraph.innerHTML = ` ${message} <br> Human Score : ${humanScore} : Computer Score : ${computerScore}`
    
    
});

paper.addEventListener("click", function(){
    humanSelection = "paper";
    let message =  playRound(humanSelection, computerSelection);
     playRound(humanSelection, computerSelection);
    paragraph.innerHTML = ` ${message} <br> Human Score : ${humanScore} : Computer Score : ${computerScore}`

    
});

scissors.addEventListener("click", function(){
    humanSelection = "scissors";
    let message =  playRound(humanSelection, computerSelection);
    playRound(humanSelection, computerSelection);
    paragraph.innerHTML = ` ${message} <br> Human Score : ${humanScore} : Computer Score : ${computerScore}`

    
});

 
