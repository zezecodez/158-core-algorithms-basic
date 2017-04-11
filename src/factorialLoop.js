'use strict';

function factorialLoop(num) {
  var results = 1;
  if (num < 0 || isNaN(num) || num % 1 != 0) {
    return false;
  } else if (num <= 1) {
    return 1;
  } else {
    for (var i = 2; i <= num; i++) {
      results *= i;
    }
  }
  return results;
}

module.exports = factorialLoop;
