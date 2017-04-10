function factorial(num) {
  if (num < 0 || isNaN(num)){
    return false
  } else if (0 <= num <= 1) {
    return 1;
  } else {
    return num * (num -1);
  }
}

exports.factorial = factorial;
