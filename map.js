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

const map = function(array, callback) {
  const results = [];
  for (let element of array) {
    results.push(callback(element));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(eqArrays(results1, ['g','c','t','m','t']), true);

const numbers1 = [1,2,3,4,5];
const results2 = map(numbers1, num => num * 2);
assertArraysEqual(eqArrays(results2, [2,4,6,8,10]), true);

const numbers2 = [1,2,3,4,5];
const results3 = map(numbers2, num => num * num);
assertArraysEqual(eqArrays(results3, [1,4,9,16,25]), true);

module.exports = map;