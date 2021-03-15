#!/usr/bin/env python
# coding: utf-8

# """
# Main function of stack:
#     push
#     pop
#     top
#     isEmpty
#     size
# 
# we have to implement these functions
# """

# # Implementing Stack

# In[25]:


class Stack:
    
    def __init__(self):
        self.__data = []
        
    def push(self,item):
        self.__data.append(item)
    
    def pop(self):
        if(self.isEmpty()):
            print("Hey Stack is empty!!")
        return self.__data.pop()
    
    def top(self):
        if(self.isEmpty()):
            print("Hey Stack is Empty!!")
            return
        return self.__data[len(self.__data) - 1]
    
    def size(self):
        return len(self.__data)
    
    def isEmpty(self):
        return self.size() == 0
    
    def printStack(self):
        
        for i in range(len(self.__data)):
            print(self.__data[i])
    


# In[26]:


s = Stack()


# In[29]:


for i in range(10):
    s.push(i)
    print(s.top())
print("length "+str(s.size()))


# In[30]:


s.printStack()

