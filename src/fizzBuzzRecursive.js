'use strict';

function fizzBuzzRecursive(a) {
  var fizzedArray = [];

  if (a === 1) {
    fizzedArray.push(a);
  } else {
    if (a % 15 === 0) {
      fizzedArray.push('FizzBuzz')
    } else if (a % 3 === 0) {
      fizzedArray.push('Fizz')
    } else if (a % 5 === 0) {
      fizzedArray.push('Buzz')
    } else {
      fizzedArray.push(a);
    }
    return fizzBuzzRecursive(a - 1).concat(fizzedArray);
  }
  return fizzedArray.reverse();
}
module.exports = fizzBuzzRecursive;
