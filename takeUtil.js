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

const takeUntil = function(array, callback) {
  const results = [];
  for (let element of array) {
    if (!callback(element)) {
      results.push(element);
    } else
      return results;
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(eqArrays(results1, [1,2,5,7,2]), true);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(eqArrays(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]), true);