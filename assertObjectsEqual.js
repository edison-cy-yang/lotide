const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`💯💯💯Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const assertArraysEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💯💯💯Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const eqObjects1 = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length)
    return false;
  for (let key in object1) {
    if (object2[key] === undefined)
      return false;
    else if(object1[key] === object2[key]) {
      return true;
    } else if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key]))
        return false;
    } else if (!Array.isArray(object1[key]) && !Array.isArray(object2[key])) {
      if (!eqObjects(object1[key], object2[key])) {
        return false;
      }
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length)
    return false;
  for (let key in object1) {
    if (object2[key] === undefined)
      return false;
    else if(object1[key] !== object2[key]) {
      //if two values are not equal there could be two possibilities:
      //1. both are arrays and they are actually equal arrays
      //2. both are objects and they are actually equal objects
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (!eqArrays(object1[key], object2[key])) {
          return false;
        }
      } else if (!Array.isArray(object1[key]) && !Array.isArray(object2[key])) {
        if (!eqObjects(object1[key], object2[key])) {
          return false;
        }
      }
      else {
        return false;
      }
    }
  }
  return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab,ba);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);

assertObjectsEqual({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 });

assertObjectsEqual({ a: { y: 0, z: 1 }, b: 2 }, { a: { y: 0, z: 1 }, b: 2 });
assertObjectsEqual({y:0,z:1}, {y:0, z:1});