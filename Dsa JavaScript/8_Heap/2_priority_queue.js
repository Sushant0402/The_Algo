//A priority queue is data structure in which the top priority element
//is always on the top and less priority element below top priority
//This data structure can be implemented by array/List but it can be most
//efficient with queue with max-queue configuration becuase the top element is biggest.
/*
    Time complexity of PriorityQueue is same as a heap
    insertion - O(logn) - insertion is same are removal

    removal - O(logn) - remove from the top and move the bottom element to top
    and then bubble down- now on every level we have 2^level element
    and every element have two child, so to compare in a level we have to compare with only
    to child element, every child element is present at 2*parent_index so we are skipping over
    2*parent_index element to compare , so it's log(n)

    

    search - O(logn) //heap does not give any configuration to it's child
    //like left will be smaller than right, so it's O(n)- we might have to traverse the
    //all the element to search the element
*/



class Node{
    constructor(val,priority){
        this.data = val;
        this.priority = priority;
    }
}
class PriorityQueue{

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

        //in bubble up we check if child is greater than parent then we swap the parent with child
        //and repeat till the inserted element is it's correct position

        while(child >= 0 && parent >= 0){

            if(this.queue[child].priority > this.queue[parent].priority){
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
        this.print()
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

        this.print();

        while(child2 <= this.queue.length-1){
            //we will loop only till the child2 is less than equal to array length
            //above that array index is out of range.

            //if parent is less than child1 and child1 is less than child2
            //then swap with child 1
            if(this.queue[parent].priority < this.queue[child1].priority && this.queue[child2].priority < this.queue[child1].priority){
                this.swap(child1, parent);

                parent = child1;
                child1 = 2*parent+1;
                child2 = 2*parent+2;
            }
            //else if parent is less than child2, and here child2 is greater than child1
            else if(this.queue[parent].priority < this.queue[child2].priority){
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
        this.print();
        return max;
    }
}

let ER = new PriorityQueue();
ER.enqueue("common cold",1);
ER.enqueue("gunshot wound",5);
ER.enqueue("high fever",2)
// console.log(ER.dequeue())

ER.print()