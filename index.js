const word = require("./Words");
const inquirer = require("inquirer");


var testWord = new word("the+end");
var maxGuesses = testWord.letters.length + 5;
var currentGuess = 1;
var keepGoing = true;

while ((currentGuess < maxGuesses) && (keepGoing === true)) {
    console.log(testWord.getWord());
    inquirer.prompt([
        {
            type: "input",
            name: "myGuess",
            message: "Guess a letter:"
        }
    ]).then(function (results) {
        testWord.guessLetter(results.myGuess);
        console.log(testWord.getWord());
        if (testWord.allGuessed() === true) {
            console.log("You guessed it!");
            keepGoing = false;
        };
    });
    currentGuess = currentGuess + 1;

}

// console.log(testWord.getWord() + " " + testWord.allGuessed());
// testWord.guessLetter("t");
// console.log(testWord.getWord() + " " + testWord.allGuessed());
// testWord.guessLetter("h");
// console.log(testWord.getWord() + " " + testWord.allGuessed());
// testWord.guessLetter("e");
// console.log(testWord.getWord() + " " + testWord.allGuessed());
// testWord.guessLetter("n");
// console.log(testWord.getWord() + " " + testWord.allGuessed());
// testWord.guessLetter("d");
// console.log(testWord.getWord() + " " + testWord.allGuessed());

