var mocha = require('mocha');
var expect = require('chai').expect;
var fizzBuzzLoop = require('../src/fizzBuzzLoop.js');


describe.only('fizzBuzzLoop()', function() {

  it('it is a function', function() {
    expect(fizzBuzzLoop).to.be.a('function');
  })

  it('returns an array of numbers from 1 - 100', function() {
    expect(fizzBuzzLoop()).to.have.length(100);
  })

  it('replace integers divisble by 3 with string "Fizz" ', function() {
    expect(fizzBuzzLoop()[2]).to.equal('Fizz');
    expect(fizzBuzzLoop()[98]).to.equal('Fizz');
  })

  it('replace integers divisble by 3 with string "Buzz" ', function() {
    expect(fizzBuzzLoop()[4]).to.equal('Buzz');
    expect(fizzBuzzLoop()[99]).to.equal('Buzz');
  })

  it('replace integers divisble by 15 with string "FizzBuzz" ', function() {
    expect(fizzBuzzLoop()[14]).to.equal('FizzBuzz');
    expect(fizzBuzzLoop()[29]).to.equal('FizzBuzz');
  })

  it('returns integers that are not divisible by 3, 5, or 15 ', function() {
    expect(fizzBuzzLoop()[3]).to.equal(4);
    expect(fizzBuzzLoop()[55]).to.equal(56);
  })

})
