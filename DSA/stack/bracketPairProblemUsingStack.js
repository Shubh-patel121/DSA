let testingString = "{()}" ;

const checkCorrectBracketPairOrNot = (str) => {
    const stack = [] ;
    const BRACKETS = {
        "(" :")",
        "[": "]",
        "{": "}"
    }
    const closing = [")","]","}"];
    for (const char of str) {
        if(BRACKETS[char]){
            stack.push(char);
        }else if(closing.includes(char)){
            /*  if stack length is 0 means no opening brackets, in such case if we are getting
             closing bracket then this is not correct order */
            if(stack.length === 0) return false ;
            /* now if we are getting closing brackets means all opening brackets are already
             in stack and we have to check whether it is correct closing bracket or not; */
             let top = stack.pop(); // it will have opening bracket bec we only pushed for open brackets in stack
             if(BRACKETS[top] !== char){
                return false
             }
        }
    }
    return stack.length === 0 ;
}

console.log("is correct bracket pair matched string:", checkCorrectBracketPairOrNot(testingString));