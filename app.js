const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const resetButton = document.querySelector('#reset');
const resultsDisplay = document.querySelector('#results')
const userScoreDisplay = document.querySelector('#playerScore')
const computerScoreDisplay = document.querySelector('#computerScore')
let userScore = 0;
let computerScore = 0;


function reset() {
    userScore = 0;
    computerScore = 0;
    userScoreDisplay.textContent = userScore;
    computerScoreDisplay.textContent = computerScore;
    resultsDisplay.textContent = "Make your Choice"

}

function setUserChoice(choice) {
    return userChoice = choice;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function displayWinner() {
    //output who won

    if (winner == "user") {
        resultsDisplay.textContent = `You chose ${userChoice} and the computer chose ${computerChoice}, You won!`
        userScore += 1;
        userScoreDisplay.textContent = userScore;
    }
    if (winner == "computer") {
        resultsDisplay.textContent = `You chose ${userChoice} and the computer chose ${computerChoice},You lost, sorry!`
        computerScore += 1;
        computerScoreDisplay.textContent = computerScore;
    }

    if (winner == "tie") {
        resultsDisplay.textContent = `You chose ${userChoice} and the computer chose ${computerChoice}, What fate, its a tie!`
    }

    if (userScore === 5 || computerScore === 5) {
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        if (userScore > computerScore){
            resultsDisplay.textContent = 'You won and saved the world!'
        }
        else {
            resultsDisplay.textContent = 'You lost and the evil computer overlords will now rule.'
        }
    }
}

function getComputerChoice() {
    let choiceArray = ["ROCK", "PAPER", "SCISSORS"]
    let compRandom = getRandomInt(3);
    computerChoice = choiceArray[compRandom];
    return computerChoice;
}

//compare user input to computer
//Rock > Scissor > Paper, Paper > Rock
function getResults() {
    if (userChoice == "ROCK") {

        if (computerChoice == "SCISSORS") {
            winner = "user";
        }

        else if (computerChoice == "PAPER") {
            winner = "computer";
        }
        else if (computerChoice == "ROCK") {
            winner = "tie";
        }
    }

    if (userChoice == "PAPER") {

        if (computerChoice == "ROCK") {
            winner = "user";
        }

        else if (computerChoice == "SCISSORS") {
            winner = "computer";
        }
        else if (computerChoice == "PAPER") {
            winner = "tie";
        }
    }

    if (userChoice == "SCISSORS") {

        if (computerChoice == "PAPER") {
            winner = "user";
        }

        else if (computerChoice == "ROCK") {
            winner = "computer";
        }
        else if (computerChoice == "SCISSORS") {
            winner = "tie";
        }
    }
    return winner;
}




rock.addEventListener('click', () => {
    setUserChoice('ROCK');
    getComputerChoice();
    getResults();
    displayWinner();
})
paper.addEventListener('click', () => {
    setUserChoice('PAPER');
    getComputerChoice();
    getResults();
    displayWinner();
})
scissors.addEventListener('click', () => {
    setUserChoice('SCISSORS');
    getComputerChoice();
    getResults();
    displayWinner();
})

resetButton.addEventListener('click', () => {
    reset();
})











