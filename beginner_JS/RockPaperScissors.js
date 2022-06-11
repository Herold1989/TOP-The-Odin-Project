// Make responsive RPS Game-Code
const options = ["rock", "paper", "scissor"]

// to grab your score container
const humanScore = document.querySelector('.yourPoints.yourScore');

// to grab computer's score container
const compScore = document.querySelector('.computerPoints.computerScore');

// to grab result container
const result = document.querySelector('.resultsContainer');


const rounds  = 5;
let score_player = 0;
let score_computer = 0;


// Computers Move
function ComputersMove(options) {

    // Chose a option randomly, depending on number of different 
    // options to chose from.

    // minimal number of options is 1 (trivial)
    const min = 1;

    // maximal number of otions depends on lenght of options given
    // Remember: JS arrays start at 0, but random is exclusive on max
    const max = options.length;

    // Draw random number between min and max, random number 
    // becomes position in array the computer chooses.
    // Displayed string at this position is strategy played.
    const random_choice = Math.floor(Math.random(max) * max);
    const computers_choice = options[random_choice];
    console.log("The computer chose: " + computers_choice)
    return computers_choice;
}

function DetermineWinner(result_computer, result_player) {

    if (result_computer === result_player) {
        const winner = "Tie"
        //console.log(winner)
        return winner
    }

    else if (result_computer == "rock" && result_player == "paper") {
        const winner = "You win"
        //console.log(winner)
        return winner

    }

    else if (result_computer == "rock" && result_player == "scissor") {
        const winner = "You loose"
        //console.log(winner)
        return winner

    }

    else if (result_computer == "paper" && result_player == "scissor") {
        const winner = "You win"
        //console.log(winner)
        return winner

    }

    else if (result_computer == "paper" && result_player == "rock") {
        const winner = "You loose"
        //console.log(winner)
        return winner

    }

    else if (result_computer == "scissor" && result_player == "rock") {
        const winner = "You win"
        // console.log(winner)
        return winner

    }

    else if (result_computer == "scissor" && result_player == "paper") {
        const winner = "You loose"
        //console.log(winner)
        return winner

    }

    else {
        const winner = "Inapproriate choice made. Try again."
        return winner

    }
        return winner
}

function countPoints(winner) {

    if (score_player < rounds && score_computer < rounds) {
    if (winner == "You win") {

        score_player = score_player + 1;
        
        console.log("You win: New Score Player: " + score_player)
        result.textContent = "You win: New Score Player: " + score_player
        document.getElementById("computerPoints computerScore").innerHTML = score_computer;
        document.getElementById("yourPoints yourScore").innerHTML = score_player;
            
    } else if (winner == "You loose") {
               
        score_computer = score_computer + 1;
        console.log("Computer wins: New Score Computer: " + score_computer)
        result.textContent = "Computer wins: New Score Computer: " + score_computer
        document.getElementById("computerPoints computerScore").innerHTML = score_computer;
        document.getElementById("yourPoints yourScore").innerHTML = score_player;
        
    } else {
        console.log("No one got any points: It's a tie.")
        result.textContent = "No one got any points: It's a tie."
        document.getElementById("computerPoints computerScore").innerHTML = score_computer;
        document.getElementById("yourPoints yourScore").innerHTML = score_player;
    }
} 

if (score_player == rounds) {
    result.textContent = "Congratulations! You beat the computer! You are the smartest human alive!"
} else if (score_computer == rounds) {
    result.textContent = "Good try! The computer got you this time. Try again soon!"}

}

// add action on buttons
const rock_btn = document.querySelector('#rock');
rock_btn.addEventListener('click', () => {
    playerSelection = 'rock';
    console.log("You chose: " + playerSelection);
    computerSelection = ComputersMove(options);
    winner = DetermineWinner(computerSelection, playerSelection);
    console.log(winner);
    countPoints(winner)
})

const paper_btn = document.querySelector('#paper');
paper_btn.addEventListener('click', () => {
    playerSelection = 'paper';
    console.log("You chose: " + playerSelection)
    computerSelection = ComputersMove(options);
    winner = DetermineWinner(computerSelection, playerSelection);
    console.log(winner);
    countPoints(winner)
})

const scissor_btn = document.querySelector('#scissor');
scissor_btn.addEventListener('click', () => {
    playerSelection = 'scissor';
    console.log("You chose: " + playerSelection)
    computerSelection = ComputersMove(options);
    winner = DetermineWinner(computerSelection, playerSelection);
    console.log(winner);
    countPoints(winner)
})

const again_btn = document.querySelector('#again');
again_btn.addEventListener('click', () => {
    console.log('pressed again')
    score_player = 0;
    score_computer = 0;

    countPoints(winner)
})


// Add scores to DOM
//document.getElementById("computerPoints computerScore").innerHTML = score_computer;
//document.getElementById("yourPoints yourScore").innerHTML = score_player;

// // Current options availabe: Warning: Changes here effect working of 
// // code. If you intend to play with more options, change 'PlayersMove' and 
// // 'DetermineWinner' functions as well.
// const options = ["Rock", "Paper", "Scissor"];

