/* 
Definition:- A circular queue is a linear data structure that operates based on the FIFO (First In, First Out) principle. Unlike a regular queue, a circular queue is implemented in such a way that when the rear end of the queue reaches the end of the queue's capacity, it wraps around to the beginning of the queue. This wrapping around makes efficient use of the available space.

The primary advantage of a circular queue is that it avoids wastage of space compared to a regular queue, where the space is wasted once the rear end reaches the end of the queue's capacity.

 # Key Concepts of Circular Queue:
         -> Front: The index pointing to the start of the queue, from where elements are dequeued (removed).
         -> Rear: The index pointing to the end of the queue, where elements are enqueued (added).
         -> Size: The maximum capacity of the queue.
         -> Array: The data structure that stores the elements of the queue.
 # Operations:
         -> Enqueue: Add an element to the queue.
         -> If the queue is full, throw an error.
         -> Otherwise, add the element at the rear end and increment the rear index.
         -> If the rear index reaches the end of the array, wrap it around to the beginning.
         -> Dequeue: Remove and return an element from the queue.
         -> If the queue is empty, throw an error.
         -> Otherwise, remove the element from the front end and increment the front index.
         -> If the front index reaches the end of the array, wrap it around to the beginning.
         -> IsEmpty: Check if the queue is empty.Returns true if the queue is empty.
         -> IsFull: Check if the queue is full.Returns true if the queue is full.
         -> Peek: Get the element at the front of the queue without removing it.
*/

class CircularQueue {
        constructor(size) {
            this.size = size; // The maximum capacity of the queue
            this.queue = new Array(size);
            this.front = 0; // Front index
            this.rear = -1; // Rear index
            this.count = 0; // Number of elements in the queue
        }
    
        // Check if the queue is full
        isFull() {
            return this.count === this.size;
        }
    
        // Check if the queue is empty
        isEmpty() {
            return this.count === 0;
        }
    
        // Add an element to the queue
        enqueue(element) {
            if (this.isFull()) {
                throw new Error("Queue is full");
            }
            this.rear = (this.rear + 1) % this.size; // Wrap around the rear index
            this.queue[this.rear] = element;
            this.count++;
        }
    
        // Remove and return an element from the queue
        dequeue() {
            if (this.isEmpty()) {
                throw new Error("Queue is empty");
            }
            const element = this.queue[this.front];
            this.front = (this.front + 1) % this.size; // Wrap around the front index
            this.count--;
            return element;
        }
    
        // Get the element at the front of the queue without removing it
        peek() {
            if (this.isEmpty()) {
                throw new Error("Queue is empty");
            }
            return this.queue[this.front];
        }
    }
    
    // Example usage
    const circularQueue = new CircularQueue(5); // Create a circular queue of size 5
    
    circularQueue.enqueue(10);
    circularQueue.enqueue(20);
    circularQueue.enqueue(30);
    
    console.log(circularQueue.peek()); // Output: 10
    
    circularQueue.dequeue(); // Remove the element 10
    console.log(circularQueue.peek()); // Output: 20
    
    circularQueue.enqueue(40);
    circularQueue.enqueue(50);
    circularQueue.enqueue(60);
    
    console.log(circularQueue.isFull()); // Output: true
    
    try {
        circularQueue.enqueue(70); // This will throw an error since the queue is full
    } catch (e) {
        console.log(e.message); // Output: Queue is full
    }
    