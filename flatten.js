const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(array) {
  let result = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      for (let nestedElement of element) {
        result.push(nestedElement);
      }
    } else {
      result.push(element);
    }
  }
  return result;
}

//test code:
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6])
assertArraysEqual(flatten([15, [78], [11, 22], [33]]), [15, 78, 11, 22, 33])