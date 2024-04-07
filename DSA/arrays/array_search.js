// this contains logic to find and return index of the first matched value ;
// linear search problem ;


let sampleArray = [2,55,67,88,32,98,22,16];

// below function will return either found "index" otherwise "item is not found in array" ;
// Note: here only we are looking for first match only;

const searchItemInArray = (itemToBeSearched) =>{
  let indexOfItemToBeSearched ;
    for(let i = 0 ; i < sampleArray.length ; i++){
        if(sampleArray[i] === itemToBeSearched){
            indexOfItemToBeSearched = i ;
            break;
        }
    }
    return indexOfItemToBeSearched ? indexOfItemToBeSearched : "item is not found in array" ;
}

console.log(searchItemInArray(6));
