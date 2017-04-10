var mocha = require('mocha');
var expect = require('chai').expect;
var factorialLoop = require('../src/factorialLoop.js');

describe('factorialLoop()', function() {

  it('should be a function', function() {
    expect(factorialLoop).to.be.a('function')
  });

  it('should return the factorial of the number passed through the parameter', function() {
    expect(factorialLoop(3)).to.equal(6);
    expect(factorialLoop(5)).to.equal(120);
    expect(factorialLoop(4)).to.equal(24);
  });

  it('should return false if parameter is < 0 or NAN', function() {
    expect(factorialLoop(-1)).to.equal(false);
    expect(factorialLoop('oh yeeeee!')).to.equal(false);
    expect(factorialLoop(3.333)).to.equal(false);
  });

});
