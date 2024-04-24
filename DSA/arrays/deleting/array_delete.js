let sampleArray = [10,20,30,33,29,50,77,92];
//delete a item from above array at any index ;

const deleteItemFromArray  = ( indexToBeDeleted) => {
    for (let i = indexToBeDeleted; i < sampleArray.length; i++) {
        sampleArray[i] = sampleArray[i+1];
    }
     // as item is delete so length of array is also affected;
    sampleArray.length = sampleArray.length - 1 ;
}

console.log("originalArray", sampleArray);
deleteItemFromArray(7);
console.log("updatedArray",sampleArray)