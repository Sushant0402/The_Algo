//This prolem can be solved using two pointer 
//two pointer mainly work for sorted array
//so whenever we have sorted array try for two pointer


//find sum pair to 0, in sorted array.
function sumZero(arr){

    let left = 0;
    let right  = arr.length - 1;

    let result = []

    while(left < right){
        if(arr[left]+arr[right] == 0){
            result.push([arr[left], arr[right]]);
            //always remember to increment left and decrement right here 
            //else infinite loop :-(   )
            left++;
            right--;
        }
        else if(arr[left]+arr[right] < 0){
            left++;
        }
        else{
            right--;
        }
    }

    return result;


}

// console.log(sumZero([-4,-3,-2,-1,0,1,2,3,10]));



function countUniqueValues(arr){

    if(arr.length == 0){
        return 0;
    }
    let i=0, j=0;

    while(j < arr.length){
        if(arr[i] == arr[j]){
            j++;
        }
        else{
            i++;
            arr[i] = arr[j];
            j++;
        }
    }

    return i+1;
}
//we can also do this using one count variable


console.log(countUniqueValues([]))
