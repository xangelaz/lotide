const assertArraysEqual = function(array1, array2) {
  if (array1.length !== array2.length) {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
    return;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`);
        return;
      }
    }
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  }
};

const middle = function(array) {
  let newArray = [];
  let i = Math.ceil(array.length / 2 - 1)
  if (array.length < 3) {
    console.log(newArray)
  } else {
    if (array.length % 2 === 0) {
    newArray.push(array[i]);
    newArray.push(array[i + 1]);
  }
  else if (array.length % 2 !== 0) {
    newArray.push(array[i]);
  }
  console.log(newArray);
}
}

middle([1]) // => []
middle([1, 2]) // => []
middle([1, 2, 3]) // => [2]
middle([1, 2, 3, 4, 5]) // => [3]
middle([1, 2, 3, 4]) // => [2, 3]
middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
// new test below 
middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])
middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])
middle([3, 6, 9])
