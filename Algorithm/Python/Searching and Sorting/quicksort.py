"""
TC is O(nLogn)

Although the worst case time complexity of QuickSort is O(n2)
which is more than many other sorting algorithms like Merge Sort and Heap Sort,
QuickSort is faster in practice, because its inner loop can be efficiently implemented on most architectures,
and in most real-world data. QuickSort can be implemented in different ways by changing the choice of pivot,
so that the worst case rarely occurs for a given type of data. 
However, merge sort is generally considered better when data is huge and stored in external storage.
"""
def swap(arr,i,j):
    arr[i],arr[j]=arr[j],arr[i]

def partition(arr,low,high):
    pivot=arr[high]
    i=low-1     # setting index of samllest element

    for j in range(low,high):
        if (arr[j]<pivot):
            i+=1
            swap(arr,i,j)
    swap(arr,high,i+1)
    return i+1
    
def quicksort(arr,low,high):
    if low<high:

        pi=partition(arr,low,high)

        quicksort(arr,low,pi-1)  #calling quicksort on left part , remember not calling quicksort on pivot point
        quicksort(arr,pi+1,high)  # calling quicksort on right part

arr=[int(i) for i in input("Enter a space seprated array: ").strip().split()]
quicksort(arr,0,len(arr)-1)
print(arr)