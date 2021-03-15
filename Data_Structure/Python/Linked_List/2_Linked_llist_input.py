#!/usr/bin/env python
# coding: utf-8

# In[ ]:


class Node:
    
    def __init__(self,data):
        self.data = data
        self.next = None

#when you take input the last element should be -1

def takeInput():
    
    #get head of the linked list
    
    inputList = [int(ele) for ele in input().split()]
    
    head = None #initializing head to none, if there is no element none will be returned
    
    for currentData in inputList:
        
        if currentData == -1:
            break
        
        newNode = Node(currentData) #here storing data in new node
        
        #newNode have address of newly created Node
        
        if head is None:
            
            head = newNode #if there is elements head will point to address of first element of linked list
            
        else:
            currAddress = head
            
            #currAddress will have address of head and we will traverse till last 
            #element of linked list and add address of new element to last element
            #if element have next refrence/address as None it means it is the last element 
            
            while currAddress.next is not None:
                currAddress = currAddress.next
                
            currAddress.next = newNode
        
    return head
    
def printLL(head):
    
    while head is not None:
        print(str(head.data)+ "->",end="")
        head = head.next
        
    print("None")
    
    return
head = takeInput()
printLL(head)

"""
Time complexity for taking input is (n**2)
"""


# # Optimising time complexity for taking input in LL
# 

# In[3]:


class Node:
    
    def __init__(self,data):
        self.data = data
        self.next = None

#when you take input the last element should be -1

def takeInput():
    
    #get head of the linked list
    
    inputList = [int(ele) for ele in input().split()]
    
    head = None #initializing head to none, if there is no element none will be returned
    tail = None
    
    for currentData in inputList:
        
        if currentData == -1:
            break
        
        newNode = Node(currentData) #here storing data in new node
        
        #newNode have address of newly created Node
        
        if head is None:
            
            head = newNode #if there is elements head will point to address of first element of linked list
            tail = newNode # tail will point to first element
            
        else:
            
            # when more element is added
            # we know tail is pointing to previous element 
            # so we add refrence of new element to previous element via tail
            # and after adding address tail will have address of newly added element
            
            tail.next = newNode
            tail = newNode
        
    return head
    
def printLL(head):
    
    while head is not None:
        print(str(head.data)+ "->",end="")
        head = head.next
        
    print("None")
    
    return


head = takeInput()
printLL(head)
head = insertAtI(head,2,6)
printLL(head)

#here time complexity is 0(n)


# ## Printing Ith Index in Linked List
# 

# In[ ]:


#printing ith element from ll

def printIthIndex(head,i):
    if(head == None):
        return 0
    
    index = 0
    while head.next is not None:
        if(i == index):
            return head.data
        else:
            head = head.next
            index+=1
    if(i == index):
        print(head.data)
    
printIthIndex(head,3)


# ## Inserting element in linked list

# In[6]:


def length(head):
    count = 1
    
    while head.next is not None:
        count+=1
        head=head.next
 
    return count

def insertAtI(head,i,data):
    
    # you can insert element from 0 to length of linked list
    if(i<0 or i>length(head)):
        return head
    
    count=0
    prev = None
    curr = head
    while count<i:
        prev = curr
        curr = curr.next
        count+=1
    
    newNode = Node(data)
    if prev is not None:
        prev.next = newNode
    else:
        head = newNode
    newNode.next = curr
    
    return head

head = insertAtI(head,3,25)
printLL(head)

