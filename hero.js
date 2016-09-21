var Hero = function( name, favouriteFood ) {
  this.name = name;
  this.favouriteFood = favouriteFood;
  this.health = 100;
}

Hero.prototype = {
  sayName: function() {
    words = "I am " + this.name + "!";
    return words;
  },
  eat: function( food ) {
    var isFavouriteFood = ( food.name === this.favouriteFood );
    var healthFactor = isFavouriteFood ? 1.5 : 1 ;
    healthFactor *= food.isPoisonous ? -1 : 1 ;
    this.health += food.replenishment * healthFactor;
  }
}

module.exports = Hero;