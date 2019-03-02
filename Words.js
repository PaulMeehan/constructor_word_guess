// Requires the Letter constructor.
const letter = require("./Letter");

// Constructor for the entire word or phrase.
const word = function (thisWord) {
    this.letters = [];                                 // Array of letters that make up the word or phrase.
    // For each letter in the word or phrase, add a letter constructor to the array.
    for (var i=0; i < thisWord.length; i++) {
        // Determine the current letter of the phrase.
        var currentVal = thisWord.substr(i,1);
        // Build a new letter contructor for that letter.
        var currentLetter = new letter(currentVal);
        // Push the constructor to the letters array.
        this.letters.push(currentLetter);
    };
};

word.prototype.getWord = function() {
// Returns a string that contains the letters that have been guessed and underscores for those that have not been guessed.    
    var outVal = "";
    for (var i=0; i < this.letters.length; i++) {
        outVal = outVal + this.letters[i].check() + " ";    // Add a space after the letter or underscore for aesthetics.
    };
    // Remove the last, unnecessary space added to the end.
    outVal = outVal.slice(0, outVal.length - 1);
    // Return the sting that was built.
    return outVal;
};

word.prototype.guessLetter = function(thisLetter) {
// Compares the provided letter with each letter of the answer.  
// This function does not return any values, but logs to the console a message stating whether the letter matches or not.
// Called "guess" function sets the flag in the letter constructor if the letter matches.
    var letterFound = false;     // Flag indicating that the provided letter was found in the answer.
    for (var i=0; i < this.letters.length; i++) {
        if (this.letters[i].guess(thisLetter)) {
            letterFound = true;
        };
    };
    // Write message to console based on whether letter was found or not.
    console.log("\n");
    if (letterFound) {
        console.log ("Correct!");
    } else {
        console.log("Nope.");
    };
    console.log("\n");
};

word.prototype.allGuessed = function() {
// Returns True if all letters of the answer have been guessed.  Otherwise returns False.
    var result = true;
    var i = 0;
    // Examine each letter until entire answer has been checked or when the a letter has not been found.
    while ((i < this.letters.length) && (result === true)) {
        if (! this.letters[i].guessed) {
            result = false;
        };
        i = i + 1;
    };
    return result;
};

// Make constructor available to other modules.
module.exports = word;



