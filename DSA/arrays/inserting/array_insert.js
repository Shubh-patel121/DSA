/**
 * Inserts an item into an array at a specific index manually.
 * @param {Array} array - The target array to mutate.
 * @param {*} item - The value to insert.
 * @param {number} index - The target position for insertion.
 * @returns {Array} - The mutated array.
 */
const insertItemAtAnyPlace = (array, item, index) => {
  // Case 1: Handle negative index bounds
  if (index < 0) {
    console.warn(`Index ${index} is negative. Normalizing to 0.`);
    index = 0; // Standard DSA fallback: insert at the beginning
  }

  // Case 2: Handle out-of-bounds where index exceeds array length
  if (index >= array.length) {
    console.warn(`Index ${index} exceeds array length. Appending to end.`);
    array[array.length] = item; // Directly assign to the next available tail index
    return array;
  }

  // Case 3: Standard Insertion (Beginning or Middle)
  // Step A: We must increase the array length by 1 to make room.
  // In JS, assigning a value beyond the current length expands it automatically.

  // Step B: Loop backward starting from the old tail element down to our target index.
  for (let i = array.length - 1; i >= index; i--) {
    array[i + 1] = array[i]; // Shift the current element one slot to the right
  }

  // Step C: The slot at the target index is now a duplicate of index+1.
  // We can safely overwrite it with our new item.
  array[index] = item;

  return array;
};

// --- Test Suite covering all DSA Edge Cases ---

console.log("--- CASE 1: Standard Middle Insertion ---");
let arr1 = [10, 20, 30, 40, 50];
console.log(insertItemAtAnyPlace(arr1, "MIDDLE", 2));
// Output: [10, 20, 'MIDDLE', 30, 40, 50]

console.log("\n--- CASE 2: Insertion at the Beginning (Index 0) ---");
let arr2 = [10, 20, 30];
console.log(insertItemAtAnyPlace(arr2, "START", 0));
// Output: ['START', 10, 20, 30]

console.log("\n--- CASE 3: Index completely Out-of-Bounds (Too Large) ---");
let arr3 = [1, 2, 3];
console.log(insertItemAtAnyPlace(arr3, "END", 99));
// Output: [1, 2, 3, 'END'] (Appended cleanly)

console.log("\n--- CASE 4: Negative Index Boundary Handling ---");
let arr4 = ["A", "B", "C"];
console.log(insertItemAtAnyPlace(arr4, "NEG", -5));
// Output: ['NEG', 'A', 'B', 'C'] (Normalized to index 0)

console.log("\n--- CASE 5: Operating on an Empty Array ---");
let arr5 = [];
console.log(insertItemAtAnyPlace(arr5, "SOLO", 0));
// Output: ['SOLO']
cfzdf
/* 
Time Complexity: $O(n)$ In the worst-case scenario (inserting at index 0), every single item in the array must be shifted one slot over. If the array has $n$ items, the loop executes $n$ times.Space Complexity: $O(1)$ auxiliary spaceBecause we are mutating the array directly in place without creating a secondary helper array, the algorithm uses a constant amount of extra memory space regardless of input size.
*/
