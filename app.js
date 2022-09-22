//let userChoice;
//let computerChoice;
//let winner;
//let playAgain;
//get input from user

function setUserChoice(choice) {
    return userChoice = choice;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function displayWinner() {
    //output who won
    if (winner == "user") {
        console.log(`You chose ${userChoice} and the computer chose ${computerChoice}, You won!`)
    }
    if (winner == "computer") {
        console.log(`You chose ${userChoice} and the computer chose ${computerChoice},You lost, sorry!`)
    }

    if (winner == "tie") {
        console.log(`You chose ${userChoice} and the computer chose ${computerChoice}, What fate, its a tie!`)
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













const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {
    setUserChoice('ROCK');
    getComputerChoice();
    getResults();
})
paper.addEventListener('click', () => {
    setUserChoice('PAPER');
})
scissors.addEventListener('click', () => {
    setUserChoice('SCISSORS');
})











