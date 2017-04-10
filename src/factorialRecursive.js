function factorialRecursive(num) {
  if (num < 0 || isNaN(num) || num % 1 != 0) {
    return false
  } else if (num <= 1) {
    return 1;
  } else {
    return factorialRecursive(num - 1) * num;
  }
}

module.exports = factorialRecursive;
