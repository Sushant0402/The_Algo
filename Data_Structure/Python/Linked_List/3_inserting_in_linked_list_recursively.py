#!/usr/bin/env python
# coding: utf-8

# # Inserting Recursively

# In[1]:


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

#here time complexity is 0(n)


# In[3]:


def insertRecLL(head,i,data):
    
    if(i<0):
        return head
    
    if(i == 0):
        
        newNode = Node(data)
        newNode.next = head
        return newNode
    
    if head == None:
        return None
    
    else:
        
        smallhead = insertRecLL(head.next,i-1,data)
        head.next = smallhead
        return head
        
head = insertRecLL(head,3,15)     
printLL(head)


# In[ ]:




