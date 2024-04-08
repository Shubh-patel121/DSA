let sampleArray = [3,6,2,55,34,24,11,68,2,2,3,3,100,1,1000];

const arraySelectionSort = (data) => {
    for(let i=0 ; i < data.length -1 ; i++){
        let minValueIndex = i ;
        for(let j= i+1 ; j < data.length ; j++){
            if( data[j] < data[minValueIndex]){
                minValueIndex = j;
            }
        }
        if(minValueIndex !== i){
            [data[i], data[minValueIndex]] = [data[minValueIndex],data[i]] ;
        }
    }
    return data ;
}

console.log("sorted array by selection sort approach:", arraySelectionSort(sampleArray));
