const eqArrays = require('../eqArrays');

const assertArraysEqual = function(array1, array2) {
  if (!eqArrays(array1, array2)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
    return;
  }
  console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
};

module.exports = assertArraysEqual;

(assertArraysEqual([1, 2, 3], [1, 2, 3]));
(assertArraysEqual([1, 2, 4], [1, 2, 3]));
(assertArraysEqual([1, 2, 3], [1, 2, 3, 5]));