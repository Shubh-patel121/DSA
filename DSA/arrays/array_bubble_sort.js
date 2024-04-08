let sampleArray = [3,6,2,55,34,24,11,68,2,2,3,3];

const sortByBubble = (data) => {
    for(let i=0 ; i < data.length-1 ; i++){
        for(let j=0 ; j < data.length ; j++){
             if(data[j] > data[j+1]){
                let dataAtJBeforeSwap = data[j]
                data[j] = data[j+1];
                data[j+1] = dataAtJBeforeSwap;
             }
        }
    }
    return data ;
}

console.log("sorted array is:", sortByBubble(sampleArray));
