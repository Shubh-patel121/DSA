let sampleArray = [3,6,2,55,34,24,11,68,2,2,3,3,100,1,1000];

const getArrayQuickSorting = (data) => {
    if(data.length <=1) return data ;
    let pivotPointValue = data[data.length - 1];
    let left = [];
    let right = [];

    for(let i=0 ; i< (data.length - 1) ; i++ ){
         if(data[i] < pivotPointValue){
            left.push(data[i]);
         }else{
            right.push(data[i]);
         }
    }

    return [ ...getArrayQuickSorting(left), pivotPointValue, ...getArrayQuickSorting(right)] ;
}

console.log("sorted array by quick sorting method :", getArrayQuickSorting(sampleArray))
