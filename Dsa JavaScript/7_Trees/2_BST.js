  
/*
    In binary search tree we push the samller element to left of node 
    and greater element to right of node.
    It is binary tree so it only have two brach left and right
    Binary Search Tree:
        TimeComplexity: 
            Average:
            Insertion(O(logn))
            Searching(O(logn))

            Worse:
            Insertion : O(n)
            Search : O(n)
                suppose every element is greater that it's parent
                so we are always insertion node to right, and it becomes linear

                so fix this we have to make a binary search tree, which always
                have largest element at root and then following down.
                 
        
*/

class Node{
    constructor(val){
        this.data = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }

    insert(val){
        let newNode = new Node(val);
        let currNode = this.root;
        let prevNode = this.root

        if(this.root == null){
            this.root = newNode;
        }
        else{
            while(currNode != null){
                prevNode = currNode;
                if(currNode.data < newNode.data){
                    currNode = currNode.right;
                }
                else{
                    currNode = currNode.left;
                }
            }

            if(prevNode.data < newNode.data){
                prevNode.right = newNode;
            }
            else{
                prevNode.left = newNode;
            }

        }

        return prevNode;
    }


    insert_rec(val){

        function traverse(val,node){

            if(node == null){
                return new Node(val);
            }

            if(node.data < val){
               node.right = traverse(val,node.right);
            }
            else{
               node.left = traverse(val,node.left);
            }
            
            return node;
        }

        this.root = traverse(val,this.root);

    }


    find_rec(val, root){

        if(root == null || root.data == val){
            return root;
        }

        if(root.data < val){
           return this.find(val, root.right);
        }

        return this.find(val, root.left);
    }


    breathFirstSearch(){
        //breathFirstSearch means traversing the siblings
        var node = this.root;
        let data = []
        let queue = []
        queue.push(node);

        while(queue.length != 0){
            node = queue.shift(); //popping the first item
            data.push(node.data);

            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);

        }

        return data;
    }

    depthFirstSearch_PreOrder(){
        //preOrder means  traversing from top to bottom
        //the idea is to traverse the left branch completely and then go to right for every node.
        let data=[]
        let curr = this.root;

        function traverse(node){
            data.push(node.data);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }

        traverse(curr);
        return data;
    }

    depthFirstSearch_PostOrder(){
        //in post order we traverse the complete left brach of a node from bottom to node 
        //and then traverse right brach of a node from bottom to node and then traverse node
        let data=[]
        let curr = this.root;

        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.data);
        }

        traverse(curr);
        return data;
    }

    depthFirstSearch_inOrder(){
        //inOrder means traversing from bottom to top in left brach and top to bottom in right branch 
        //is gives a circular ring type order 
        let data=[]
        let curr = this.root;

        function traverse(node){
            if(node.left) traverse(node.left);
            data.push(node.data);
            if(node.right) traverse(node.right);
        }

        traverse(curr);
        return data;
    }
}

let bst = new BinarySearchTree();
// console.log(bst.insert(10));
// console.log(bst.insert(5));
// console.log(bst.insert(20));
// console.log(bst.insert(1));
// console.log(bst.insert(55))

bst.insert_rec(10)
bst.insert_rec(5)
bst.insert_rec(15)
bst.insert_rec(20)
bst.insert_rec(1)
bst.insert_rec(100)
bst.insert_rec(7)
bst.insert_rec(13)
// // console.log(bst)
// console.log("----------------------------------------------------------------")
// console.log(bst.find(55,bst.root));

console.log(bst.breathFirstSearch());
console.log(bst.depthFirstSearch_inOrder());

/*
                10
         5             15
    1        7     13      20 
                              100

    BFS:
        time complexity is O(n), because traversing each node
        space complexity is O(n) becuase we can have to store each node in queue

    DFS:
        time complexity is O(n), because traversing each node
        space complexity is constant because we are not using any extra sapce.
*/