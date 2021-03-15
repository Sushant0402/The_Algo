#!/usr/bin/env python
# coding: utf-8

# # Intro

# In[ ]:


"""
    "Last in first out -"LIFO"  | OR | first come last go"
    Entry and exit are point are same
    Every element is added on top
    Every elemet is deleted from top
    
    Stack is made up of 3 Things
    1> push(insert)
    2> pop(delete)
    3> top(Access the top element stack)
    
    stack can be empty
    
    Size is size of stack at that time
    
    isEmpty to check if stack is empty
    
"""


# # Recursion Stack

# In[2]:


def fact(n):
    if(n==0 or n ==1):
        return 1
    else:
        return n*fact(n-1)

print(fact(5))

"""
    Here a stack is craeted
    fact(5) call fact(4)
    fact(4) call fact(3)
    fact(3) call fact(2)
    fact(2) call fact(1)
    fact(1) return 1
    and then every function return to its call
    
    so, where all these calling is get stored
    
    basically it is stored in a stack
    when each function gets called it is added on top of stack
    when each function tasks complete is pop out from stack
    
    stack is used to perform recursion
"""

