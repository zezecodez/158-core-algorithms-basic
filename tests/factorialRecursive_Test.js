var mocha = require('mocha');
var expect = require('chai').expect;
var factorialRecursive = require('../src/factorialRecursive.js');

describe.only('factorialRecursive()', function() {

  it('should be a function', function() {
    expect(factorialRecursive).to.be.a('function')
  });

  it('should return the factorial of the number passed through the parameter', function() {
    expect(factorialRecursive(3)).to.equal(6);
    expect(factorialRecursive(5)).to.equal(120);
    expect(factorialRecursive(4)).to.equal(24);
  });

  it('should return false if parameter is less than 0, NAN, or not a whole mumber', function() {
    expect(factorialRecursive(-1)).to.equal(false);
    expect(factorialRecursive('yeeeee!')).to.equal(false);
    expect(factorialRecursive(3.333)).to.equal(false);
  });

});
