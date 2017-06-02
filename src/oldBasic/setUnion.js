'use strict';

function setUnion(array1, array2) {
  var i, concatArray, unitedArray = [];

  if (Array.isArray(array1) && Array.isArray(array2)) {
    concatArray = array1.concat(array2).sort();
    for (i = 0; i < concatArray.length; i++) {
      if (concatArray[i + 1] != concatArray[i]) {
        unitedArray.push(concatArray[i]);
      }
    }
  } else {
    return 'pass an array for EACH parameter'
  }
  return unitedArray

}

module.exports = setUnion;
