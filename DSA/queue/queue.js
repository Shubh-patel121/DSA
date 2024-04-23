/* 
A queue is a linear data structure that follows the First In, First Out (FIFO) 
principle. In a queue, elements are inserted at the rear (also known as enqueue operation)
and removed from the front (also known as dequeue operation). This ensures that the element
that has been in the queue the longest is the one removed first.

Here are the main operations supported by a queue:

Enqueue: Add an element to the rear of the queue.
Dequeue: Remove and return the element from the front of the queue.
Peek: Return the element at the front of the queue without removing it.
isEmpty: Check if the queue is empty.
Size: Return the number of elements currently in the queue.
Queues have various applications in computer science, such as CPU scheduling, 
breadth-first search algorithms, printer job scheduling, and more.
 */

let queue = [];
let currentSize = queue.length ;
let maxQueueSize = 5;

// enqueue method to add item , it is similar to standard push method;

const enqueue = (valueToBeAddedToQueue) => {
    if(currentSize < maxQueueSize){
        queue[currentSize] = valueToBeAddedToQueue;
        currentSize++ ;
        displayQueueData();
    }else{
        console.log("Queue is full, please first remove item then add new value");
    }
}

// dequeue will remove item from front, standard method is shift;
const dequeue = () => {
    if(currentSize > 1){
        for(let i=0 ; i< currentSize ; i++){
            queue[i] = queue[i+1];
        }
        currentSize--;
        queue.length = currentSize;
        displayQueueData();
    }else if(currentSize == 1){
            currentSize--;
            queue.length = currentSize;
    }else{
        console.log("queue is already empty");
    };
}



const displayQueueData = ()=> console.log("Queue data:-" ,queue);
enqueue(5);
enqueue(10);
enqueue(15);
enqueue(20);
enqueue(25);
enqueue(30);
dequeue();
dequeue();
dequeue();
dequeue();
dequeue();
dequeue();