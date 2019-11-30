const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  else {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        if(Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
          if (!eqArrays(arr1[i], arr2[i])) {
            return false;
          }
        } else {
          return false;
        }
      
      }
    }
    return true;
  }
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`💯💯💯Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]); ///fail
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);

assertArraysEqual([[2, 3], [4]], [[2, 3], [4]]);