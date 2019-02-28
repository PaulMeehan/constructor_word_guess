const word = require("./Words");

var testWord = new word("the+end");
console.log(testWord.getWord() + " " + testWord.allGuessed());
testWord.guessLetter("t");
console.log(testWord.getWord() + " " + testWord.allGuessed());
testWord.guessLetter("h");
console.log(testWord.getWord() + " " + testWord.allGuessed());
testWord.guessLetter("e");
console.log(testWord.getWord() + " " + testWord.allGuessed());
testWord.guessLetter("n");
console.log(testWord.getWord() + " " + testWord.allGuessed());
testWord.guessLetter("d");
console.log(testWord.getWord() + " " + testWord.allGuessed());
