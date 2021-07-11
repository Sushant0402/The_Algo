/*
 Graphs are based on idea of nodes/vertes and connections/edges
 Nodes are connected to some other nodes in a random manner
 and all these connections are called as graph

 Undirected graph:
    No direction associated with an edge.
    Like we can go from node A to B, but also B to A

 Directed graph:
    Direction associated with an edge.
    Like we can go from node A to B, but not from B to A.

 Example:
    Me and my friend follow each other. Undirected graph
    But I following a celebrity and celebrity not following me is a Directed Graph.

 Weighted graph:
    When we add a weight to a edge it becomes weighted graph
    Like Node on a map is a city, edge are rodes.
    So to calculate a journey route length we need to know the roads length
    so we can add weight to connection as length of road between those two city
    that are connected.
*/


//Undirected graph

class Graph{
   constructor(){
      this.adjacencyList = {};
   }

   addVertex(vertex){
      if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
   }

   addEdge(vertex1, vertex2){

      //if vertex is not defined return undefined
      // console.log(this.adjacencyList[vertex1], this.adjacencyList[vertex2])
      if(this.adjacencyList[vertex1] == null || this.adjacencyList[vertex2] == null) return undefined;

      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);

   }

   removeEdge(v1,v2) {

      this.adjacencyList[v1] = this.adjacencyList[v1].filter(
         v => v !== v2
      );

      this.adjacencyList[v2] = this.adjacencyList[v1].filter(
         v => v !== v1
      );
   }

   removeVertex(v1){
      let array = this.adjacencyList[v1];
      for(let i=0; i<array.length; i++){
         this.removeEdge(array[i], v1);
      }

      delete this.adjacencyList[v1];

   }


   DFS_recur(vertex){

      let visited = {};
      visited[vertex] = true;
      let result = [];
      let adjacencyList = this.adjacencyList;


      function traverse(vertex){
         if(vertex == null) return;
         result.push(vertex);
         let vertexConnection = adjacencyList[vertex];
         console.log(vertex, vertexConnection)
         for (let i = 0; i < vertexConnection.length; i++){
            //loop on every connection of this vertex, if any of connection vertex 
            //is not visited the visit it, else go to next.

            if(visited[vertexConnection[i]] == null){
               visited[vertexConnection[i]] = true; 
               //if not visited marking vertex as visited
               // console.log("Array",array)
               // console.log("Visite", visited)
               traverse(vertexConnection[i]);
            } 
            else if(visited[vertexConnection[i]] == true){
               //if current vertex is visited then we are not going to traverse that.
               continue;
            }
         }
      }

      traverse(vertex);

      return result;
   }

   DFS_iterative(vertex){
      const stack = [vertex];
      let visited = {}
      visited[vertex] = true;
      let currentVertex;
      let result=[];


      while(stack.length){
         
         currentVertex = stack.pop();
         result.push(currentVertex);

         this.adjacencyList[currentVertex].forEach(connection => {
            if(visited[connection] == null){
               visited[connection] = true;
               stack.push(connection);
            }
         })

      }

      return result;

   }

   BFS_recur(vertex){
      let visited ={};
      visited[vertex] = true;
      let result = [];
      let adjacencyList = this.adjacencyList;

      let queue = [vertex];

      function traverse(vertex){
         if(vertex == null) return;
         result.push(vertex);
         let connections = adjacencyList[vertex];

         for(let i = 0; i < connections.length;i++){
            if(visited[connections[i]] == null ){
               visited[connections[i]] = true;
               queue.push(connections[i]);
            }
         }

         traverse(queue.shift());
      }

      traverse(queue.shift());

      return result;
   }

   BFS_iterative(vertex){
      let visited = {};
      visited[vertex] = true;
      let result = []
      let queue = [vertex];

      while(queue.length){
         let currentVertex = queue.shift();
         result.push(currentVertex);

         let connections = this.adjacencyList[currentVertex];

         connections.forEach(connection => {
            if(visited[connection] == null){
               visited[connection] =true;
               queue.push(connection);
            }
         })
      }

      return result;
   }
}

let g = new Graph();




g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("D", "B");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");


console.log(g.adjacencyList);

// console.log(g.DFS_recur("A"));

// console.log(g.DFS_iterative("A"));

console.log(g.BFS_recur("A"));
console.log(g.BFS_iterative("A"));