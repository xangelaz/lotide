const assertArraysEqual = require('./assertArraysEqual');

const without = function(fullArray, removeArray) {
  let newArray = [];
  for (let element of fullArray) {
    let toAdd = true;
    for (let remove of removeArray) {
      if (element === remove) {
        toAdd = false;
      }
    }
    if (toAdd) {
      newArray.push(element);
    }
  }
  return newArray;
};

//test code:
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); 
assertArraysEqual(words, ["hello", "world", "lighthouse"]);