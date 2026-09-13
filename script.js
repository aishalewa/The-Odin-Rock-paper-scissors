let gameItems = ["rock","paper","scissors"];

function getComputerChoice(){
    return Math.floor(Math.random() * 3)
}
console.log (gameItems[getComputerChoice()]);

function getHumanChoice(){
    let humanChoice = prompt('Enter ROCK, PAPER or SCISSORS').toLowerCase();
    return humanChoice;
    

}
console.log(getHumanChoice())