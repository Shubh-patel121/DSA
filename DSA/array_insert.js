let sampleArray = [20 ,4,5,7,1,88,9] ;
//insert a item at any index in given array ;
// use reverse loop ; this is tell how slice method works behind the scene ;

const insertItemIntoArray = (elementToInsert , positionOnWhichToInsert ) => {
for(let i = sampleArray.length - 1 ; i >= 0 ; i--){
    if(i >= positionOnWhichToInsert){
        sampleArray[i+1] = sampleArray[i];
        if(i === positionOnWhichToInsert){
            sampleArray[i] = elementToInsert;
        }
    }
}
}
console.log("item is", sampleArray);
insertItemIntoArray(33, 3)
console.log("updatedSample", sampleArray);
