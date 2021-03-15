#!/usr/bin/env python
# coding: utf-8

# """
#     in default list indexing is from 0 to n-1
# 
#     in Linked list every element is connected to next element
#         and element is stored in memory at some random address
#     each element of liked list is known as "node"
# 
#     how to store liked list
#         in liked every node contain two things
#             1. Its data
#             2. Refrence to next node
#         last element will store 'none' refrence and known as 'tail'
# 
#         first element is known as 'head' of linked list
# 
#         if you know the address of head of liked list 
#         then you known about all node of liked list
# """

# In[5]:


class Node:
    
    def __init__(self,data):
        self.data = data
        self.next = None
        
a = Node(13)
b = Node(15)
a.next = b #putting address of b in a.next
#it is same as classes and object
# print(a.data)
# print(b.data)
# print(a.next.data) #a.next have address of b
# print(a) #these will print address of data or 'nodes'
# print(b)
# print(a.next)
#to comment lines in jupyter notebook use ctrl+/
print(b.next) # it print None last 'node' have no refrence

