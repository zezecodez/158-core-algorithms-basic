var mocha = require('mocha');
var expect = require('chai').expect;
var fizzBuzzRecursive = require('../src/fizzBuzzRecursive.js');


describe('fizzBuzzRecursive()', function() {

  it('it is a function', function() {
    expect(fizzBuzzRecursive).to.be.a('function');
  })

  it('returns an array of numbers from 1 - 100', function() {
    expect(fizzBuzzRecursive(100)).to.have.length(100);
  })

  it('replace integers divisble by 3 with string "Fizz" ', function() {
    expect(fizzBuzzRecursive(100)[2]).to.equal('Fizz');
    expect(fizzBuzzRecursive(100)[98]).to.equal('Fizz');
  })

  it('replace integers divisble by 3 with string "Buzz" ', function() {
    expect(fizzBuzzRecursive(100)[4]).to.equal('Buzz');
    expect(fizzBuzzRecursive(100)[99]).to.equal('Buzz');
  })

  it('replace integers divisble by 15 with string "FizzBuzz" ', function() {
    expect(fizzBuzzRecursive(100)[14]).to.equal('FizzBuzz');
    expect(fizzBuzzRecursive(100)[29]).to.equal('FizzBuzz');
  })

  it('returns integers that are not divisible by 3, 5, or 15 ', function() {
    expect(fizzBuzzRecursive(100)[3]).to.equal(4);
    expect(fizzBuzzRecursive(100)[55]).to.equal(56);
  })

})
