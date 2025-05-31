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

function getHumanChoice() {
    return prompt("Rock (R), Paper (P) or Scissors (S)? Enter your choice here: ").charAt(0).toUpperCase();
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


}

function playGame() {
    console.log("Welcome to Rock, Paper, Scissors!")
    while (humanScore < 3 && computerScore < 3) {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if (humanScore === 3) {
        console.log("You beat the computer! Nice job!")
    }
    else {
        console.log("The computer has defeated you :(")
    }
}

playGame();