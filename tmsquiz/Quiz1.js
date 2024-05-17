

//this picks a random number between 1 and 10
let number = Math.floor(Math.random() * 10) + 1;

let input = parseInt(prompt('Enter your guess (between 1 and 10)'));


if (input === number) {
    console.log("Good Work! You guessed it right.");
} else {
    console.log("Not Matched. The correct number was " + number + ".");
}
