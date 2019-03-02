const letter = function (letterIn) {
// Constructor for the letter of a word.
    this.val = letterIn;     // The letter.
    this.guessed = false;    // Flag indicating whether the letter has been guessed or not.
};

letter.prototype.check = function() {
// Returns the letter if it has been guessed already.  Otherwise returns the underscore character.
    if (this.val === " ") {
        return " ";          // The space charcater is always returned as "guessed".
    } else {
        if (this.guessed) {  // If the flag indicates the letter has been guessed.
            return this.val; // Return the letter.
        } else {
            return "_";      // Return the underscore character.
        };
    };
};

letter.prototype.guess = function (letterIn) {
// If the input parameter matches the letter, sets the "guessed" flag to true.
// Returns True if the input parameter matches the letter.  Otherwise returns False.
    if ((letterIn === this.val) || (this.val === " ")) {    // The space characters is always accepted as guessed.
        this.guessed = true;
    };
    if (letterIn === this.val) {
        return true;
    } else {
        return false;
    };
};

// Make the constructor available to other modules.
module.exports = letter;


