#!/usr/bin/env python
# coding: utf-8

# # Minimum Reversal Stack 

# In[9]:


def countBracketReversals(inputString) :
    # Your code goes here
    
    s = []
    
    r_s = []
    
    size = 0
    
    for ele in inputString:
        
        if(ele == '{'):
            s.append(ele)
            size+=1
        elif(size > 0 and s[-1] == '{' and ele == '}'):
            s.pop()
            size -=1
        else:
            r_s.append(ele)
    
    i = len(r_s)
    count = 0
    while(i>0):
        s.pop()
        r_s.pop()
        count+=1
        i-=1
    
    print(count)
    if(len(s)%2 == 0):
        return len(s)//2 + count
    else:
        return -1

st = input("Enter brackets : ")
print(countBracketReversals(st))


# In[15]:


def countBracketReversals(expr) :
    
    lenn  = len(expr)
    
    if(lenn % 2):
        return -1
    
    s = []
    
    for i in range(lenn):
        
        if(expr[i] == "" and len(s)):
            
            if(s[0] == '' ):
                s.pop(0)
            else:
                s.insert(0,expr[i])
                
        else:
            
            s.insert(0,expr[i])
        
    red_len = len(s)
    
    n = 0
    
    while (len(s) and s[0] == ""):
        s.pop(0) 
        n+=1
    
    return (red_len //2 +n%2)
    

st = input("Enter brackets : ")
print(countBracketReversals(st))


# In[ ]:




