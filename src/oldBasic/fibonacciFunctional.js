'use strict';

function fibonacci(num) {

  if (num <= 0 || isNaN(num) || num % 1 != 0 || num == null) {
    return 'please insert a single, positive integer as the parameter';
  } else {
    return Array.apply(0, new Array(num))
      .reduce(function(fibSequence, currentValue, fibInput) {
        return fibSequence.concat(
          (fibInput < 2) ? fibInput : fibSequence[fibInput - 1] + fibSequence[fibInput - 2]
        );
      },
      []);
  }
}

module.exports = fibonacci;