// // Number of rounds to play until a winner is announced. 
// // Change is to whatever number you like.

// const rounds  = 3;
// let score_player = 0;
// let score_computer = 0;

// for (let i = 0; i < rounds; i++) {

//     subgame_winner = RPS(options, i)

//     if (subgame_winner == "You win") {

//        score_player = score_player + 1;

//         console.log("You win: New Score Player: " + score_player)

//        //document.getElementById("score_computer").innerHTML = score_computer;
//        // document.getElementById("score_player").innerHTML = score_player;
    
//     } else if (subgame_winner == "You loose") {
       
//         score_computer = score_computer + 1;
//         console.log("Computer wins: New Score Computer: " + score_computer)

//        // document.getElementById("score_computer").innerHTML = score_computer;
//        // document.getElementById("score_player").innerHTML = score_player;

//     } else {
//         console.log("No one got any points: It's a tie.")
//        // document.getElementById("score_computer").innerHTML = score_computer;
//         // document.getElementById("score_player").innerHTML = score_player;
//     }

// }

// const victor = MatchWinner(score_computer, score_player);

// console.log(typeof victor)
// document.getElementById("matchwinner").innerHTML = victor;

// function MatchWinner (score_computer, score_player) {

//     if (score_computer > score_player) {
//         const matchwinner = "The Computer wins the overall Game."
//         console.log(matchwinner)
//         return matchwinner

//     } 
    
//     else if (score_computer == score_player) {
//         const matchwinner = "There is no winner of the overall Game: It's a tie."
//         console.log(matchwinner)
//         return matchwinner


//     }

//     else {
//         const matchwinner = "You are the winner of the overall Game :) "
//         console.log(matchwinner)
//         return matchwinner

//     }
// }

// function RPS(options, rounds) {

//     // Rock, Paper, Scissor choice made my computer

//     const result_computer = ComputersMove(options);

//     // Get result of Computers Move into HTML
//     //document.getElementById("computer").innerHTML = result_computer;

//     // Computers Move
//     function ComputersMove(options) {
    
//     // Chose a option randomly, depending on number of different 
//     // options to chose from.

//     // minimal number of options is 1 (trivial)
//     const min = 1;
    
//     // maximal number of otions depends on lenght of options given
//     // Remember: JS arrays start at 0, but random is exclusive on max
//     const max = options.length;

//     // Draw random number between min and max, random number 
//     // becomes position in array the computer chooses.
//     // Displayed string at this position is strategy played.
//     const random_choice = Math.floor(Math.random(max)*max);screenY
//     const computers_choice = options[random_choice];
//     console.log("The computer chose: " + computers_choice)
//     return computers_choice;
   
//     }

//     // Players Move
//     const result_player = PlayersMove(options)

//     // Get result of Player's Move into HTML
//     //document.getElementById("player").innerHTML = result_player;

//     function PlayersMove(options) {
    
//         let players_choice = prompt("Choose your strategy at Rock, Paper, Scissor.").toLowerCase() // pop-up that asks for name

//         // Check players_choice or throw alert if inappropriate players_choice
//         if (players_choice == options[0].toLowerCase()) {
//             console.log("You chose Rock")
//         } else if (players_choice == options[1].toLowerCase()) {    
//             console.log("You chose Paper")
//         } else if (players_choice == options[2].toLowerCase()) {    
//             console.log("You chose Scissor")

//         } else {
//         alert("Response must be either 'Rock', 'Paper' or 'Scissor' (case-insensitive). Try again!") // response

//         }

//         return players_choice[0].toUpperCase() + players_choice.slice(1).toLowerCase()

//     }


//     const result = DetermineWinner(result_computer,result_player)

//     // Get Winner into HTML
//    // document.getElementById("winner").innerHTML = result;


//     function DetermineWinner(result_computer,result_player) {
        
//         if (result_computer == result_player) {
//             const winner = "Tie"
//             //console.log(winner)
//             return winner
//         }

//         else if (result_computer == "Rock" && result_player == "Paper") {
//             const winner = "You win"
//             //console.log(winner)
//             return winner

//         }

//         else if (result_computer == "Rock" && result_player == "Scissor") {
//             const winner = "You loose"
//             //console.log(winner)
//             return winner

//         }

//         else if (result_computer == "Paper" && result_player == "Scissor") {
//             const winner = "You win"
//             //console.log(winner)
//             return winner

//         }

//         else if (result_computer == "Paper" && result_player == "Rock") {
//             const winner = "You loose"
//             //console.log(winner)
//             return winner

//         }

//         else if (result_computer == "Scissor" && result_player == "Rock") {
//             const winner = "You win"
//         // console.log(winner)
//             return winner

//         }

//         else if (result_computer == "Scissor" && result_player == "Paper") {
//             const winner = "You loose"
//             //console.log(winner)
//             return winner

//         }

//         else {
//             const winner = "Inapproriate choice made. Try again."
//             return winner

//         }

//         return winner
//     }

// return result

// }
