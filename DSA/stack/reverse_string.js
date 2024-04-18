let testString = "Hello" ;

const getStringReversed = (str) => {
    const stack = [];
    let reversedString = "";
    for(let i=0; i< str.length ; i++){
        stack.push(str[i]);
    }
    while(stack.length > 0){
        reversedString += stack.pop();
    }
    return reversedString;
}

console.log("reversed String is:-",getStringReversed(testString));
console.log("direct string reverse using standard methods:-", testString.split("").reverse().join(""));