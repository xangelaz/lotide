const takeUntil = function(array, callback) {
  newArray = [];
  for (let element of array) {
    newArray.push(element);
    if (element < 0) {
      break
    }
  }
  console.log(newArray)
}


let array = [1, 2, 5, 7, 2, -1, 2, 4, 5];
let callback = x => x < 0
takeUntil(array, callback)

// test code below 
// const eqArrays = function(array1, array2) {
//   if (array1.length !== array2.length) {
//     return false
//   }
//   else {
//     for (let i = 0; i < array1.length; i++) {
//       if (array1[i] !== array2[i]) {
//         return false;
//       }
//     }
//     return true
//   }
// }

// const assertArraysEqual = function(array1, array2) {
//   if (!eqArrays(array1, array2)) {
//     console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
//     return;
//   }
//   console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
// };

// assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ])
// assertArraysEqual(map(words, word => word[1]), [ 'r', 'o', 'o', 'a', 'o' ])
// assertArraysEqual(map(words, word => word[2]), [ 'o', 'n', undefined, 'j', 'm' ])
