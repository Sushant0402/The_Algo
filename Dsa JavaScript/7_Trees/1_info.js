/*
    Trees are a type of data structure when data is stored in then from
    of parent child relation

    In the top of a tree, there is a single node known as "root" of the tree
    and that root have many branches called child.

                            10
                        ↙       ↘
                    55             64
                 ↙      ↘         ↙    ↘
              34          22    56      98

    this is a basic structure of tree - 10 is root
    and 55 and 64 are it's chid
    Parent and child are conversly used on basis of where that node is present in the tree

    Something that to consider while:
        A parent node always point to a child node, it can't point to a sibling node
        sibling node are that node, that are present at same height in the tree
        or children of same parent.
        "When a node point to a sibling node then it becomes a graph"

        A tree can't have more than one root.
    
    Some terminology:
        Root : The top node in a tree
        Child: A node directly connected to another node when moving away from the root.
        Parent: The converse notion of a child.
        Siblings: A group of nodes with the same parent.
        Leaf: A node with no children.
        Edge: The connection between one node and another.


Application:
    HTML DOM
    Network Routing
    Artifical Intelligence
    Directory in a computer
    JSON
*/