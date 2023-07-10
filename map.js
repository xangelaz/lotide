const assertArraysEqual = require('./assertArraysEqual');

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// test code:
assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
assertArraysEqual(map(words, word => word[1]), [ 'r', 'o', 'o', 'a', 'o' ]);
assertArraysEqual(map(words, word => word[2]), [ 'o', 'n', undefined, 'j', 'm' ]);