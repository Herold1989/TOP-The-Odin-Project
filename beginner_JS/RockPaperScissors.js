const options = ["Rock", "Paper", "Scissor"];

// Rock, Paper, Scissor choice made my computer

const result_computer = ComputersMove(options);

// Get result of Computers Move into HTML
document.getElementById("computer").innerHTML = result_computer;

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
    const random_choice = Math.floor(Math.random(max)*max);screenY
    const computers_choice = options[random_choice];
    return computers_choice;
   
}

// Players Move
const result_player = PlayersMove(options)

// Get result of Player's Move into HTML
document.getElementById("player").innerHTML = result_player;

function PlayersMove(options) {
    
    let players_choice = prompt("Choose your strategy at Rock, Paper, Scissor.").toLowerCase() // pop-up that asks for name

    // Check players_choice or throw alert if inappropriate players_choice
    if (players_choice == options[0].toLowerCase()) {
        console.log("You chose Rock")
    } else if (players_choice == options[1].toLowerCase()) {    
        console.log("You chose Paper")
    } else if (players_choice == options[2].toLowerCase()) {    
        console.log("You chose Scissor")

    } else {
    alert("Response must be either 'Rock', 'Paper' or 'Scissor' (case-insensitive). Try again!") // response

    }

    return players_choice[0].toUpperCase() + players_choice.slice(1).toLowerCase()

}



