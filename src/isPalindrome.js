'use strict';

function isPalindrome(string) {
  if (typeof string != 'string' || string === null) {
    return false
  }

  var alphaNumericString = string.replace(/[^\w]_?/g, '').toLowerCase();
  
  var reversedString = alphaNumericString.split('').reverse().join('');

  return alphaNumericString === reversedString;
}

module.exports = isPalindrome;
