/* 
Problem:- Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.

*/

var removeElement = function(nums, val) {
    
    let newArray = [];
    let initialLength = nums.length ;
    for(let i = 0 ; i < nums.length ; i++){
        if(nums[i] !== val){
            newArray.push(nums[i]);
        }
    }

    let k = newArray.length ;
    let numberOfVal = initialLength - k ;
    nums.length = 0 ;

    for(item of newArray){
         nums.push(item);
    }
    for(let i=1 ; i <= numberOfVal ; i++){
        nums.push("_");
    }

    return k ;

};

 console.log(removeElement([3,2,2,3,4,5,6], 3 )) ;