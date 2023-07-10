const assertArraysEqual = require('./assertArraysEqual');

const takeUntil = function(array, callback) {
  let newArray = [];
  for (let element of array) {
    if (callback(element)) {
      break;
    }
    newArray.push(element);
  }
  return newArray;
};

//test code:
const array = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const callback = x => x < 0;

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');

assertArraysEqual(takeUntil(array, callback), [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(takeUntil(data2, x => x === ','), [ 'I\'ve', 'been', 'to', 'Hollywood' ]);