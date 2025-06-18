const buttons = document.querySelector(".buttons");
const output = document.querySelector(".output");

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    switch (choice) {
        case 0:
            return "R";
        case 1:
            return "P";
        case 2:
            return "S";
    }
}
        
function whichButton(e) {
    buttons.removeEventListener('click', whichButton);
    let target = e.target;
    switch(target.id) {
        case 'rock':    
            playRound("R", getComputerChoice());
            break;
        case 'paper':
            playRound("P", getComputerChoice());
            break;
        case 'scissors':
            playRound("S", getComputerChoice());
            break;
    }
}


let humanScore = 0;
let computerScore = 0;

const humanDisplay = document.querySelector(".scores #human");
const computerDisplay = document.querySelector(".scores #computer");

function playRound(humanChoice, computerChoice) {
    const winner = document.createElement("p");
    output.appendChild(winner);
    switch (humanChoice) {
        case "R":
            switch (computerChoice) {
                case "R":
                    winner.textContent = "Tie! You both played Rock";
                    break;
                case "P":
                    winner.textContent = "You lose! You chose rock, but the computer chose paper";
                    computerScore++;
                    break;
                case "S":
                    winner.textContent = "You win! You chose rock, and the silly computer chose scissors";
                    humanScore++;
                    break;
            }
            break;
        case "P":
            switch (computerChoice) {
                case "R":
                    winner.textContent = "You win! You chose paper, and the silly computer chose rock";
                    humanScore++;
                    break;
                case "P":
                    winner.textContent = "Tie! You both played Paper";
                    break;
                case "S":
                    winner.textContent = "You lose! You chose paper, but the computer chose scissors";
                    computerScore++;
                    break;
            }
            break;
        case "S":
            switch (computerChoice) {
                case "R":
                    winner.textContent = "You lose! You chose scissors, but the computer chose rock";
                    computerScore++;    
                    break;
                case "P":
                    winner.textContent = "You win! You chose scissors, and the silly computer chose paper";
                    humanScore++;
                    break;
                case "S":
                    winner.textContent = "Tie! You both played Scissors";
                    break;
            }
            break;
        default:
             winner.textContent = "Please enter a valid choice";
    }
    playGame();


}

function playGame() {
    humanDisplay.textContent = humanScore;
    computerDisplay.textContent = computerScore;
    if (humanScore < 5 && computerScore < 5) {
        buttons.addEventListener('click', whichButton);
    }
    else {
        const finalWinner = document.createElement("h2");
        output.appendChild(finalWinner);
        if (humanScore === 5) {
            finalWinner.textContent = "You beat the computer! Nice job!";
        }
        else {
            finalWinner.textContent = "The computer has defeated you :(";
        }
    }
}

playGame();