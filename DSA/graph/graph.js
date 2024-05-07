/* 
Here we are implementing Graph class with all basic operation and representation.
Below the code of this Graph class I have called all the methods which
helps to understand how this methods are used and why;
*/

class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected;
    this.adjacencyList = {};
    this.adjacencyMatrix = [];
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
      this.updateMatrix();
    }
  }

  // Add a new edge (connection) between two vertices
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].push(vertex2);
    // imp:- if the graph type is directed then we make only one way connection from vertex1 to vertex2
    // otherwise we will treat it as undirected means connection is vice versa from vertex1 to vertex2 and its revers.
    if (!this.isDirected) {
      this.adjacencyList[vertex2].push(vertex1);
    }

    this.updateMatrix();
  }

  // Remove an edge between two vertices
  removeEdge(vertex1, vertex2) {
    if (this.adjacencyList[vertex1]) {
      this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
        (vertex) => vertex !== vertex2
      );
    }

    if (!this.isDirected && this.adjacencyList[vertex2]) {
      this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
        (vertex) => vertex !== vertex1
      );
    }

    this.updateMatrix();
  }

  // Remove a vertex and all its associated edges
  removeVertex(vertex) {
    if (this.adjacencyList[vertex]) {
      // imp:- below logic is for removing connection of this node which is
      // going to be removed from other nodes;
      for (let adjVertex of this.adjacencyList[vertex]) {
        this.removeEdge(vertex, adjVertex);
      }

      delete this.adjacencyList[vertex];
      this.updateMatrix();
    }
  }

  // Get neighbors of a vertex
  getNeighbors(vertex) {
    return this.adjacencyList[vertex] || [];
  }

  // Check if an edge exists between two vertices
  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1] &&
      this.adjacencyList[vertex1].includes(vertex2)
    );
  }

  // Update the adjacency matrix representation
  // using this single function we can achieve adjacency matrix view from adjacency list;
  updateMatrix() {
    const vertices = Object.keys(this.adjacencyList);
    const size = vertices.length;

    // Initialize a new matrix and add empty connection between all nodes by adding 0;
    this.adjacencyMatrix = Array.from({ length: size }, () =>
      Array(size).fill(0)
    );

    // Populate the adjacency matrix
    for (let i = 0; i < size; i++) {
      for (let neighbor of this.adjacencyList[vertices[i]]) {
        const j = vertices.indexOf(neighbor);
        this.adjacencyMatrix[i][j] = 1;

        if (!this.isDirected) {
          this.adjacencyMatrix[j][i] = 1;
        }
      }
    }
  }

  // Get the adjacency list representation of the graph
  getAdjacencyList() {
    return this.adjacencyList;
  }

  // Get the adjacency matrix representation of the graph
  getAdjacencyMatrix() {
    return this.adjacencyMatrix;
  }
}

let graph = new Graph();
console.log("initiate graph instance", graph);

graph.addVertex("A");
console.log("after adding first vertex", graph);

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "D");
console.log("after adding edges", graph);

graph.removeEdge("C", "D");
console.log("graph after removing edges:", graph);

graph.removeVertex("C");
console.log("after removing vertex:", graph);

console.log("neighbours of vertex or node A", graph.getNeighbors("A"));
console.log("is A has vertex to B:", graph.hasEdge("A", "B"));

console.log("Adjacency list:-", graph.getAdjacencyList());
console.log("adjacency matrix", graph.getAdjacencyMatrix());
