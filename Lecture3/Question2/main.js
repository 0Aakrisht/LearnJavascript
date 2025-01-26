// Create a game where you start with any random game number. Ask the user to keep
// guessing the game number until the user enters correct value.
let num;

do {
    num = prompt("Enter any number: ");
    
    if (num == 10) {
        console.log("You win");
    } else {
        console.log("Try again");
    }
} while (num != 10); // Continue the loop until the user enters 10
