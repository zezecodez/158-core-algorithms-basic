'use strict';
// retirm collatz sequence for a given number

function collatzConjecture(num) {
  //array for storage?
  var collatzContainer = [];
  collatzContainer.push(num)


  if (isNaN(num) || num == null || num < 0) {
    return 'please insert an integer as a parameter';
  } else {
    while (num > 1) {
      if (num % 2 !== 0) {
        num = num * 3 + 1;
        collatzContainer.push(num);
      } else {
        num = num / 2;
        collatzContainer.push(num);
      }
    }
  }
  return collatzContainer;
}
  //if num is odd then multiply by 3 + 1 (3n+1)

module.exports = collatzConjecture;
