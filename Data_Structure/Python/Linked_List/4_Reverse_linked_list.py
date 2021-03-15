#!/usr/bin/env python
# coding: utf-8

# In[44]:


class Node:
    
    def __init__(self,data):
        self.data = data
        self.next = None

def takeInput():
    
    li = [int(i) for i in input().split()]
    
    head =None
    tail =None
    
    for data in li:
        
        if data == -1:
            break
        
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

head = takeInput()
printLL(head)


# ## Reverse linked list function
# 

# In[14]:


def reverseLinkedList(head):
    if(head == None or head.next == None):
        return head
    
    changed_head = reverseLinkedList(head.next)
    tail = changed_head
    
    while tail.next is not None:
        tail = tail.next
    
    tail.next = head
    head.next = None
    return changed_head

printLL(head)
head = reverseLinkedList(head)
printLL(head)

#time complexity of this code is 0(n*2)[]
    


# In[30]:


def reverseLinkedList2(head):
    if(head == None or head.next == None):
        return head,head # if base case hit then both head and tail will be same
                #a single element have same head and tail
    
    changed_head,tail= reverseLinkedList2(head.next)
    
    tail.next = head #the last element of linked list will point to the current element 
    head.next = None # and the current element will point to None
    
    return changed_head,tail.next  #tail.next is pointing to the head or you can say the 
    #the current element which is added to the last of linked list

printLL(head)
head = reverseLinkedList2(head)[0]# fetching head from tuple which function return
printLL(head)

#time complexity of this approach is O(n)


# ###  Simplifying Reverse Function

# In[36]:


def reverseLL(head):
    if(head == None or head.next == None):
        return head
    
    change_head = reverseLL(head.next)
    #when this function is called on a head
    #and function return the reversed list
    #the head.next of head on which function is called become the tail of LL
    #so you can grab tail of linked list in O(1)
    
    tail = head.next 
    
    #afer fetching the tail element you can add the current element to last of tail
    tail.next = head
    
    #and the last element will not refer to anyone else
    head.next = None
    
    return change_head
    #and returning the changed head
    
printLL(head)
head = reverseLL(head)
printLL(head)
#TC is O(n)


# # Iteratively Reversing LL

# In[45]:


def reverseLLiterative(head):
    prev = None
    curr = head
    
    while curr is not None:
        next = curr.next #in next we will store the next element to curr
        curr.next = prev # after storing next the curr will link to prev
        prev = curr #prev will take position of current
        curr = next # and current will take position of next
    
    return prev

printLL(head)
head = reverseLLiterative(head)
printLL(head)
    


# ## Midpoint of linked list
# 

# In[48]:


def midpoint(head):
    fast=head
    slow=head
    index = 0
    
    #the logic is is we have two pointer 
    #slow and fast 
    #slow will move at speed of x
    #fast will move at speed of 2x
    #we know when fast will reach end of linked list slow will be in middle of linked list
    
    #there are two condition which declare that fast is reached to end of linked list
    #for odd length > fast.next == None
    #for even length > fast.next.next == None
    #if any condition is false we continue looping..
    
    while(fast.next != None and fast.next.next != None):
        slow = slow.next
        fast = fast.next.next
        index+=1
    
    print("Midpoint of Linked list "+str(index)+" data = "+str(slow.data))
midpoint(head)

