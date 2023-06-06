const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');


assertArraysEqual(assertEq([1, 2, 3], [1, 2, 3]));
(assertArraysEqual([1, 2, 4], [1, 2, 3]));
(assertArraysEqual([1, 2, 3], [1, 2, 3, 5]));