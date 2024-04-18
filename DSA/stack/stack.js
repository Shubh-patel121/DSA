/* 

A stack is a fundamental data structure in computer science that follows the Last In, First Out (LIFO) principle. It can be visualized as a collection of elements with two primary operations: push and pop.

Here are the key characteristics of a stack:

Last In, First Out (LIFO): The last element added to the stack is the first one to be removed. This behavior is analogous to a stack of plates, where you can only add or remove plates from the top.

Operations:

Push: Adding an element to the top of the stack.
Pop: Removing the top element from the stack and returns that element.
Peek (or Top): Retrieving the top element without removing it.
IsEmpty: Checking if the stack is empty.
Size: Returning the number of elements in the stack.
Implementation:

Stacks can be implemented using various data structures, such as arrays or linked lists.
In array-based implementation, push and pop operations have O(1) time complexity, but resizing the array may require O(n) time in some cases.
In linked list-based implementation, push and pop operations also have O(1) time complexity, and resizing is not an issue.
Applications:

Stacks are widely used in programming languages for function call management (call stack).
They are used in algorithms like depth-first search (DFS), backtracking, and expression evaluation.
Undo mechanisms in text editors or applications often use stacks to store the history of operations.
*/


