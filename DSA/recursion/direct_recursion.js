// A recursion pattern where a function calls itself directly within its own body is known as direct recursion;

function getFactorial(num){
    if(num == 0) return 1 ;
    return num * getFactorial(num - 1);
}

console.log(getFactorial(3));