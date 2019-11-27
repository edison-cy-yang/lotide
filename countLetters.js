const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💯💯💯Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  let resultObject = {};

  for (let i = 0; i < string.length; i++) {
    let letter = string[i];
    if (letter !== " ") {
      if (!resultObject[letter]) {
        resultObject[letter] = 1;
      } else {
        resultObject[letter] += 1;
      }
    }
  }
  return resultObject;
};

let letters = countLetters("lighthouse in the house");
assertEqual(letters["i"], 2);
assertEqual(letters["h"], 4);
assertEqual(letters["n"], 1);
