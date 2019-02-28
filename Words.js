const letter = require("./Letter");

const word = function (thisWord) {
    this.letters = [];
    for (var i=0; i < thisWord.length; i++) {
        var currentVal = thisWord.substr(i,1);
        var currentLetter = new letter(currentVal);
        this.letters.push(currentLetter);
    };
};

word.prototype.getWord = function() {
    var outVal = "";
    for (var i=0; i < this.letters.length; i++) {
        outVal = outVal + this.letters[i].check() + " ";
    };
    outVal = outVal.slice(0, outVal.length - 1);
    return outVal;
};

word.prototype.guessLetter = function(thisLetter) {
    for (var i=0; i < this.letters.length; i++) {
        this.letters[i].guess(thisLetter);
    };
};

word.prototype.allGuessed = function() {
    var result = true;
    var i = 0;
    while ((i < this.letters.length) && (result === true)) {
        if (! this.letters[i].guessed) {
            result = false;
        };
        i = i + 1;
    };
    return result;
};

module.exports = word;



