/* 
 # Definition:-
 a graph is a collection of nodes (also known as vertices) and edges that connect pairs of nodes.
 A graph represents relationships or connections between different entities and is used to model
 a wide range of real-world problems such as networks, social connections, and paths.

 # Key Components:-
    1.Vertices (Nodes): The individual entities in a graph, represented as points.
    2.Edges: The connections between vertices, represented as lines.

 #Types of Graphs:-

  1. Directed Graph (Digraph):
   Edges have a direction, going from one node to another.
   Represented as arrows in visualizations.
   Example: A graph showing the flow of traffic in a city.
  
  2. Undirected Graph:
   Edges do not have a direction; connections are bidirectional.
   Represented as lines in visualizations.
   Example: A graph representing friendships on a social media platform.
   
  3.Weighted Graph:
   Edges have weights (numeric values) that represent the cost, distance, or strength of the connection.
   Can be directed or undirected.
   Example: A graph showing the cost of flights between airports.
   
  4.Unweighted Graph:
   Edges do not have weights; all connections are treated equally.
   Can be directed or undirected.
  
  5.Cyclic Graph  or self graph:
   Contains one or more cycles (loops), where a cycle is a path that starts and ends at the same node.
   Can be directed or undirected.
  
  6. Acyclic Graph:
   Does not contain any cycles.
   A directed acyclic graph (DAG) is a directed graph with no cycles.
   
  7. Connected Graph:
   An undirected graph is connected if there is a path between every pair of nodes.
   A directed graph is strongly connected if there is a path between every pair of nodes in both    directions.
  
  8.Disconnected Graph:
   Contains at least two components that are not connected.  

  # Graph Representations
    -> There are two main ways to represent a graph:

    1. Adjacency Matrix:-
    A 2D array where rows and columns represent nodes, and each cell contains a value indicating whether an edge exists between the corresponding nodes.
    Good for dense graphs, but inefficient for sparse graphs due to memory usage.
    
    2. Adjacency List:-
    A list of lists where each node has a list of its neighbors.
    Good for sparse graphs, as it uses memory more efficiently.

  # Graph Operations and Algorithms :-
   
   1.Traversal:
     a.Breadth-First Search (BFS): Traverses the graph level by level, starting from a given node.
     b.Depth-First Search (DFS): Traverses the graph by exploring as deep as possible from a      starting node before backtracking.
   
   2.Shortest Path:
      a.Dijkstra's Algorithm: Finds the shortest path from a starting node to all other nodes in a weighted    graph.
      b.Bellman-Ford Algorithm: Similar to Dijkstra's algorithm, but can handle negative edge weights.
   
   3.Minimum Spanning Tree (MST):
      a.Kruskal's Algorithm: Finds the MST by selecting edges in increasing weight order and using disjoint    sets.
      b.Prim's Algorithm: Finds the MST by starting with one node and growing the tree by adding the smallest    edge at each step.
   
   4.Topological Sorting:
      Orders the nodes in a directed acyclic graph so that for every directed edge (u, v), node u comes before v.
  
    5.Cycle Detection:
       Checks whether a graph contains any cycles, which is important for certain applications like    scheduling tasks.
   
    6.Graph Coloring:
      Assigns colors to the nodes such that no two adjacent nodes have the same color.
   
    7.Network Flow:
      Algorithms such as Ford-Fulkerson and Edmonds-Karp find the maximum flow in a flow network.

 */
