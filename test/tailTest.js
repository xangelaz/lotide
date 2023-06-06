const tail = require('../tail')
const assertEqual = require('../assertEqual');

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
// some tests
assertEqual(tail([5,6,7]).length, 2);
assertEqual(tail([3]).length, 0);
assertEqual(tail([]).length, 0);