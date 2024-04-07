// basic approach to merge two arrays into new array ;

let sampleArray1 = [22,3,4,88];
let sampleArray2 = [44,6,8,100,1000];

const mergeTwoArrays = (arr1, arr2) => {
    let resultingArray = [];
    for(let i=0 ; i< arr1.length ; i++){
       resultingArray[i] = arr1[i];
    }
    // logic : when copy second array items start there index from where index of first array ends;
    for (let i = 0; i < arr2.length; i++) {
        resultingArray[arr1.length + i] = arr2[i];
    }
    return resultingArray;
}

console.log(mergeTwoArrays(sampleArray1, sampleArray2));
