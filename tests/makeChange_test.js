var mocha = require('mocha');
var expect = require('chai').expect;
var makeChange = require('../src/makeChange.js');

describe('makeChange()', function() {

  it('should be a function', function() {
    expect(makeChange).to.be.a('function');
  });

  it('return message if "no change" message if there is no change to return', function() {
    expect(makeChange(100, 100)).to.equal('No change for you!');
    expect(makeChange(222, 88)).to.equal('No change for you!');
  });

  it('return message if "no change" message if no parameter is passed to invoked function', function() {
    expect(makeChange()).to.equal('No change for you!');
  });

  it('return message if "no change" message if only 1 parameter is passed', function() {
    expect(makeChange(200)).to.equal('No change for you!');
  });

  it('returns object with key-value pairs representing number of coins returned in change prioritizing larger coins', function() {
    expect(makeChange(200,400)).to.deep.equal({pennies: 0, nickels: 0, dimes: 0, quarters: 8});
    expect(makeChange(200,299)).to.deep.equal({pennies: 4, nickels: 0, dimes: 2, quarters: 3});
  });

});
