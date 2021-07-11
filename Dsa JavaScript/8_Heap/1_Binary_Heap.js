/*
    Binay heap have two children
    And a heap have can have two configuration Max-Heap and Min-heap.
    In max-heap all the child element is less than parent element.
    In min-heap all the parent element is less than child element.
    In Max-heap the biggest element is always at the root.
    In Min-heap the smallest element is always at the root.
    In heap element is stored from left to right in a level.

*/

class BinaryHeap{
    constructor(){
        this.heap = [];
    }

    print(){
        console.log(this.heap);
    }

    swap(child,parent){
        let temp = this.heap[child]
        this.heap[child] = this.heap[parent]
        this.heap[parent] = temp;
    }

    bubbleUp(){

        let child = this.heap.length-1;
        let parent = Math.floor((child-1)/2);

        // console.log(parent,child);

        //in bubble up we check if child is greater than parent then we swap the parent with child
        //and repeat till the inserted element is it's correct position

        while(child >= 0 && parent >= 0){

            if(this.heap[child] > this.heap[parent]){
                this.swap(child,parent);

                child = parent;
                parent = Math.floor((child - 1)/2)
            }
            else{
                break;
            }
        }
    }

    insert(value){
        //in insertion we all element to end and bubble up to correct position
        this.heap.push(value);
        this.bubbleUp();
        this.print()
    }


    bubbleDown(){

        //move the last child to heap top
        this.heap[0] = this.heap[this.heap.length-1];
        //remove the last child
        this.heap.pop();

        //now we move the top element down to its correct position
        let parent = 0;
        let child1 = 2*parent+1;
        let child2 = 2*parent+2;

        this.print();

        while(child2 <= this.heap.length-1){
            //we will loop only till the child2 is less than equal to array length
            //above that array index is out of range.

            //if parent is less than child1 and child1 is less than child2
            //then swap with child 1
            if(this.heap[parent] < this.heap[child1] && this.heap[child2] < this.heap[child1]){
                this.swap(child1, parent);

                parent = child1;
                child1 = 2*parent+1;
                child2 = 2*parent+2;
            }
            //else if parent is less than child2, and here child2 is greater than child1
            else if(this.heap[parent] < this.heap[child2]){
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

    extractMax(){
        let max = this.heap[0];
        this.bubbleDown();
        this.print();
        return max;
    }
}

let b = new BinaryHeap();
b.insert(12)
b.insert(18)
b.insert(27)
b.insert(33)
b.insert(39)
b.insert(41)
b.insert(55)

console.log(b.extractMax());
console.log(b.extractMax());
console.log(b.extractMax());
console.log(b.extractMax());
console.log(b.extractMax());
console.log(b.extractMax());
console.log(b.extractMax());