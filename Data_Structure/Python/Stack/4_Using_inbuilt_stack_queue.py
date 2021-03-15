#!/usr/bin/env python
# coding: utf-8

# # Using inbuilt Stack and Queue

# In[1]:


import queue


# ## Using queue

# In[2]:


#Queue is a first come first go Data Structure
q = queue.Queue()

q.put(1) #in queue we append element to bottom
q.put(2)
q.put(3)

while not q.empty():
    print(q.get()) #get is used to pop the element
    
#this data structure is like a pipe


# ## Using Stack

# In[3]:


s = queue.LifoQueue()  # we can create stack using LifoQueue
s.put(1)   #is stack we append element to top
s.put(2)
s.put(3)

while not s.empty():
    print(s.get())
    
#this data structure is like a bucket

