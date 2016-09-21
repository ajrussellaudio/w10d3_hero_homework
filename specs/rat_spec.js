var assert = require( "assert" );
var Rat = require( "../rat" );
var Food = require( "../food" );


describe("Rat", function() {

  var rat;
  var steak;
  var popTarts;

  beforeEach(function() {
    rat = new Rat();
    steak = new Food( "steak", 20 );
    popTarts = new Food( "pop tarts", 5 );
  })

  it("can make food poisonous", function() {
    rat.touch(steak);
    assert( !popTarts.isPoisonous );
    assert( steak.isPoisonous );
  })

})