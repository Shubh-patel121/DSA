/* 
What is a Rotated Array?
Rotating an array involves shifting its elements to the left or right. For example, given an array 
[1,2,3,4,5]:

Rotating it to the right by 2 positions results in [4,5,1,2,3].
Rotating it to the left by 2 positions results in  [3,4,5,1,2].

## Types of Rotation
   ---> Right Rotation: Shifts elements towards the end of the array. The last element moves to the first position.
   ---> Left Rotation: Shifts elements towards the beginning of the array. The first element moves to the last position.

*/

const rotateByRight = (arr, k) => {
  const n = arr.length;
  // normalize the rotation ;
  k = k % n;
  return arr.slice(n - k).concat(arr.slice(0, n - k));
};

const test = [1, 2, 3, 4, 5];
const rotateBy = 2;
console.log("right rotated array:", rotateByRight(test, rotateBy));

const rotateByLeft = (arr, k) => {
  const n = arr.length;
  // // normalize the rotation ;
  k = k % n;
  return arr.slice(k).concat(arr.slice(0, k));

  /* 
    one more approach: using while loops ;

    let counter1 = k ;
    let resulting = []
    while(counter1 < n ){
        resulting.push(arr[counter1]);
        counter1++ ;
    }

    counter1 = 0 ;

    while(counter1 < k){
        resulting.push(arr[counter1]);
        counter1++ ;
    }

     return resulting ; 
     
     */
};

const test1 = [1, 2, 3, 4, 5];
const rotateLeft = 2;
console.log("left rotated array:", rotateByLeft(test, rotateLeft));

/* 
if the array is large then use below method because it uses in place rotation and saves space to reduce space complexity associated with large size array ;
*/

const rotateByRightInPlace = (arr, k) => {
  const n = arr.length;
  k = k % n;

  const reverseArray = (data, start, end) => {
    while (start < end) {
      [data[start], data[end]] = [data[end], data[start]];

      start++;
      end--;
    }
  };

  //Step1: first reverse the whole array ;
  reverseArray(arr, 0 , n-1);
 console.log("step1",arr);
  // step2: reverse first k items because now that comes at start because of whole array reverse;
  reverseArray(arr, 0, k-1);
  console.log("step2",arr);
  // step3: reverse last remaining items;
  reverseArray(arr, k, n-1);
  console.log("step3",arr);
//   return arr;
};

const sampleArr = [1,2,3,4,5,6,7,8];
const rotateTo = 2 ;
rotateByRightInPlace(sampleArr, rotateTo)
console.log("rotate right in place :",sampleArr);
