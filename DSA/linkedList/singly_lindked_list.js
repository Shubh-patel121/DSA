/* 
A linked list is a dynamic data structure made up of a sequence of nodes,
each containing a reference (pointer) to the next node in the sequence.

The basic linked list types are:

1.Singly Linked List: Each node contains a value and a reference to the next node.
2.Doubly Linked List: Each node contains a value and references to both the next and
  previous nodes, allowing traversal in both directions.
*/

/* 
 ## LinkedList common operations ##

1.Initialization:
The list starts with head (the first node) set to null, tail (the last node) set to null,
 and size (the number of nodes) set to 0.

2.append(value):
->Adds a node with the specified value to the end of the list.
->If the list is empty, it sets the head and tail to the new node.
->Otherwise, it updates the current tail's next reference and sets the new node as the tail.

3.prepend(value):
->Adds a node with the specified value to the beginning of the list.
->If the list is empty, it sets the head and tail to the new node.
->Otherwise, it updates the current head's reference and sets the new node as the head.

4.insertAt(index, value):
->Inserts a node with the specified value at the specified index.
->Checks for valid index range, throws an error if out of bounds.
->Adjusts pointers for the previous and current nodes.

5.remove(value):
->Removes the first node with the specified value from the list.
->Updates head and tail pointers as needed.
->Returns true if the node was removed, false if not found.

6.find(value):
-> Searches for a node with the specified value in the list.
-> Returns the node if found, otherwise null.

7.reverse():
-> Reverses the order of nodes in the list.
-> Adjusts pointers for each node to reverse the list.

8.findMiddle():
->Finds the middle node of the list.
->Uses two pointers: one moving one step at a time, and the other two steps.

9.print():
-> Prints the values of the nodes in the list in order.

*/

// implementation of the Node class, it is the basic building bloc of the linked list and everything round around node.

// important - last node value of the next property is null, when a new node is inserted that will replace this null and again we  sets a last node with null as a next. This will help us to achieve the sequence;

/*
 # Node - {
    value : value ,
    next : "hold's reference of the next node"
 }
 # Head - starting node or first node of the sequence ;
 # Tail - last node of the sequence or the list
 */
class Node {
  constructor(value = null, next = null) {
    (this.value = value), (this.next = next);
  }
}

class LinkedList {
  // IMP:- initially head and tail both are equal when size is 0 or 1 ;
  constructor() {
    this.head = null; // initially we are not having any node so we kept null;
    this.tail = null; // initially we are not having any node so we kept null;
    this.size = 0; // initially size is 0;
  }

  // we will create a method append to add a new node at the end of the linked list;

  append(value) {
    // first create a node instance using this value;
    const newNode = new Node(value);

    if (this.tail) {
      this.tail.next = newNode; // this is when list is already having nodes or size != 0;
    } else {
      this.head = newNode; // this is empty linked list case or when size is 0;
    }

    this.tail = newNode;
    this.size++;
  }

  // to add node in the beginning of the linked list;

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }

    this.size++;
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size) {
      return "please provide inserting index between range i.e 0 to size of the list";
    }

    const newNode = new Node(value);

    if (index === 0) {
      // insert at the start of the list;
      newNode.next = this.head;
      this.head = newNode;

      // also check if it was the first node then also update the tail as well;
      if (!this.tail) {
        this.tail = newNode;
      }
    } else {
      let current = this.head;
      let previous = null;
      let currentIndex = 0;

      while (currentIndex < index) {
        previous = current;
        current = current.next;
        currentIndex++;
      }

      // Insert the new node between previous and current nodes
      // basically logic is that newNode is playing between previous and the current, so we have to insert this new node in between the previous and the current.
      previous.next = newNode;
      newNode.next = current;

      if (index === this.size) {
        this.tail = newNode;
      }
    }
    this.size++;
  }

  // remove a item from linked list by value match; 
   // Note:- value which needs to be added or removed from Linked list it has only three options
   // 1. At start ;
   // 2. In  between;
   // 3. At end ;
   // so need to take care whether this insertion or deletion affects head or tail;  
  remove(value){
      let current = this.head;
      let previous = null ;

      while(current){

        if(current.value === value){
            // if previous is not null means we are not removing at start;
            if (previous) {
                // Link previous node to the next node ;
                previous.next = current.next; 
            } else {
                // if previous is null means need to remove head, update the head
                this.head = current.next; 
            }

             // If current.next is null means we reached at the end and need to update the tail
            if (!current.next) {
                this.tail = previous;
            }

            this.size--;
            return "node is removed successfully"
        }else{
            previous = current;
            current = current.next; 
        }
      }
  
      return "Please add correct value, value which needs to be removed is not found in the linked list"
  }
}

const linkedList_initialization = new LinkedList();
console.log("first LinkedListInitialization:-", linkedList_initialization);

const linkedList = new LinkedList();
linkedList.append(100);
console.log("first linkedList_append:-", linkedList);

linkedList.prepend(200);
console.log("first linkedList_prepend:-", linkedList);

linkedList.insertAt(300, 0);
console.log(
  "insertion in the linked list:-",
  linkedList,
  linkedList.insertAt(400, 3)
);

let remove = linkedList.remove(800);
console.log(
  "remove from linked list:-",
  linkedList, "remove method return value:-", remove
);
