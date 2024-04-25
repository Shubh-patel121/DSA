// Problem:- check whether two strings are anagram or not;
// Note:- here we are considering character casing matters, 
//if you do not want to consider casing make both string case same first either by using .lowecase method;

const getStringCharacterCountObject = (str) => {
  let obj = {};
  for (let char of str) {
    if (obj[char]) {
      obj[char]++;
    } else {
      obj[char] = 1;
    }
  }
  return obj;
};

const isStringsAreAnagram = (str1, str2) => {
  if (str1.length !== str2.length) {
    return false;
  }

  let str1Map = getStringCharacterCountObject(str1);
  let str2Map = getStringCharacterCountObject(str2);

  for(let char in str1Map){
    if(str1Map[char] !== str2Map[char]){
        return false;
    }
  }
  return true;
};

console.log("is strings are anagram:- ", isStringsAreAnagram("hello", "elloh"));