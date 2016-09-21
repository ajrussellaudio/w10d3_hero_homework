var assert = require( "assert" );
var Food = require( "../food" );

describe( "Food", function() {

  var testFood;

  beforeEach(function() {
    testFood = new Food( "steak", 20 );
  })

  it( "has a name", function() {
    assert.equal( "steak", testFood.name );
  });

  it( "has a replenishment value", function() {
    assert.equal( 20, testFood.replenishment );
  });

})