let testingArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const targetValue = 70;

let start = 0;
let end = testingArray.length - 1;

const recursiveBinarySearch = (data, findValue, left, right) => {
  // base condition when array is empty
  if (left > right) {
    return -1;
  }

  let midIndex = left + Math.floor((right - left) / 2);
  let pivotValue = data[midIndex];
  if (pivotValue === findValue) {
    return midIndex;
  } else if (pivotValue < findValue) {
    return recursiveBinarySearch(data, findValue, midIndex + 1, right);
  } else {
    return recursiveBinarySearch(data, findValue, left, midIndex - 1);
  }
};

let result = recursiveBinarySearch(testingArray, targetValue, start, end);
console.log(
  result === -1
    ? "target value is not found in given data"
    : `targeted value ${targetValue} is available at ${result} index.`
);
