const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💯💯💯Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (let property in object) {
    if (callback(object[property]))
      return property;
  }
  return undefined;
};

const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); //==>noma

const result2 = findKey({
  "John": 12,
  "Michael": 15,
  "Joanna": 28
}, x => x > 20);

assertEqual(result1, "noma");
assertEqual(result2, "Joanna");
