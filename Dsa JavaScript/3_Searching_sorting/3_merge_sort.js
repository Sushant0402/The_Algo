
//always use let keyword in mergesort in javascript

function merge(arr,start, mid, end){

    // console.log(start,mid,end);
    let L = arr.slice(start,mid+1);
    let R = arr.slice(mid+1, end+1);

    // console.log(L,R)


    let i=0, j=0, k= start;

    while(i < L.length && j < R.length){
        if(L[i] < R[j]){
            arr[k] = L[i];
            i++;
        }
        else{
            arr[k] = R[j];
            j++;
        }
        k++;

    }

    while(i < L.length){
        arr[k] = L[i];
        i++;
        k++;

    }

    while(j < R.length){
        arr[k] = R[j];
        j++;
        k++;

    }

    // console.log(arr)
    // console.log("------------------")

}


function mergeSort(arr,start,end){

    if(start < end){
        // console.log("start ",start,"end ",end)
        let mid = Math.floor((start+end)/2);
        mergeSort(arr,start,mid);
        mergeSort(arr,mid+1,end);
        merge(arr,start,mid,end);
    }
    return arr;
}

let arr = [13,3,3,54,13,54,12,66,4, 134,67,7456,24,87,96,5,6,8]
console.log(arr.length)
// console.log(mergeSort(arr,0, arr.length-1 ));


function merge2(left,right){
    let arr = [];

    while(left.length && right.length){
        arr.push(left[0] < right[0] ? left.shift() : right.shift())
    }

    while (left.length) {
        arr.push(left.shift());
    }
    while (right.length) {
        arr.push(right.shift());
    }

    return arr;

    
}


function mergeSort2(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort2(arr.splice(0,mid));
    let right = mergeSort2(arr.splice(mid));
    return merge2(left,right);
}

console.log(mergeSort2(arr));