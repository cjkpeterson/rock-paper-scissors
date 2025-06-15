const buttons = document.querySelector(".buttons");

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
            console.log("Clicked Rock");
            playRound("R", getComputerChoice());
            break;
        case 'paper':
            console.log("Clicked Paper");
            playRound("P", getComputerChoice());
            break;
        case 'scissors':
            console.log("Clicked Scissors");
            playRound("S", getComputerChoice());
            break;
    }
}



let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    console.log("First to 3 wins!");
    console.log("");
    switch (humanChoice) {
        case "R":
            switch (computerChoice) {
                case "R":
                    console.log("Tie! You both played Rock");
                    break;
                case "P":
                    console.log("You lose! You chose rock, but the computer chose paper");
                    computerScore++;
                    break;
                case "S":
                    console.log("You win! You chose rock, and the silly computer chose scissors");
                    humanScore++;
                    break;
            }
            break;
        case "P":
            switch (computerChoice) {
                case "R":
                    console.log("You win! You chose paper, and the silly computer chose rock");
                    humanScore++;
                    break;
                case "P":
                    console.log("Tie! You both played Paper");
                    break;
                case "S":
                    console.log("You lose! You chose paper, but the computer chose scissors");
                    computerScore++;
                    break;
            }
            break;
        case "S":
            switch (computerChoice) {
                case "R":
                    console.log("You lose! You chose scissors, but the computer chose rock");
                    computerScore++;    
                    break;
                case "P":
                    console.log("You win! You chose scissors, and the silly computer chose paper");
                    humanScore++;
                    break;
                case "S":
                    console.log("Tie! You both played Scissors");
                    break;
            }
            break;
        default:
            console.log("Please enter a valid choice")
    }
    console.log("");
    console.log("Your score: " + humanScore);
    console.log("Computer score: " + computerScore);
    playGame();


}

function playGame() {
    console.log("Welcome to Rock, Paper, Scissors!")
    if (humanScore < 3 && computerScore < 3) {
        buttons.addEventListener('click', whichButton);
    }
    else if (humanScore === 3) {
        console.log("You beat the computer! Nice job!")
    }
    else {
        console.log("The computer has defeated you :(")
    }
}

playGame();