'use strict';

function collatzConjecture(num) {
  var collatzContainer = [];
  collatzContainer.push(num)

  if (isNaN(num) || num == null || num < 0 || num % 1 != 0) {
    return 'please insert a single, positive integer as the parameter';
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

module.exports = collatzConjecture;
