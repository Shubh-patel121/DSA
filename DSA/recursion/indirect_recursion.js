/* Indirect recursion is a recursion pattern where a function indirectly calls itself
 through another function or multiple functions. Instead of a function calling itself directly,
  it calls another function, which in turn eventually calls the original function. */

// Function to check if a number is even
function isEven(num) {
    if (num === 0) {
        return true; // Base case: 0 is even
    } else {
        return isOdd(num - 1); // Indirect recursion: even(n) = odd(n-1)
    }
}

// Function to check if a number is odd
function isOdd(num) {
    if (num === 0) {
        return false; // Base case: 0 is not odd
    } else {
        return isEven(num - 1); // Indirect recursion: odd(n) = even(n-1)
    }
}

// Example usage
console.log(isEven(4)); // Output: true
console.log(isEven(5)); // Output: false
console.log(isOdd(4));  // Output: false
console.log(isOdd(5));  // Output: true
  