/* 
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times.
You may assume that the majority element always exists in the array.
*/

const majorityElement = (nums) => {
  const n = nums.length;
  const majorityNumber = n / 2;
  let majorityElement = null;
  let testObj = {};

  if (n === 1) {
    majorityElement = nums[0];
  }

  for (let item of nums) {
    if (testObj[item]) {
      testObj[item]++;
      if (testObj[item] > majorityNumber) {
        majorityElement = item;
        break;
      }
    } else {
      testObj[item] = 1;
    }
  }

  return majorityElement;
};

const data = [1, 2, 3, 4, 3, 3, 3];
console.log("majority element:-", majorityElement(data));
