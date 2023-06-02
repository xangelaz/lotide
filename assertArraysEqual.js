const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false
  }
  else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    }
    return true
  }
}

const assertArraysEqual = function(array1, array2) {
  if (!eqArrays(array1, array2)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
    return;
  }
  console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
};

// const assertArraysEqual = function(array1, array2) {
//   if (eqArrays(array1, array2)) {
//     console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);  
//     return;
//   }
//   console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
// };

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

(assertArraysEqual([1, 2, 3], [1, 2, 3]));
(assertArraysEqual([1, 2, 4], [1, 2, 3]));
(assertArraysEqual([1, 2, 3], [1, 2, 3, 5]));