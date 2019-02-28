const letter = function (letterIn) {
    this.val = letterIn;
    this.guessed = false;
};

letter.prototype.check = function() {
    if (this.val === "+") {
        return " ";
    } else {
        if (this.guessed) {
            return this.val;
        } else {
            return "_";
        };
    };
};


letter.prototype.guess = function (letterIn) {
    if ((letterIn === this.val) || (this.val === "+")) {
        this.guessed = true;
    };
};

module.exports = letter;


