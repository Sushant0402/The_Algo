/*
    Queue works on FIFO principle
    First in first out.

    Time complexity: 
        enqueue : O(1)
        dequeue : O(1)

    in queue we are adding to end and removing from start because
    in singly linked list removing from last in O(n)
        

*/

class Node{
    constructor(val){
        this.data = val;
        this.next = null;
    }
}

class Queue{

    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val){

        let newNode = new Node(val);

        if(this.size == 0){
            this.first = newNode;
            this.last = newNode;
        }
        else{
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size++;
    }

    dequeue(){
        if(this.size == 0) return null;

        let firstNode = this.first;
        if(this.size == 1){
            this.first = null;
            this.last = null;
        }
        else{
            this.first = firstNode.next;
            firstNode.next = null;
        }
        this.size--;
        return firstNode.data;
    }

    isEmpty(){
        return this.size == 0;
    }
}

let myQueue = new Queue();
myQueue.enqueue(10);
myQueue.enqueue(20);
myQueue.enqueue(30);
myQueue.enqueue(40);
myQueue.enqueue(50);

while(!myQueue.isEmpty()){
    console.log(myQueue.dequeue());
}