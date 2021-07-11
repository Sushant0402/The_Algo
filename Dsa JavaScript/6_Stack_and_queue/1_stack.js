/*
    Stack work of LIFO principle
    we can make a stack with array but linked list is a better choice.
    because with linked list we can add and remove from start in O(1)

    Stack example:it is used in function calls

    Time complexity:
        push : o(1)
        pop : o(1)
        size : o(1)

*/

class Node{
    constructor(val){
        this.data = val;
        this.next = null;
    }
}

class Stack{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val){
        let newNode = new Node(val);
        if(this.size == 0){
            this.first = newNode;
            this.last = newNode;
        }
        else{
            newNode.next = this.first;
            this.first = newNode;
        }

        this.size++;
    }

    pop(){

        if(this.size == 0) return undefined;

        let firstNode = this.first;
        if(this.size == 1){
            this.first = null;
            this.last = null;
        }
        else{
            this.first = firstNode.next;
            firstNode.next = null;
        }
        this.size --;
        return firstNode.data;
        
    }

    isEmpty(){
        return this.size == 0;
    }
}


let myStack = new Stack();
myStack.push(100)
myStack.push(101)
myStack.push(102)
myStack.push(103)
myStack.push(104)


while(!myStack.isEmpty()){
    console.log(myStack.pop())
}