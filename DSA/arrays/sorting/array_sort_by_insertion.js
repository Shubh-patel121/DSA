let sampleArray = [22,3,45,32,11,23,7,55,16,2,1,4,100,1000,2];
const arrayInsertionSort = (data) => {
    for(let i=1 ; i < data.length ; i++){
          let currentValue = data[i];
          let j = i-1;
          while(j >= 0 && data[j] > currentValue){
            data[j+1] = data[j];
            j-- ;
          }
          data[j+1] = currentValue ;
    }
    return data;
}

console.log("sorted array by insertion sort method:", arrayInsertionSort(sampleArray));