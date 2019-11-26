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


const middle = function(array) {
  let midElements = [];
  if (array.length <= 2) return midElements;
  if (array.length % 2 === 1) {
    let midIndex = Math.floor(array.length / 2);
    midElements.push(array[midIndex]);
  } else {
    midElements.push(array[Math.floor(array.length / 2) - 1]);
    midElements.push(array[Math.floor(array.length / 2)]);
  }
  return midElements;
};

assertArraysEqual(eqArrays(middle([1,2,3]), [2]), true);
assertArraysEqual(eqArrays(middle([1,2,3,4,5]), [3]), true);
assertArraysEqual(eqArrays(middle([1,2,3,4,5,6]), [3,4]), true);
console.log(middle([1,2]));