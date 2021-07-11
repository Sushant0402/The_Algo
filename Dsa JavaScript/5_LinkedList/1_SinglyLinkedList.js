/*
    Linked List work on the principal of nodes
    Node is a piece of memory in data 
    which store two things, one the data of current node
    and a pointer to the to the next node
*/

class Node {
    //this is a node class through which we will create nodes of linked list
    constructor(val){
        this.data = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        //we have to set these three properties do operations with singlyLinkedList.
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    print(){
        let curr = this.head;
        let str =""
        while(curr.next != null){
            str+=curr.data+" -> "
            curr = curr.next;
        }

        str+=curr.data;

        console.log(str);
    }

    push(val){

        let newNode = new Node(val);

        if(this.length == 0){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++; 
        return this;

    }
     
    pop(){

        if(this.length == 0) return undefined;
        
        let curr = this.head;
        let newTail = curr;
        while(curr.next != null){
            newTail = curr;
            curr = curr.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if(this.length == 0){
            this.head = null;
            this.tail = null;
        }

        return curr;
    }

    shift(){
        //shift method removes the first node of in LinkedList.
        if(this.length == 0) return undefined;
        this.head = this.head.next;
        this.length--;
        if(this.length == 0) this.tail = null;
        return this;

    }

    unshift(val){
        //unshift method takes a value and make it head of the list
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;

    }

    get(index){
        //this method is to fetch the value of given index
        if(index >= this.length || index < 0) throw new Error("index out of range");

        let i=0;
        let curr = this.head;
        while( i < index){
            curr = curr.next;
            i++;
        }

        return curr;
    }

    set(index,val){
        if(index >= this.length || index < 0) throw new Error("index out of range");

        let curr = this.get(index);

        curr.data = val;
        return curr;

    }

    insert(index, val){

        if(index >= this.length || index < 0) throw new Error("index out of range");
        if(index == 0) return this.unshift(val);
        if(index == this.length-1) return this.push(val);

        let curr = this.get(index-1);

        let newNode = new Node(val);
        newNode.next = curr.next;
        curr.next = newNode;
        this.length++;

        return curr;
    }


    remove(index){

        if(index >= this.length || index < 0) throw new Error("index out of range");
        if(index == 0) return this.shift();
        if(index == this.length-1) return this.pop();

        let curr = this.get(index-1);

        let removed = curr.next;
        curr.next = curr.next.next;
        this.length--;

        return removed.data;
    }

    reverse(){
        let prev = null;
        let curr = this.head;
        let next =  curr;

        while(next != null){
            next = next.next;
            curr.next = prev;
            prev = curr;
            curr = next;
            
        }

        this.tail = this.head;
        this.head = prev;
    }

}

// "p 1 2 3 4 5"

let list = new SinglyLinkedList();
list.push(10);
list.push(14);
list.push(23);
list.push(56);
list.push(72);
// console.log(list.pop());
// console.log(list.shift())
// console.log(list.shift())
// console.log(list.unshift(98))
list.print()
console.log(list.get(4))
console.log(list.set(2,5))
list.print()
console.log(list.insert(3,22));
list.print()
console.log(list.remove(5))
list.print();
list.reverse()
list.print();


/*
    Time complxity
        push O(1)
        pop O(1)
        shift O(1)
        unsift O(1)
        get O(index)  #array do better here
        insert O(index)
        remove O(index)
        reverse O(n)
*/