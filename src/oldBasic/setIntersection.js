'use strict';

function setIntersect(array1, array2) {
  var intersectedArray = [], i, z;

  if (Array.isArray(array1) && Array.isArray(array2)) {
    for (var i = 0; i < array1.length; i++) {
      for (var z = 0; z < array2.length; z++) {
        if(array1[i] === array2[z]) {
        intersectedArray.push(array1[i])
        }
      }
    }
    return intersectedArray;
  } else {
    return 'pass an array for EACH parameter'
  }
}

module.exports = setIntersect;
