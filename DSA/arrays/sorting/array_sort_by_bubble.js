let sampleArray = [3, 6, 2, 55, 34, 24, 11, 68, 2, 2, 3, 3];

const sortByBubble = (data) => {
  let n = data.length;

  for (let i = 0; i < n - 1; i++) {
    let swapped = false; // Optimization tracking

    // Notice the boundary: 'n - 1 - i'
    for (let j = 0; j < n - 1 - i; j++) {
      if (data[j] > data[j + 1]) {
        // Modern ES6 Array Destructuring Swap (no temp variable needed!)
        [data[j], data[j + 1]] = [data[j + 1], data[j]];
        swapped = true;
      }
    }

    // If no two elements were swapped by the inner loop, array is sorted!
    if (!swapped) break;
  }
  return data;
};

console.log("sorted array is:", sortByBubble(sampleArray));

/* 

Without subtracting - i, your code would blindly scan elements at the end of the array
that are already perfectly sorted over and over again. Subtracting i shrinks the search
window by 1 element on every single pass, cutting out thousands of useless calculations
on large data sets!

*/
