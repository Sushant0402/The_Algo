// class PriorityQueue{
//     constructor(){
//         this.values = [];
//     }

//     enqueue(val, priority){
//         this.values.push({val, priority});
//         this.sort();
//     }

//     dequeue(){
//         return this.values.shift();
//     }

//     sort(){
//         this.values.sort((a,b) => a.priority - b.priority);
//     }

// }

class Node{
    constructor(val,priority){
        this.data = val;
        this.priority = priority;
    }
}
class PriorityQueue{
    //this is a min heap priority queue.
    constructor(){
        this.queue=[]
    }

    print(){
        console.log(this.queue);
    }

    swap(child,parent){
        let temp = this.queue[child]
        this.queue[child] = this.queue[parent]
        this.queue[parent] = temp;
    }

    bubbleUp(){

        let child = this.queue.length-1;
        let parent = Math.floor((child-1)/2);

        // console.log(parent,child);

        //in bubble up we check if child is less than parent then we swap the parent with child
        //and repeat till the inserted element is it's correct position

        while(child >= 0 && parent >= 0){

            if(this.queue[child].priority < this.queue[parent].priority){
                this.swap(child,parent);

                child = parent;
                parent = Math.floor((child - 1)/2)
            }
            else{
                break;
            }
        }
    }

    enqueue(value, priority){
        //in insertion we all element to end and bubble up to correct position
        let newNode = new Node(value, priority);
        this.queue.push(newNode);
        this.bubbleUp();
        // this.print()
    }


    bubbleDown(){

        //move the last child to queue top
        this.queue[0] = this.queue[this.queue.length-1];
        //remove the last child
        this.queue.pop();

        //now we move the top element down to its correct position
        let parent = 0;
        let child1 = 2*parent+1;
        let child2 = 2*parent+2;

        // this.print();

        while(child2 <= this.queue.length-1){
            //we will loop only till the child2 is less than equal to array length
            //above that array index is out of range.

            //if parent is greater than child1 and child1 is less than child2
            //then swap with child 1
            if(this.queue[parent].priority > this.queue[child1].priority && this.queue[child2].priority < this.queue[child1].priority){
                this.swap(child1, parent);

                parent = child1;
                child1 = 2*parent+1;
                child2 = 2*parent+2;
            }
            //else if parent is less than child2, and here child2 is greater than child1
            else if(this.queue[parent].priority > this.queue[child2].priority){
                this.swap(child2,parent);

                parent = child2;
                child1 = 2*parent+1;
                child2 = 2*parent+2;
            }
            //else parent is greater than child so break
            else{
                break;
            }
        }
    }

    dequeue(){
        let max = this.queue[0];
        this.bubbleDown();
        // this.print();
        return max;
    }
}

class WeightedGraph{
    constructor(){
        this.adjacencyList = {};

    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight){

        if(this.adjacencyList[vertex1] == null || this.adjacencyList[vertex2] == null) return undefined;
  
        this.adjacencyList[vertex1].push({node: vertex2, weight:weight});
        this.adjacencyList[vertex2].push({node: vertex1, weight});
  
    }

    //dijkstra algo
    shortestPath(start, finish){

        const nodes = new PriorityQueue();
        const distance = {}
        const parent = {} //this object will store current node comes from which node.
        let path = [];
        let smallest;

        for(let vertex in this.adjacencyList){
            //storing every vertex in priorityQueue with its priority
            if(vertex == start){
                distance[vertex] = 0;
                nodes.enqueue(vertex, 0); //{node, priority}
            }
            else{
                distance[vertex] = Infinity;
                nodes.enqueue(vertex,Infinity);
            }

            parent[vertex]= null;
        }
        console.log("nodes",nodes);
        console.log(nodes.queue.length)

        while(nodes.queue.length >= 0){
            smallest = nodes.dequeue().data; //dequeue always gives smallest element
            //means it the smallest distance from parent node.
            if(smallest == finish){
                //if the smallest node is last node then we are done.
                //if the smallest node (or shortest distance node) is final node then break,

                //push all the nodes in path by traversing the parent object
                while(parent[smallest]){

                    path.push({node: smallest, distance: distance[smallest]});

                    smallest = parent[smallest]; //updating smallest to parent of smallest
                }
                break;
            }

            if(smallest || distance[smallest] !== Infinity){
                //if smallest is not null then, we are going to iterate over the connections of smallest node

                for(let neighbor in this.adjacencyList[smallest]){

                    //for in loop gives un index of element rather than actual element
                    //so neighbor will be 0 , 1 and so on
                    let nextNode = this.adjacencyList[smallest][neighbor]; 

                    if(parent[smallest] == nextNode.node) continue; //means if nextNode is parent of current node/smallest node then continue
                    //of you can say smallest node comes through nextNode

                    console.log("Current Node", smallest, "next", nextNode)

                    let distanceFromStart = distance[smallest]+nextNode.weight; 
                    //distance[smallest] will store the distance of smallest node from start node.
                    //so distanceFromStart mean, how far is the smallest neighbor from start node.

                    console.log("distance", distanceFromStart)

                    let nextNeighbor = nextNode.node; //storing node name, because nextNode contain {node, priority}

                    if(distanceFromStart < distance[nextNeighbor]){ //if the calculated distance from start 
                        //is less than stored distance then we are going to update the stored distance.

                        distance[nextNeighbor] = distanceFromStart; 

                        parent[nextNeighbor] = smallest; //and also change the parent of smallest node/current node

                        nodes.enqueue(nextNeighbor, distanceFromStart); //and put this neighbor of smallest/current in queue with it's priority as the distance from start

                    }

                    console.log(distance)
                    console.log(parent)
                    console.log(nodes)
                }
            }
        }

        path = path.concat({node: smallest, distance: distance[smallest]}).reverse();

        let p ="";
        path.forEach(function(ele){
            p+= `-> ${ele.node}(${ele.distance}) `
        })

        console.log(p)

        return path
    }


}

let g = new WeightedGraph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("E", "B", 3);
g.addEdge("C", "D", 2);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);

// console.log(g.adjacencyList)

console.log(g.shortestPath("A","E"));

/*
{
  A: [ { node: 'B', weight: 4 }, { node: 'C', weight: 2 } ],
  B: [ { node: 'A', weight: 4 }, { node: 'E', weight: 3 } ],
  C: [ { node: 'A', weight: 2 }, { node: 'D', weight: 2 } ],
  D: [{ node: 'C', weight: 2 },{ node: 'E', weight: 3 },{ node: 'F', weight: 1 }],
  E: [{ node: 'B', weight: 3 },{ node: 'D', weight: 3 },{ node: 'F', weight: 1 }],
  F: [ { node: 'D', weight: 1 }, { node: 'E', weight: 1 } ] 
}
*/
