/* 

A doubly linked list is a data structure that consists of a sequence of nodes,
where each node contains a value and two pointers: one pointing to the next node
in the sequence and the other pointing to the previous node. This structure allows
for efficient operations such as insertions and deletions at both ends of the list.

#Benefits of a Doubly Linked List-

1.Bidirectional Traversal: Doubly linked lists allow traversal in both directions (forward and backward), making them versatile and efficient for operations at both ends of the list.

2.Flexible Insertion/Deletion: Insertion and deletion of nodes can be done efficiently from any position in the list (beginning, middle, or end).

3.Easy Implementation of Other Data Structures: Doubly linked lists can be the foundation for implementing other data structures such as stacks and queues.

# Practical Applications in Software Development-

1.Browser History: Doubly linked lists can be used to manage the history of a web browser, allowing the user to navigate both backward and forward in their browsing history.

2.Undo/Redo Mechanisms: Applications that require undo/redo functionality (e.g., text editors) can use doubly linked lists to manage the sequence of operations.

3.Navigation: Doubly linked lists can be used to navigate through a series of items (e.g., images in a gallery).
*/

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // method to insert a node using the value parameter at the start of the list;
  insertAtBeginning(value) {
    let newNode = new Node(value);

    if (this.head === null) {
      // means first time insertion or when list is empty;
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.size++;
  }

  insertAtEnd(value) {
    let newNode = new Node(value);

    if (this.tail === null) {
      // means first time insertion
      this.head = newNode;
      this.tail = newNode;
    } else {
      // when list is not empty means tail is exist;
      this.tail.next = newNode;
      newNode.prev = this.tail;

      // now update with complete tail with new node;
      this.tail = newNode;
    }

    this.size++;
  }

  insertAtSpecificIndex(value, index) {
    if (index < 0 || index > this.size) {
      return "please provide correct index. It it out of range.";
    }
    if (index === 0) {
      this.insertAtBeginning(value);
    } else if (index === this.size) {
      this.insertAtEnd(value);
    } else {
      let newNode = new Node(value);
      let current = this.head;
      let currentIndex = 0;

      while (currentIndex < index) {
        current = current.next;
        currentIndex++;
      }
      // Insert the new node between previous and current nodes
      newNode.next = current;
      newNode.prev = current.prev;

      current.prev.next = newNode;
      current.prev = newNode;

      this.size++;
    }
  }

  deleteAtBeginning() {
    if (this.size === 0) {
      return "list is empty, nothing to delete";
    }
    const toDelete = this.head;

    // Update head to the next node
    this.head = this.head.next;

    if (this.head !== null) {
      // Update the new head's prev to null
      this.head.prev = null;
    } else {
      // If the list becomes empty, set tail to null
      this.tail = null;
    }

    // Free the node
    toDelete.next = null;
    this.size--;
  }

  deleteAtEnd() {
    if (this.size === 0) {
      return "list is empty, nothing to delete";
    }

    const toDelete = this.tail;
    this.tail = this.tail.prev;

    if (this.tail !== null) {
      this.tail.next = null;
    } else {
      this.head = null;
    }

    toDelete.prev = null;
    this.size--;
  }

  // Deletion at a specific index
  deleteAt(index) {
    if (index < 0 || index >= this.size) {
      return "index is not found please enter correct position within list range.";
    }

    if (index === 0) {
      this.deleteAtBeginning();
    } else if (index === this.size - 1) {
      this.deleteAtEnd();
    } else {
      let current = this.head;
      let currentIndex = 0;

      // Traverse the list to find the correct position
      while (currentIndex < index) {
        current = current.next;
        currentIndex++;
      }

      // Update node
      current.prev.next = current.next;
      current.next.prev = current.prev;

      // Free the node
      current.next = null;
      current.prev = null;
      this.size--;
    }
  }

  // Search for a value in the list
  search(value) {
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.value === value) {
        return index;
      }
      current = current.next;
      index++;
    }

    return "Item not found";
  }

  // to display all value of the list;
  display() {
    let current = this.head;
    const result = [];

    while (current !== null) {
      result.push(current.value);
      current = current.next;
    }

    return result.join(" -> ");
  }

  // Get the size of the list
  getSize() {
    return this.size;
  }

  // Reverse the list
  reverse() {
    let current = this.head;
    let temp = null;

    // Swap prev and next pointers for each node
    while (current !== null) {
      temp = current.prev;
      current.prev = current.next;
      current.next = temp;

      // Move to the previous node (which was next before the swap)
      current = current.prev;
    }

    // Swap head and tail pointers
    if (temp !== null) {
      this.head = temp.prev;
    }
  }
}

const node = new Node();
const doublyLinkedList = new DoublyLinkedList();
console.log(
  "empty instances of node and doubly linked list",
  node,
  doublyLinkedList
);

doublyLinkedList.insertAtBeginning(100);
console.log(
  "doubly linked list after first insert at beginning:-",
  node,
  doublyLinkedList
);

doublyLinkedList.insertAtEnd(200);
console.log("first insert at end", doublyLinkedList);

doublyLinkedList.insertAtEnd(300);
console.log("second insert at end", doublyLinkedList);

// insert item between 200 and 300;
doublyLinkedList.insertAtSpecificIndex(400, 2);
console.log("after insertion at index 2:-", doublyLinkedList);

// delete a node at beginning;
doublyLinkedList.deleteAtBeginning();
console.log("linked list after delete", doublyLinkedList);

// delete at end;
doublyLinkedList.deleteAtEnd();
console.log("linked list after delete at end:", doublyLinkedList);

// search
console.log("output of search:-", doublyLinkedList.search(200));

// display
console.log("display linked list:-", doublyLinkedList.display());

// get size of the list;
console.log("size of the list:-", doublyLinkedList.getSize());

// display after reverse;
doublyLinkedList.reverse();
console.log("display linked list:-", doublyLinkedList.display());
