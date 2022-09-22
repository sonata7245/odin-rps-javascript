//let userChoice;
//let computerChoice;
//let winner;
//let playAgain;
//get input from user

function setUserChoice (button) {
    console.log(button);
}

const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {
    setUserChoice('rock');
})
paper.addEventListener('click', () => {
    setUserChoice('paper');
})
scissors.addEventListener('click', () => {
    setUserChoice('scissors');
})





 //   getChoice();
 //   console.log(userChoice);
    //have computer randomly choose rock paper scissors
 //   getComputerChoice();
 //   console.log(computerChoice);
 //   getResults()
 //   console.log(winner);

//     //output who won
//     if (winner == "user") {
//         alert(`You chose ${userChoice} and the computer chose ${computerChoice}, You won!`)
//     }

//     if (winner == "computer") {
//         alert(`You chose ${userChoice} and the computer chose ${computerChoice},You lost, sorry!`)
//     }

//     if (winner == "tie") {
//         alert(`You chose ${userChoice} and the computer chose ${computerChoice}, What fate, its a tie!`)
//     }


// //function to get input from user
// function getChoice() {
//     let keepGoing = true;
//     while (keepGoing) {
//         userChoice = prompt("Input Rock, Paper, or Scissors");
//         //make input all uppercase
//         userChoice = userChoice.toUpperCase();


//         //make sure input is either Rock Paper or Scissors
//         if ((userChoice !== "ROCK") && (userChoice !== "PAPER") && (userChoice !== "SCISSORS")) {
//             alert("Your choice is invalid please try again");


//         }

//         else {
//             keepGoing = false;
//         }
//     }
//     return userChoice;
// }





// //Computer makes choice
// function getComputerChoice() {
//     let choiceArray = ["ROCK", "PAPER", "SCISSORS"]
//     let compRandom = getRandomInt(3);
//     computerChoice = choiceArray[compRandom];
//     return computerChoice;
// }

// //random number generator
// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }



// //compare user input to computer
// //Rock > Scissor > Paper, Paper > Rock
// function getResults() {
//     if (userChoice == "ROCK") {

//         if (computerChoice == "SCISSORS") {
//             winner = "user";
//         }

//         else if (computerChoice == "PAPER") {
//             winner = "computer";
//         }
//         else if (computerChoice == "ROCK") {
//             winner = "tie";
//         }
//     }

//     if (userChoice == "PAPER") {

//         if (computerChoice == "ROCK") {
//             winner = "user";
//         }

//         else if (computerChoice == "SCISSORS") {
//             winner = "computer";
//         }
//         else if (computerChoice == "PAPER") {
//             winner = "tie";
//         }
//     }

//     if (userChoice == "SCISSORS") {

//         if (computerChoice == "PAPER") {
//             winner = "user";
//         }

//         else if (computerChoice == "ROCK") {
//             winner = "computer";
//         }
//         else if (computerChoice == "SCISSORS") {
//             winner = "tie";
//         }
//     }
//     return winner;
// }

