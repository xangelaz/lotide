const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length - 1; i++) {
    results[i]
  }
  console.log(results);
};



/* i think the output will be something like:
h: 0
e: 1
l: 2, 3
o: 4
*/

// const assertArraysEqual = function(array1, array2) {
//   if (array1.length !== array2.length) {
//     console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
//     return;
//   } else {
//     for (let i = 0; i < array1.length; i++) {
//       if (array1[i] !== array2[i]) {
//         console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
//         return;
//       }
//     }
//     console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
//   }
// };

const sentence = "hello"

// assertArraysEqual(letterPositions("hello").h, [0]);