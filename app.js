
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    ranNum = Math.floor(Math.random() * 3);
    compChoice = ["rock", "paper", "scissors"];
    move = compChoice[ranNum];
    return move;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return `It's a tie! You both chose ${playerSelection}`;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function game(userChoice) {
    

    if (playerScore < 5 && computerScore < 5) {
        let compChoice = getComputerChoice();
        let result = playRound(userChoice, compChoice);

    
        res.innerHTML = `${result}<br><br>Player score: ${playerScore}<br><br>Computer score ${computerScore}`

    
        if (playerScore === 5 || computerScore === 5) {
            endGame();
        }
    }    

}

function endGame() {
    if (playerScore > computerScore) {
        res.textContent = "You win the game! Reload the page to play again!"
    } else if (computerScore > playerScore) {
         res.textContent ="You lose the game! Reload the page to play again!"
    } else {
        res.textContent ="It's a tie! No winner! Reload the page to play again!"
    } 
        
    b1.disabled = true;
    b2.disabled = true;
    b3.disabled = true;

}

const b1 = document.querySelector("#b1");
const b2 = document.querySelector("#b2");
const b3 = document.querySelector("#b3");
const res = document.querySelector("#res");

b1.addEventListener("click", function() {
    game("rock");
})

b2.addEventListener("click", function() {
    game("paper");
})

b3.addEventListener("click", function() {
    game("scissors");
})
