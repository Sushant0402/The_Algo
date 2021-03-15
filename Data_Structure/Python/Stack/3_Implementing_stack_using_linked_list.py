#!/usr/bin/env python
# coding: utf-8

# To bulid stack we have to add these functions to stack
#   push
#   pop
#   top
#   size
#   isEmpty

# # Implementing Stack

# In[13]:


class Node:
    
    def __init__(self,data):
        self.data = data
        self.next = None


# In[21]:


class Stack:
    
    def __init__(self):
        self.__head = None
        self.__count = 0
        
    def push(self,item):
        newNode = Node(item)
        newNode.next = self.__head
        self.__head = newNode
        self.__count+=1
    
    def pop(self):
        if(self.isEmpty()):
            print("Stack is Empty!!")
            return
        
        self.__count-=1
        data = self.__head.data
        self.__head=self.__head.next
        
        return data
    
    def top(self):
        if(self.isEmpty()):
            print("Stack is Empty!!")
            return
        
        return self.__head.data
    
    def size(self):
        return self.__count
    
    def isEmpty(self):
        return self.__count == 0
    
        
        


# In[22]:


s = Stack()
s.pop()


# In[23]:


s.push(10)
s.push(20)
s.push(30)

while s.isEmpty() is False:
    print(s.pop())

