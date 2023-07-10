const assertEqual  = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    return;
  }
  console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const sentence = "lighthouse in the house";

const countLetters = function(sentence) {
  let letter = {};
  for (let i of sentence) {
    if (i !== " ") {
      if (letter[i] !== undefined) {
        letter[i] ++;
      } else {
        letter[i] = 1;
      }
    }
  }
  console.log(letter);
};

countLetters(sentence);