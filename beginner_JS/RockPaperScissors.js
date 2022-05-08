const result = ComputersMove();

function ComputersMove() {
    
    // Rock, Paper, Scissor choice made my computer

    const options = ["Rock", "Paper", "Scissor"];

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

    console.log(typeof computers_choice);
    // Get result into HTML
    document.getElementById("computer").innerHTML = computers_choice;
   
}