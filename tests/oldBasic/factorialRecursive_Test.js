var mocha = require('mocha');
var expect = require('chai').expect;
var factorialRecursive = require('../src/factorialRecursive.js');

describe('factorialRecursive()', function() {

  it('should be a function', function() {
    expect(factorialRecursive).to.be.a('function')
  });

  it('should return the factorial of the number passed through the parameter', function() {
    expect(factorialRecursive(3)).to.equal(6);
    expect(factorialRecursive(5)).to.equal(120);
    expect(factorialRecursive(4)).to.equal(24);
  });

  it('should return false if parameter is negative number', function() {
    expect(factorialRecursive(-1)).to.equal(false);
    expect(factorialRecursive(-15)).to.equal(false);
    expect(factorialRecursive(-100)).to.equal(false);
  });

  it('should return false if parameter is NAN', function() {
    expect(factorialRecursive('oh yeeeee!')).to.equal(false);
    expect(factorialRecursive('all day!!')).to.equal(false);
  });

  it('should return false if parameter is a float/decimal/!integer', function() {
    expect(factorialRecursive(3.333)).to.equal(false);
    expect(factorialRecursive(0.333)).to.equal(false);
  });

  it('should return false if parameter is a float/decimal/!integer', function() {
    expect(factorialRecursive()).to.equal(false);
  });

});
