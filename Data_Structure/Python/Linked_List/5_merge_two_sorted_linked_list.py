#!/usr/bin/env python
# coding: utf-8

# In[1]:


class Node:
    
    def __init__(self,data):
        self.data = data
        self.next = None

def takeInput():
    
    li = [int(i) for i in input().split()]
    
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

head1 = takeInput()
printLL(head1)


# In[2]:


head2 = takeInput()
printLL(head2)


# ## Merging Two Sorted Linked list
# 

# In[3]:


def merge_LL(head1,head2):
    if(head1 == None):
        return head2
    if(head2 == None):
        return head1
    if(head1 == None and head2 == None):
        return None
    
    final_head = None
    final_tail = None
    if(head1.data < head2.data):
        final_head = head1
        final_tail = head1
        head1 = head1.next
    else:
        final_head = head2
        final_tail = head2
        head2 = head2.next
            
    while(head1 != None and head2 != None):
        
            
        if(head1.data < head2.data):
            final_tail.next = head1
            final_tail = final_tail.next
            head1 = head1.next
            
        else:
            final_tail.next = head2
            final_tail = final_tail.next
            head2 = head2.next
            
    if(head1 != None):
        final_tail.next = head1
    else:
        final_tail.next = head2
    
    return final_head

head = merge_LL(head1,head2)
printLL(head)


# #  Midpoint

# In[4]:


def midpoint(head):
    if(head == None):
        return None
    
    fast=head
    slow=head
    
    while(fast.next != None and fast.next.next != None):
        slow = slow.next
        fast = fast.next.next
    
    return slow


# # Merge sort LL

# In[5]:


def merge_sort_LL(head):
    if(head == None or head.next == None):
        return head
    
    mid = midpoint(head)
    half1 = head
    half2 = mid.next
    mid.next = None
    
    half1 = merge_sort_LL(half1)
    half2 = merge_sort_LL(half2)
    
    newhead = merge_LL(half1,half2)
    
    return newhead


# In[6]:


head = takeInput()
newhead = merge_sort_LL(head)
printLL(newhead)

