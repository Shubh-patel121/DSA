/* 
-> Check whether two object's or two arrays are equal or not.
-> We don't have any dedicated method to check this. Object.is(value1, value2) is used for non reference values.
*/

const isEqual = (obj1, obj2) => {
  // here parameters can be object or array;

  let str1 = JSON.stringify(obj1);
  let str2 = JSON.stringify(obj2);

  if (str1 === str2) {
    return true;
  }

  return false;
};

const test1 = { age: 56 };
const test2 = { age: 56 };

console.log(isEqual(test1, test2));

/* without using json methods */
const isArraysEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const charCountObj = (data) => {
    let obj = {};
    for (let item of data) {
      if (obj[item]) {
        obj[item]++;
      } else {
        obj[item] = 1;
      }
    }
    return obj;
  };

  const charCountObj1 = charCountObj(arr1);
  const charCountObj2 = charCountObj(arr2);

  for (let item in charCountObj1) {
    if (charCountObj1[item] !== charCountObj2[item]) {
      return false;
    }
  }

  return true;
};

const data1 = [1, 2, 3, 4, 6, 6];
const data2 = [1, 2, 3, 6, 6, 6];

console.log(isArraysEqual(data1, data2));
