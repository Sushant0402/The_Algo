class Node{
    constructor(val){
        this.data = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.length = 0;
        this.head = null;
        this.tail = null;
    }

    print(){
        let curr = this.head;
        let str= "";
        while(curr != null && curr.next != null){
            str+=curr.data+" ⇄ ";
            curr = curr.next;
        }
        if(curr != null) str+=curr.data;

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
            newNode.prev = this.tail;
            this.tail = newNode;
        }

        this.length++;

    }

    pop(){

        if(this.length == 0) return undefined;
        let lastNode = this.tail;

        if(this.length == 1){
            this.tail = this.head;
            this.head = null;
        }
        else{
            this.tail = lastNode.prev;
            this.tail.next = null;
            lastNode.prev = null;
        }
        
        this.length --;

        return lastNode.data;
    }

    shift(){
        if(this.length == 0) return undefined;

        let firstNode = this.head;
        if(this.length == 1){
            this.head = null;
            this.tail = null;
        }
        else{
            this.head = firstNode.next;
            firstNode.next = null;
            this.head.prev = null;
        }

        this.length --;
        return firstNode.data;
    }

    unshift(val){
        let newNode = new Node(val);

        if(this.length == 0){
            this.head = newNode;
            this.tail = newNode;
        }
        else{
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }
        this.length++;

    }

    traverse_forward(index){
        let curr = this.head;
        let i = 0;
        while(i != index){
            curr = curr.next;
            i++
        }

        return curr;
    }

    traverse_backward(index){
        let curr = this.tail;
        let i = this.length-1;
        while(index != i){
            curr = curr.prev;
            i--;
        }

        return curr;
    }

    get(index){
        if(index > this.length || index < 0) return undefined;
        
        let mid = Math.floor(this.length/2);

        if(index <= mid){
            return this.traverse_forward(index);
        }
        
         return this.traverse_backward(index);
        
    }


    set(index,val){

        let curr = this.get(index);
        if(curr != undefined){
            curr.data = val;
        }

        return curr;
    }

    insert(index, val){
        
        if(index === 0) return this.unshift(val);
        if(index === this.length) return this.push(val);

        let curr = this.get(index);
        if(curr != undefined){
            let newNode = new Node(val);
            curr.prev.next = newNode;
            newNode.prev = curr.prev;
            newNode.next = curr;
            curr.prev = newNode;
            this.length++;
            return curr.prev
        }

        return curr;
    }

    remove(index){

        if(index == 0) return this.shift();
        if(index == this.length) return this.pop();
        let toberemoved = this.get(index);

        if(toberemoved == undefined){return curr}

        let prevNode = toberemoved.prev;
        let nextNode = toberemoved.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;

        toberemoved.next = null;
        toberemoved.prev = null;

        this.length--;

        return toberemoved.data;

    }

    reverse(){
        
        let prevNode = null;
        let currNode = this.head;
        let nextNode = this.head;

        while(nextNode != null){
            nextNode = nextNode.next;
            currNode.next = prevNode;
            if(prevNode != null){
                prevNode.prev = currNode;
            }
            prevNode = currNode;
            currNode = nextNode;
        }

        this.tail = this.head;
        this.head = prevNode;


    }


}

let list = new DoublyLinkedList();
list.push(98);
list.push("last item");
list.push(51);
list.push(33);
console.log(list.pop());
list.print();
console.log(list.shift())
list.print();
list.unshift(66);
list.print();
console.log(list.get(1).data);
list.set(1,"Changed Item");
list.print();
list.insert(1,"Inserted at index 1");
list.print();
console.log(list.length)
list.insert(0,"Inserted index 0");
list.print();
list.insert(2,"Inserted index 2");
list.print();
list.remove(1)
list.print();
list.reverse();
list.print();