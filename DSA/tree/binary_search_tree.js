// Node is a basic building bloc of a tree data structure;

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// BST - binary search tree ;

class BST {
  constructor() {
    this.root = null;
  }

  // use insertNode function to decide where to insert a new node;

  insertNode(currentNode, newNode) {
    if (newNode.value < currentNode.value) {
      if (currentNode.left === null) {
        currentNode.left = newNode;
      } else {
        this.insertNode(currentNode.left, newNode);
      }
    } else {
      if (currentNode.right === null) {
        currentNode.right = newNode;
      } else {
        this.insertNode(currentNode.right, newNode);
      }
    }
  }
  // insert a node into tree;
  insert(value) {
    let newNode = new Node(value);

    if (this.root === null) {
      //first time insert or tree is empty;
      this.root = newNode;
    } else {
      // as tree has root node so, where to insert this new node use below function to decide this and insert;
      this.insertNode(this.root, newNode);
    }
  }
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }

  deleteNode(currentNode, value) {
    if (currentNode === null) {
      return "Tree is empty, so nothing to delete";
    }

    if (value < currentNode.value) {
      currentNode.left = this.deleteNode(currentNode.left, value);
    } else if (value > currentNode.value) {
      currentNode.right = this.deleteNode(currentNode.right, value);
    } else {
      // Node to delete found, reached at exact value;
      if (currentNode.left === null && currentNode.right === null) {
        // Leaf node
        return null;
      } else if (currentNode.left === null) {
        // Node with only right child
        return currentNode.right;
      } else if (currentNode.right === null) {
        // Node with only left child
        return currentNode.left;
      } else {
        // Node with both children
        // Find the in-order successor (smallest value in the right subtree)
        const successor = this.findMinNode(currentNode.right);
        // Replace the current node's value with the successor's value
        currentNode.value = successor.value;
        // Delete the in-order successor
        currentNode.right = this.deleteNode(currentNode.right, successor.value);
      }
    }

    return currentNode;
  }

  findMinNode(currentNode) {
    // Find the minimum value node in a subtree
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode;
  }

  findMaxNode(currentNode) {
    // Find the maximum value node in a subtree
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    return currentNode;
  }

  // Search for a node with a specific value
  findNode(value) {
    return this.findNodeHelper(this.root, value);
  }

  findNodeHelper(currentNode, value) {
    if (currentNode === null) {
      return null;
    }

    if (value === currentNode.value) {
      return currentNode;
    } else if (value < currentNode.value) {
      return this.findNodeHelper(currentNode.left, value);
    } else {
      return this.findNodeHelper(currentNode.right, value);
    }
  }

  // Breadth-first search (Level-order traversal)
  levelOrderTraversal() {
    if (this.root === null) {
      return;
    }

    const queue = [];
    queue.push(this.root);

    while (queue.length > 0) {
      const currentNode = queue.shift();
      console.log(currentNode.value);

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }

      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
  }

  // In-order traversal (Depth-first search)
  inOrderTraversal(node = this.root) {
    if (node !== null) {
      this.inOrderTraversal(node.left);
      console.log(node.value);
      this.inOrderTraversal(node.right);
    }
  }

  // Pre-order traversal (Depth-first search)
  preOrderTraversal(node = this.root) {
    if (node !== null) {
      console.log(node.value);
      this.preOrderTraversal(node.left);
      this.preOrderTraversal(node.right);
    }
  }

  // Post-order traversal (Depth-first search)
  postOrderTraversal(node = this.root) {
    if (node !== null) {
      this.postOrderTraversal(node.left);
      this.postOrderTraversal(node.right);
      console.log(node.value);
    }
  }

  // Find minimum value in the tree
  findMin() {
    if (this.root === null) {
      return null;
    }

    return this.findMinNode(this.root).value;
  }

  // Find maximum value in the tree
  findMax() {
    if (this.root === null) {
      return null;
    }

    return this.findMaxNode(this.root).value;
  }
}

let bst = new BST();
console.log("initialization", bst);

// insert values;
bst.insert(100);
bst.insert(50);
bst.insert(150);
bst.insert(250);
bst.insert(200);
console.log("after insert", bst);
bst.delete(250);
console.log("after delete", bst.root.right);
bst.insert(350);
bst.insert(180);
bst.insert(40);
bst.insert(35);
bst.insert(25);
bst.insert(30);
// breadth first search traversal;
console.log("level traversal, breadth first search:-", bst.levelOrderTraversal());

// depth first search;
console.log("pre order traversal",bst.preOrderTraversal());
console.log("in-order traversal", bst.inOrderTraversal());
console.log("post order traversal", bst.postOrderTraversal());

console.log("minimum value in tree", bst.findMin());
console.log("maximum value in tree", bst.findMax());
