//return ARRAY of integers from 1-100
//for multiples of 3, use the string Fizz instead of the number
//for multiples of 5, use the string Buzz
// and for multiples of 15 use FizzBuzz


function fizzBuzzLoop() {
  var fizzedArray = [];
  var i;
  //iterate from 1-100 and replace integers with strings if needed
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
  // return fizzBuzz array
  return fizzedArray
}

module.exports = fizzBuzzLoop;
