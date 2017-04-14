'use strict';

function setComplement(array1, array2) {
  var complementedArray = []

  if (Array.isArray(array1) && Array.isArray(array2)) {
    array2.filter(function(x) {
      if (array1.indexOf(x) < 0) {
        complementedArray.push(x)
      }
    });
  return complementedArray;
  } else {
    return 'pass an array for EACH parameter'
  }
}
module.exports = setComplement;
