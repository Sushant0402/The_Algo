#!/usr/bin/env python
# coding: utf-8

# # Reversing the Stack

# In[11]:


def reverseStack(s1,s2):
    if (len(s1) == 1):
        return s1
    
    print(s1)
    
    for i in range(len(s1)-1):
        s2.append(s1.pop())
    
    top = s1.pop()
    
    print(s2)
    
    for i in range(len(s2)):
        s1.append(s2.pop())
        
    s1 = reverseStack(s1,s2)
    
    s1.append(top)
    
    return s1
    


# In[12]:


s1 = [1,2,3,4]
s2 = []
r = reverseStack(s1,s2)
print(r)

