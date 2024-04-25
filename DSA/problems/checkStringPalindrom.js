/* 
Problem:- whether the given string is palindrom or not ; 
Palindrom means if we string from front or back it will remain same eg. level;
*/
/* 
here also string casing matters we can covert it to uniform casing;
*/
let testString = "level";
const checkIsPalindrom = (str) => {
  let start = 0;
  let end = str.length - 1;

  while (start < end) {
    if (str[start] !== str[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
};

console.log("is given string palindrom:-", checkIsPalindrom(testString))