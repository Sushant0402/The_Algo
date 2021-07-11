//sliding window approaches work when we have to work with subset of data

//let's take an example 
//find  maximum sum of successive n digit in a array

//Niave solutin
//take two for loop
//for every digit in first for loop run inner for loop n times
//O(n*2) time complexity

//but if we think more deeply, we get that we are finding successive
//sum , and we can use the previous sum that we have calculated
//and here comes sliding window approach


function maxSubarraySum(arr, num){
    if(num > arr.length){
        return null;
        //finding sum of digits not present in array
    }

    let n = arr.length;

    let maxSum = 0;
    let tempSum = 0;
    
    for(let i=0; i<num; i++){
        //calculating first num sum
        tempSum+=arr[i];
    }

    maxSum = tempSum;

    for(let i=num; i<n; i++){
        //and then using that previous calculated sum to created next sum
        tempSum = tempSum - arr[i - num] + arr[i];
        //tempsum  - value at num previous index + value at current index
        maxSum = Math.max(tempSum, maxSum);
    }

    return maxSum;
}


console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3], 3));