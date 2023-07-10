const assertArraysEqual = require('./assertArraysEqual');

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


// test code:
const sentence = "lighthouse in the house"

assertArraysEqual(letterPositions("hello").h, [0]);