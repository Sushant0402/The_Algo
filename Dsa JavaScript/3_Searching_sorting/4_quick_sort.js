
/*
    logic/idea
    choose a point in array as a pivot
        now move all the element less than this pivot to left to this pivot
        and greater than this pivot to right of this pivot
        and return the index of pivot
        now this means that pivot element is at its right position

        now we will call quickSort on start to pivot-1 and pivot+1 to end

    Worst case:
        when the array is sorted 1 2 3 4 5 6
        we choose pivot as first element
        so everything after pivot element if greate than that
        because, of this we get single element out of array that is it's correct position
        so in worst case we do n comparison for n element
        and due to this time complexity of quick sort rise to n^2
*/
function get_pivot(arr, start, end){
    let pivot = start; //choosing start index as pivot index
    let swapIndex = start;
    let i = start+1;
    while(i <= end){

        //if the current element is less than pivot
        //move the element to swapIndex
        if(arr[i] <= arr[pivot]){
            swapIndex++;
            let temp = arr[swapIndex];
            arr[swapIndex] = arr[i];
            arr[i] = temp;
            
        }
        i++;
    }

    //after doing this, all the element below swapindex is less than pivot
    //and all the element greater than swapindex is greater than pivot

    //now swap element at swapindex and pivot to move
    //the pivot element to its correct position
    let temp = arr[pivot];
    arr[pivot] = arr[swapIndex];
    arr[swapIndex] = temp;

    pivot = swapIndex;
    //now our pivot index is swapindex

    return pivot;
}

function quickSort(arr,start,end) {
    if(start < end){
        let pivot = get_pivot(arr,start,end);
        console.log(pivot);
        quickSort(arr,start,pivot-1);
        quickSort(arr,pivot+1,end);
    }

    return arr;
    
}

let arr = [3,1,2,4,5,44,672,434,6,774,2,434,56,673,243,2];
console.log(quickSort(arr,0, arr.length-1))


