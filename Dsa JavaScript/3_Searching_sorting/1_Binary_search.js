function print(...args){
    console.log(args)
}
function binarySearch(arr,num){
    // add whatever parameters you deem necessary - good luck!
    let i=0, j= arr.length-1;
    while(i < j){
        let mid = Math.floor((i+j)/2);
        if(arr[mid] == num){
            return mid+1
        }
        else if(arr[mid] < num){
            i = mid +1;
        }
        else{
            j = mid-1;
        }
    }
    
    return -1;
}

print(binarySearch([1,2,3,4,5],1))
