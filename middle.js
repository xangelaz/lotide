const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');

const middle = function(array) {
  if (array.length < 3) {
    return [];
  }
  let i = Math.ceil(array.length / 2 - 1);
  if (array.length % 2 === 0) {
    return [array[i], array[i + 1]];
  }
  return [array[i]];
};

module.exports = middle;
