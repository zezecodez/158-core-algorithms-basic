var mocha = require('mocha');
var expect = require('chai').expect;
var collatzConjecture = require('../src/collatzConjecture.js');

describe.only('collatzConjecture()', function() {

  it('should be a function', function() {
    expect(collatzConjecture).to.be.a('function');
  });

  it('return message if parameter isNaN', function() {
    expect(collatzConjecture('yolo solo manolo')).to.equal('please insert an integer as a parameter');
    expect(collatzConjecture('yolo solo manolo')).to.equal('please insert an integer as a parameter');
  });

  it('return message if no parameter is passed through function upon invocation', function() {
    expect(collatzConjecture('yolo solo manolo')).to.equal('please insert an integer as a parameter');
  });

  it('return message if parameter is negative number', function() {
    expect(collatzConjecture(-3)).to.deep.equal('please insert an integer as a parameter');
  });
  
  it('returns an array with the collatz sequence of the number that is passed as parameter', function() {
    expect(collatzConjecture(8)).to.deep.equal([8, 4, 2, 1]);
    expect(collatzConjecture(5)).to.deep.equal([5, 16, 8, 4, 2, 1]);
    expect(collatzConjecture(3)).to.deep.equal([3, 10, 5, 16, 8, 4, 2, 1]);
  });

});
