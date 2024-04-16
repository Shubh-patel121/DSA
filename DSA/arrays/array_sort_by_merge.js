let sampleArray = [3,6,2,55,34,24,11,68,2,2,3,3,100,1,1000];

const getArrayMergeSort = (data) =>{
    // if length is less than or equal to 1 then sorting is not required;
    if(data.length <= 1 ) return data; 
    // find middle value and brake whole array into two parts;
    let centerItemIndex = Math.floor(data.length / 2);
    let firstHalfData = data.slice(0,centerItemIndex);
    let secondHalfData = data.slice(centerItemIndex);
    return getMerge(getArrayMergeSort(firstHalfData), getArrayMergeSort(secondHalfData));
}

const getMerge = (leftSideData, rightSideData) =>{
    let resultingArray = [];
    let leftIndex = 0;
    let rightIndex = 0;  
    while(leftIndex < leftSideData.length && rightIndex < rightSideData.length){
        if(leftSideData[leftIndex] < rightSideData[rightIndex]){
            resultingArray.push(leftSideData[leftIndex]);
            leftIndex++ ;
        }else{
            resultingArray.push(rightSideData[rightIndex]);
            rightIndex++ ;
        }
    }
    return resultingArray.concat(leftSideData.slice(leftIndex)).concat(rightSideData.slice(rightIndex)) ;
}

console.log("sort by merge and sort method", getArrayMergeSort(sampleArray));