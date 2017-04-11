'use strict';

function fizzBuzzLoop() {
  var fizzedArray = [];
  var i;
  
  for (i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 == 0) {
      fizzedArray.push('FizzBuzz');
    } else if (i % 3 === 0) {
      fizzedArray.push('Fizz');
    } else if (i % 5 === 0) {
      fizzedArray.push('Buzz');
    } else {
      fizzedArray.push(i);
    }
  }
  return fizzedArray
}

module.exports = fizzBuzzLoop;
