#!/usr/bin/env python
# coding: utf-8

# In[122]:


class Node:
    
    def __init__(self,data):
        self.data = data
        self.next = None

def takeInput():
    
    li = [int(i) for i in input().split()]
#     li = arr
    head =None
    tail =None
    
    for data in li:
        
        newNode = Node(data)
        
        if(head == None):
            
            head = newNode
            tail = newNode
            
        else:
            
            tail.next = newNode
            tail = newNode
            
    return head

def printLL(head):
    
    while head is not None:
        print(head.data, end =" ")
        head = head.next
    print()


# # Even Odd

# In[ ]:


def evenAfterOdd(head) :
    #Your code goes here
    if(head == None):
        return head
    
    temphead = None
    
    even_stack = []
    
    tail = None
    
    all_even = True
    
    while head is not None:
        
        if((head.data % 2) != 0):
            
            if(temphead == None):
                
                temphead = head
                tail = head
                head = head.next
                
            else:
                tail.next = head
                head = head.next
                tail = tail.next
                
            all_even = False
            
        else:
            even_stack.append(head)
            head = head.next
            
    if(all_even == True):
        
        temphead = even_stack[0]
        tail = even_stack[0]
        even_stack = even_stack[1:]
        
    for node in even_stack:
        
        tail.next = node
        tail = tail.next
    
    tail.next = None
    
    return temphead


#head = takeInput()
#printLL(head)
#head = evenAfterOdd(head)
#printLL(head)


# # Skip M Delete N

# In[ ]:


def skipMdeleteN(head, M, N) :
	#Your code goes here
    if(head == None):
        return None
    
    if(M == 0):
        return None
    
    newNode = Node(0)
    temphead = newNode
    tail = newNode
    
    while (head != None):
        
        for i in range(0,M):
            
            if(head != None):
                tail.next = head       # x 1 2 3 4 5 6 7 8 
                head = head.next       # m=2 n=2
                tail = tail.next
                tail.next = None
            else:
                break
        
        for j in range(0,N):
            
            if(head != None):
                head = head.next
            else:
                break
    
    temphead = temphead.next
    
    return temphead


# In[ ]:


head = takeInput()
a = int(input("skip "))
b = int(input("Delete "))
head = skipMdeleteN(head,a,b)
printLL(head)


# # Swap Two Nodes 

# In[ ]:


def swapNodes(head, i, j):
    
    temphead = head
    first_ele = None
    second_ele = None
    index = 0
    while (head != None):
        
        if(index == i):
            first_ele = head
        
        if(index == j):
            second_ele = head
        
        if(first_ele != None and second_ele != None):
            break
        
        head = head.next
        index+=1
    
    first_ele.data,second_ele.data = second_ele.data,first_ele.data
    
    return temphead


# # KReverse 

# In[ ]:


def kReverse(head,k):
    
    if(head == None):
        return None
    
    if(k == 0):
        return head
    
    curr = head
    prev = None
    index = 0
    while (curr!= None and index < k):
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
        index+=1
    
    head.next = kReverse(next,k)
    
    return prev


# In[ ]:


head = takeInput()
head = kReverse(head,4)
printLL(head)


# # Bubble sort 

# In[ ]:


def find_length(head):
    count = 0
    while(head != None):
        count+=1
        head = head.next
    
    return count

def bubbleSort(head):
    
    if(head == None):
        return None
    
    length = find_length(head)
    
    for i in range(length-1):
        prev = None
        curr = head
        nnext = curr.next
        swap = 0
        
        while( curr != None and nnext != None):
            
            if(curr.data > nnext.data):
                
                if(swap == 0):
                    #if nodes is swapped first time, means head of linked list will change
                    # so we change head of linked list 
                    head = nnext
                    prev = nnext
                    curr.next = nnext.next
                    nnext.next = curr
                    nnext = curr.next
                    swap+=1
                else:
                    #for swapping after first swapping is done
                    prev.next = nnext
                    curr.next = nnext.next
                    nnext.next = curr
                    prev = nnext
                    nnext = curr.next
            else:
                if(swap == 0):
                    #if first element is smaller than next element
                    #so we have to maintain the head
                    #so head become curr
                    head = curr
                    swap+=1
                    
                prev = curr
                curr = curr.next
                nnext = nnext.next
                    
            
                
        if(swap == 0):
            #if swap == 0 means nothing have been swapped means linked is already
            # sorted so we return head
            return head
    
    return head
        
    


# In[ ]:


head = takeInput()

head = bubbleSort(head)
printLL(head)

