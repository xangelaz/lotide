const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) {
    if (Array.isArray(object1[key]) === true && Array.isArray(object2[key] === true)) {
      eqArrays(Object.keys(object1), Object.keys(object2) === true);
    } else {
      for (let i = 0; i < Object.keys(object1).length; i++) {
        if (object1[i] !== object2[i]) {
          return false;
        }
      }
    }
  }
  return true;
};

//test code:
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false

assertEqual(eqObjects(multiColorShirtObject , anotherMultiColorShirtObject), true);
assertEqual(eqObjects(multiColorShirtObject , longSleeveMultiColorShirtObject), false);