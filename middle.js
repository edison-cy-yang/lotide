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

module.exports = middle;