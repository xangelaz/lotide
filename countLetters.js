const assertEqual = require('./assertEqual');

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
  return letter;
};

//test code:
const sentence = "lighthouse in the house";
assertEqual(countLetters(sentence).h, 4);