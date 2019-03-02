// Require the words constructor.
const word = require("./Words");
// Requires the "inquirer" module for obtaining user input.
const inquirer = require("inquirer");

// Create an array of all of the possible answer words or phrases.
var answersArray = ["THE BIG BANG THEORY", "THE GOLDBERGS", "SEINFELD", "MODERN FAMILY", "TWILIGHT ZONE", "THE OFFICE"];
var currentWord;        // Variable for the current Word constructor.
var maxGuesses = 0;     // Maximum number of guesses a user has to determine the answer.
var currentGuess = 0;   // The current guess number.
var thisAnswer = "";    // The current answer.

function pickAWord () {
// Randomly picks a word from the answers array and sets variables based on that value.

    // If there are still answers that have not been attempted yet, do the following:
    if (answersArray.length > 0) {
        // Display message for new game.
        console.log ("\n" + "New phrase:")
        // Pick a random number from 0 to the number of elements currently in the answers array.
        var rnd = Math.floor(Math.random() * answersArray.length);
        // Set a variable to the randomly selected value.
        thisAnswer = answersArray[rnd];
        // Remove that element from the array so that it cannot be picked more than once.
        answersArray.splice(rnd, 1);
        // Build a constructor with the new value.
        currentWord = new word(thisAnswer);
        // MaxGuesses is the number of letters in the word or phrase plus 5.
        maxGuesses = currentWord.letters.length + 5;
        // Initialize the current guess number.
        currentGuess = 0;
        // Call the process to allow the user to guess a letter.
        takeAGuess();
    } else {
        // Provide user with message if there are no more answers to guess.
        console.log ("\n" + "Game over!");
    };
};

function takeAGuess () {
// Prompts the user for a letter guess, calls the fuctions to determine whether it is a match, and 
// provides messages if entire phrase is guessed or the user reached the maximum number of guesses.

    // Display the current results of guessed letters and underscore characters.
    console.log(currentWord.getWord() + "\n");
    // Increment the guess counter.
    currentGuess = currentGuess + 1;
    // Prompt the user to guess a letter.
    inquirer.prompt([
        {
            type: "input",
            message: "Guess a letter:",
            name: "myGuess"
        }
    ]).then(function (results) {
        // Convert the user's guess to upper case.
        var theLetter = results.myGuess.toUpperCase();
        var keepGoing = true;         // Flag indicating whether the user can continue to guess at this answer.

        // Error check the user's input for spaces or more than one character.
        if (theLetter === " ") {
            console.log ("Guessing a space does not make sense!");
        } else if (theLetter.length === 0) {
            console.log("Be sure to type in a letter.");
        } else if (theLetter.length > 1) {
            console.log("One letter at a time!");
        } else {
            // Call function to set flags in letter constructor if there is a match.
            currentWord.guessLetter(theLetter);
            // Display message if all letters in the answer have been guessed.
            if (currentWord.allGuessed() === true) {
                console.log("You guessed it!" + "\n");
                console.log(thisAnswer);
                keepGoing = false;
            } else {
                // Display message if the user has made the maximum number of guesses.
                if (currentGuess >= maxGuesses) {
                    console.log("Sorry, you ran out of guesses!" + "\n");
                    console.log("The correct solution was: " + thisAnswer);
                    keepGoing = false;
                } else {
                    // Display message showing how many guesses the user has left.
                    console.log((maxGuesses - currentGuess) + " guesses left." + "\n");
                }
            };
        };
        // If the conditions allow for user to make more guesses for the current answer, do the following:
        if (keepGoing) {
            // Call the process to allow the user to guess a letter.
            takeAGuess();
        } else {
            // Call the process to pick a new word and start another round.
            pickAWord();
        }
    });
};

console.log("Welcome!" + "\n");

// Call the process to pick a new word and start the game.
pickAWord();
