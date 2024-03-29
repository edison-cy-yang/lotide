const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle([1,2,3,4,5]), [3]);
assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]);

describe("#middle", () => {
  it('returns [2] from [1,2,3]', () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  });

  it('returns [3] with [1,2,3,4,5]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5]), [3]);
  });

  it('returns [3,4] with [1,2,3,4,5,6]', () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);
  });
});