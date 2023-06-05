const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === " ") {
      continue 
    }
    if (results[sentence[i]] === undefined) {
    results[sentence[i]] = [];
  }
    results[sentence[i]].push(i);
  }
  return results
};
console.log(letterPositions("lighthouse in the house"));


const r = { l: 0 }
for (let key in r) {
  console.log(r[key])
}
console.log()
console.log()

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

const sentence = "lighthouse in the house"

assertArraysEqual(letterPositions("hello").h, [0]);