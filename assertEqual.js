const assertEqual  = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
    return;
  }
  console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
};

assertEqual("Bootcamps", "Bootcamp");
assertEqual(1, 1);