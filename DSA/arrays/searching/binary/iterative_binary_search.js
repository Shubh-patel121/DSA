/* 
In an iterative approach, binary search can be implemented in JavaScript to efficiently 
search for an element in a sorted array. The binary search algorithm works by dividing the
search range in half repeatedly until the target element is found, or the search range is empty.
*/

let testingArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const targetValue = 70;

const iterativeBinarySearch = (data, find) => {
  let start = 0;
  let end = data.length - 1;

  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (data[mid] === find) {
      return mid;
    } else if (data[mid] < find) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  // returning -1 if no match is found otherwise matching index;
  return -1
};

console.log("index of the finding element", iterativeBinarySearch(testingArray,targetValue))
