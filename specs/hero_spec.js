var assert = require( "assert" );
var Hero = require( "../hero" );
var Food = require( "../food" );

describe( "Hero", function() {

  var hero;
  var steak;
  var roastBeef;

  beforeEach(function() {
    hero = new Hero( "Enrique", "roast beef" );
    steak = new Food( "steak", 20 );
    roastBeef = new Food( "roast beef", 16 );
  })

  it("can be your hero, baby", function() {
    assert.equal( "Enrique", hero.name );
  });

  it("has health", function() {
    assert.equal( 100, hero.health );
  });

  it("has a favourite food", function() {
    assert.equal( "roast beef", hero.favouriteFood );
  });

  it("can say its name", function() {
    assert.equal( "I am Enrique!", hero.sayName() );
  });

  it("can eat food and replenish health", function() {
    hero.health = 50;
    hero.eat(steak);
    assert.equal( 70, hero.health );
  });

  it("gains more health with fave food", function() {
    hero.health = 50;
    hero.eat(roastBeef);
    assert.equal( 74, hero.health );
  })

  it("loses health if it eats poisoned food", function() {
    steak.isPoisonous = true;
    hero.eat(steak);
    assert.equal( 80, hero.health );
  })

})