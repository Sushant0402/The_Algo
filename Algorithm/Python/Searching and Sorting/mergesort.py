def merge(arr, l, m, r): 
    n1 = m - l + 1
    n2 = r- m 
  
    # create temp arrays 
    L = [0] * (n1) 
    R = [0] * (n2) 
  
    # Copy data to temp arrays L[] and R[] 
    for i in range(0 , n1): 
        L[i] = arr[l + i] 
  
    for j in range(0 , n2): 
        R[j] = arr[m + 1 + j] 
    """
    Another way of copying data in L and R array
    L=arr[l:m+1]
    R=arr[m+1:r+1]
    n1=len(L)
    n2=len(R)


    Tc of merge sort is nlogn
    sc is n
    """
  
    # Merge the temp arrays back into arr[l..r] 
    i = 0     # Initial index of first subarray 
    j = 0     # Initial index of second subarray 
    k = l     # Initial index of merged subarray 
  
    while i < n1 and j < n2 : 
        if L[i] <= R[j]: 
            arr[k] = L[i] 
            i += 1
        else: 
            arr[k] = R[j] 
            j += 1
        k += 1
  
    # Copy the remaining elements of L[], if there 
    # are any 
    while i < n1: 
        arr[k] = L[i] 
        i += 1
        k += 1
  
    # Copy the remaining elements of R[], if there 
    # are any 
    while j < n2: 
        arr[k] = R[j] 
        j += 1
        k += 1
def mergesort(arr,l,r):
    if (l<r):
        mid=(l+r)//2 # mid=l+(r-1)//2 to avoid overflow

        mergesort(arr,l,mid)
        mergesort(arr,mid+1,r)

        merge(arr,l,mid,r)

# arr=[int(i) for i in input("Enter an space seprated array: ").strip().split() ]
# mergesort(arr,0,len(arr)-1)
# print(arr)

def mid(a,b):
    print((a+b)//2)
    print(a+(b-a)//2)
    print(a+(b-1)//2)
a,b=map(int,input().split())
mid(a,b)
