let sampleArray = [1,2,3,4,5,6] ;

const getArrayReversedByRecursion = (data, startIndex, endIndex) => {
    let temp;
    if(startIndex <= endIndex){
      temp = data[startIndex];
      data[startIndex] = data[endIndex];
      data[endIndex] = temp;
      // make a recursive call to get looping;
      getArrayReversedByRecursion(data, (startIndex + 1), (endIndex - 1));
    }
    return data ;
}

console.log("sample array :", sampleArray);
console.log("reversed Array By recursion:",getArrayReversedByRecursion(sampleArray,0, (sampleArray.length -1)));
