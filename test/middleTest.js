const middle = require('../middle')
const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');


assertArraysEqual(middle([1]), []) // => [])
assertArraysEqual(middle([1, 2]), []) // => [])
assertArraysEqual(middle([1, 2, 3]), [2]) // => [2])
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3])
assertArraysEqual(middle([1, 2, 3, 4]), [2,3]) // => [2, 3])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]) // => [3, 4])
// extra tests below )
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]), [7])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]), [8, 9])
assertArraysEqual(middle([3, 6, 9]), [6])