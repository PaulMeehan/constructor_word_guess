const word = require("./Words");
const inquirer = require("inquirer");


var thisAnswer = "THE END";
var currentWord = new word(thisAnswer);
var maxGuesses = currentWord.letters.length + 5;
var currentGuess = 0;


function takeAGuess () {
    console.log(currentWord.getWord() + "\n");
    currentGuess = currentGuess + 1;
    inquirer.prompt([
        {
            type: "input",
            message: "Guess a letter:",
            name: "myGuess"
        }
    ]).then(function (results) {
        var theLetter = results.myGuess.toUpperCase();
        debugger;
        var keepGoing = true;
        if (theLetter === " ") {
            console.log ("Guessing a space does not make sense!");
        } else if (theLetter.length > 1) {
            console.log ("One letter at a time!");
        } else {
            currentWord.guessLetter(theLetter);
            if (currentWord.allGuessed() === true) {
                console.log("You guessed it!");
                keepGoing = false;
            } else {
                if (currentGuess >= maxGuesses) {
                    console.log("Sorry, you ran out of guesses!" + "\n");
                    console.log("The correct solution was: " + thisAnswer);
                    keepGoing = false;
                } else {
                    console.log((maxGuesses - currentGuess) + " guesses left." + "\n");
                }
            };
        };
        if (keepGoing) {
            takeAGuess();
        }
    });
};

console.log("starting");
takeAGuess();

