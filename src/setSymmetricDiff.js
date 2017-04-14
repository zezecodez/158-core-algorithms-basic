'use strict';

function setSymDiff(array1, array2) {
  var symDiffArray = [];

  if (Array.isArray(array1) && Array.isArray(array2)) {

    array1.filter(function(num) {
      if (array2.indexOf(num) < 0) {
        symDiffArray.push(num);
      }
    });

    array2.filter(function(num) {
      if (array1.indexOf(num) < 0) {
        symDiffArray.push(num);
      }
    });

    return symDiffArray;

  } else {
    return 'pass an array for EACH parameter'
  }

}
module.exports = setSymDiff;
