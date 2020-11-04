var Die = function() {};
Die.prototype.rollDie = function() {
    var random = Math.random();
    random = Math.ceil(random * 20);
    return random + 1;
};
