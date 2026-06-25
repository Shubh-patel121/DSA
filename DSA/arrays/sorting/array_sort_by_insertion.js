/**
 * Sorts an array of numbers in ascending order using Insertion Sort.
 * @param {number[]} arr - The array to be sorted.
 * @returns {number[]} - The sorted array.
 */
const insertionSort = (arr) => {
  let n = arr.length;

  // Outer loop: Starts at index 1 because the element at index 0 is already "sorted"
  for (let i = 1; i < n; i++) {
    let key = arr[i]; // The current item we want to insert into the sorted section
    let j = i - 1; // Pointer for scanning the sorted section to the left

    /* Inner Loop: Move elements of arr[0...i-1] that are greater than the 'key'
           to one position ahead of their current position.
        */
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]; // Shift the larger element to the right
      j--; // Move the pointer left to check the next element
    }

    // Insert the key into its correct, vacant slot
    arr[j + 1] = key;
  }

  return arr;
};

// --- Execution Example ---
const originalArray = [8, 5, 2, 9, 5, 6, 3];
console.log("Before Sorting:", originalArray);

const sortedArray = insertionSort(originalArray);
console.log("After Sorting: ", sortedArray);

/* 
Let's look at exactly how the array changes during each iteration of the outer loop (i)
using the array [8, 5, 2, 9]:

Pass 1 ($i = 1$)Target element (key) = 5 (at index 1).
Array state before pass: [8, | 5, 2, 9] (The | separates the sorted side from the unsorted side).
The comparison: Is 8 > 5? Yes.The shift: 8 slides right into index 1 $\rightarrow$ [8, 8, 2, 9].
The placement: Pointer j drops out of bounds ($j = -1$), so 5 drops into index 0.
End of Pass 1: [5, 8, | 2, 9]

Pass 2 ($i = 2$)Target element (key) = 2 (at index 2).Array state before pass: [5, 8, | 2, 9]
The comparisons & shifts:Is 8 > 2? Yes $\rightarrow$ shift 8 right $\rightarrow$ [5, 8, 8, 9].
Is 5 > 2? Yes $\rightarrow$ shift 5 right $\rightarrow$ [5, 5, 8, 9].
The placement: Pointer j drops to $-1$, so 2 drops into index 0.
End of Pass 2: [2, 5, 8, | 9]

Pass 3 ($i = 3$)Target element (key) = 9 (at index 3).Array state before pass: [2, 5, 8, | 9]
The comparison: Is 8 > 9? No!The shift: The while loop condition immediately fails.
 No shifting happens.The placement: 9 stays right where it is at index 3 (j + 1).
 End of Pass 3: [2, 5, 8, 9] (Fully sorted!)
 
Big O Complexity & CharacteristicsTime
 Complexity:Worst Case ($O(n^2)$): Occurs if the array is sorted in completely reverse order. You have to shift every element on every single pass.
 Best Case ($O(n)$): Occurs if the array is already sorted. The inner while loop condition instantly checks and fails, making only 1 comparison per outer pass. This makes Insertion Sort incredibly efficient for datasets that are already mostly sorted!
 Space Complexity ($O(1)$): It requires a constant amount of memory because it sorts the array directly in place without creating secondary copies.Stability (Stable): Yes. Because it only shifts an element if it is strictly greater (arr[j] > key), identical elements preserve their original relative order. (e.g., the first 5 stays ahead of the second 5).
*/
