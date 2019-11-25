// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💯💯💯Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("javascript", "javascript");
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(5, 50);