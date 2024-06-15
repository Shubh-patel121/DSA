// Note: 1. array is sorted, so return it sorted and it can be +ve or -ve integer ;

const removeDuplicates = (nums) => {
  const obj = {};
  const arr = [];
  for (item of nums) {
    if (obj[item]) {
      obj[item] = obj[item]++;
    } else {
      obj[item] = 1;
    }
  }
  // Note: if ask to modify in same array then here makes nums length 0 then add values ;
  // nums.length = 0 ;
  // also we can use object.keys ;
  for (key in obj) {
    arr.push(key);
    // nums.push(key);
  }
  // required because in case of -ve values , it appears at the end in obj ;
  arr.sort();
  return arr;
};

console.log(removeDuplicates([-1, 0, 0, 0, 0, 1, 1, 2, 3, 3]));
