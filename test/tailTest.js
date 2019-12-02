const assert = require('chai').assert;

const tail = require('../tail');
const assertEqual = require('../assertEqual');

const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(result);

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));

const oneElement = tail([1]);
console.log(oneElement);

const empty = tail([]);
console.log(empty);

describe("#tail", () => {
  it('returns [Lighthouse, Labs] from [Hello, Lighthosue, Labs]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it('returns [Lighthouse, Labs] from [Yo Yo, Lighthouse, Labs]', () => {
    assert.deepEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it('returns [] from [1]', () => {
    assert.deepEqual(tail([1]), []);
  });

  it('returns [] from []', () => {
    assert.deepEqual(tail([]), []);
  });
});