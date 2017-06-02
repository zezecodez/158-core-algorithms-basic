var mocha = require('mocha');
var expect = require('chai').expect;
var fibonacci = require('../src/fibonacciFunctional.js');

describe('fibonacci()', function() {

  it('should be a function', function() {
    expect(fibonacci).to.be.a('function');
  });

  it('return message if parameter isNaN', function() {
    expect(fibonacci('yolo solo manolo')).to.equal('please insert a single, positive integer as the parameter');
  });

  it('return message if parameter is a negative number', function() {
    expect(fibonacci(-10)).to.equal('please insert a single, positive integer as the parameter');
  });

  it('return message if parameter is not an integer (it\'s a float)', function() {
    expect(fibonacci(0.2)).to.equal('please insert a single, positive integer as the parameter');
  });

  it('return message if no parameter is passed through function', function() {
    expect(fibonacci()).to.equal('please insert a single, positive integer as the parameter');
  });

  it('returns fibonacci sequence in array from 0 to nth number', function() {
    expect(fibonacci(8)).to.deep.equal([0, 1, 1, 2, 3, 5, 8, 13]);
    expect(fibonacci(3)).to.deep.equal([0, 1, 1]);
    expect(fibonacci(12)).to.deep.equal([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]);
  });

});
