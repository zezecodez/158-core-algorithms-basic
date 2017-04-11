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

  it('should return false if parameter is negative number', function() {
    expect(factorialLoop(-1)).to.equal(false);
    expect(factorialLoop(-15)).to.equal(false);
    expect(factorialLoop(-100)).to.equal(false);
  });

  it('should return false if parameter is NAN', function() {
    expect(factorialLoop('oh yeeeee!')).to.equal(false);
    expect(factorialLoop('all day!!')).to.equal(false);
  });

  it('should return false if parameter is a float/decimal/!integer', function() {
    expect(factorialLoop(3.333)).to.equal(false);
    expect(factorialLoop(0.333)).to.equal(false);
  });

  it('should return false if parameter is a float/decimal/!integer', function() {
    expect(factorialLoop()).to.equal(false);
  });

});
