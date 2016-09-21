var Rat = function() {
  // what does a rat do?
};

Rat.prototype.touch = function( thing ) {
  thing.isPoisonous = true;
};

module.exports = Rat;