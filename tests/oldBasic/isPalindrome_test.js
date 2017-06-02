var mocha = require('mocha');
var expect = require('chai').expect;
var isPalindrome = require('../src/isPalindrome.js');

describe('isPalindrome()', function() {

  it('should be a function', function() {
    expect(isPalindrome).to.be.a('function')
  });

  it('should return true if the string passed in as a parameter is a palindrome', function() {
    expect(isPalindrome('Amore, Roma.')).to.equal(true);
    expect(isPalindrome('Borrow or rob?')).to.equal(true);
    expect(isPalindrome('UFO tofu?')).to.equal(true);
  });

  it('should return false if the parameter is not a string', function() {
    expect(isPalindrome(3)).to.equal(false);
    expect(isPalindrome(7)).to.equal(false);
  });

  it('should return false if the string passed in as a parameter is not a palindrome', function() {
    expect(isPalindrome('Zeze iz awezome')).to.equal(false);
    expect(isPalindrome('homies out here limpin\'')).to.equal(false);
  });

  it('should return false if function is invoked without a parameter', function() {
    expect(isPalindrome()).to.equal(false);
  });

});
