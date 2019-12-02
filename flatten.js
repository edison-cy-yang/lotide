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

const flatten = function(array) {
  let flattenedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      flattenedArray.push(array[i]);
    } else {
      for (let j = 0; j < array[i].length; j++) {
        flattenedArray.push(array[i][j]);
      }
    }
  }
  return flattenedArray;
};

assertArraysEqual(eqArrays(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]), true);
assertArraysEqual(eqArrays(flatten([1, 2, [3,4,5,6]]), [1,2]), true);

module.exports = flatten;