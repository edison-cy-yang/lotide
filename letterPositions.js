const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i])
        return false;
    }
    return true;
  }
};

const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💯💯💯Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    let character = sentence[i];
    if (character !== " ") {
      if (!results[character]) {
        results[character] = [i];
      } else {
        results[character].push(i);
      }
    }
  }
  return results;
};

const result = letterPositions("hello");
assertArraysEqual(eqArrays(result["h"], [0]), true);
assertArraysEqual(eqArrays(result["e"], [1]), true);
assertArraysEqual(eqArrays(result["l"], [2,3]), true);
assertArraysEqual(eqArrays(result["o"], [4]), true);