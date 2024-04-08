// prefer this method if merge and shorting both required otherwise if only merge required prefer two for loop;

 /* Note: here we are considering both arrays are individually 
    already sorted; if not you may sort both first; */
let sampleArray1 = [1,3,5,7,3000, 4000,5000];
let sampleArray2 = [2,4,6,8,1000,8000,100000, 50000000];

let resultingArray = [];
let counter1 = 0;
let counter2 = 0;
/* here we are using resultingCounter, but it is also possible 
   to do using push method in that we will not required to handle this resulting counter */
let resultingCounter = 0;

const mergeAndShortTwoArrays = (firstArray, secondArray) => {

  while(counter1 < firstArray.length && counter2 < secondArray.length){

    if(firstArray[counter1] < secondArray[counter2]){
        resultingArray[resultingCounter] = firstArray[counter1];
        counter1++;
    }else{
        resultingArray[resultingCounter] = secondArray[counter2];
        counter2++;
    }

    resultingCounter++;
  }
  /* in above logic all elements of both arrays not pushed
   into resulting arrays, to check and push remaining we used below logic; */
   while(counter1 < firstArray.length){
       resultingArray[resultingCounter] = firstArray[counter1];
       counter1++;
       resultingCounter++;
   }
   while(counter2 < secondArray.length){
       resultingArray[resultingCounter] = secondArray[counter2];
       counter2++;
       resultingCounter++;
   }

   return resultingArray;
}

console.log("merge and sorted array",mergeAndShortTwoArrays(sampleArray1, sampleArray2));
