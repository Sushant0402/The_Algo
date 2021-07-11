
function sameFrequency(a,b){
    //find if the two numbers contain the same digits or not.
    
    let sum = 0;
    
    while(a > 0){
        sum += a%10;
        a = Math.floor(a/10);
    }
    console.log(sum);
    while(b > 0){
        sum -= b%10;
          b = Math.floor(b/10);
    }
    console.log(sum);
    
    if(sum === 0){
        return true;
    }
    else{
        return false;
    }
    
  }
  
// console.log(sameFrequency(112233, 123));


function areThereDuplicates(...args) {
    // good luck. (supply any arguments you deem necessary.)
    
    if(args.length === 0){
        return false;
    }
    
    args.sort();
    
    for(let i=0; i<args.length-1; i++){
        console.log(args[i], args[i+1]);
        if(args[i] == args[i+1]){
            return true;
        }
    }
    
    return false;
  }

// console.log(areThereDuplicates(1,2,3,2))



function averagePair(arr, average){
    // add whatever parameters you deem necessary - good luck!
    if(arr.length === 0) return false;
    
    let i=0, j=arr.length-1;
    
    while(i < j){
        if((arr[i]+arr[j]) / 2 === average){
            return true;
        }
        else if((arr[i]+arr[j]) / 2 < average){
            i++;
        }
        else{
            j--;
        }
    }
    
    return false;
  }



//In this question we have to find a subarray of min length and sub equal to n
//good question for sliding window appraoch
function minSubArrayLen(arr, n){

    if(arr.length == 0) return 0;
    
    let i=0, j=0;
    let minLen = Infinity;
    let subArraySum = 0;
    
    while(j < arr.length){
        
        subArraySum += arr[j];
        
        if(subArraySum >= n){

            while(i < j && (subArraySum - arr[i]) >= n){
                subArraySum -=arr[i]
                i++;
            }

            minLen = Math.min(j - (i-1) , minLen);
        }
        
        j++;

    }

    if(subArraySum < n) return 0;
    
    return minLen;
}

// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39))


//In this question we have to find the longest substring 
//that without repeating character, can be solved using sliding window appraoch

function findLongestSubstring(str){

    var obj={}
    let maxLen = 0;
    let count = 0;
    let start = 0
    for(let i=0; i<str.length; i++){
        if(obj[str[i]] == undefined){
            obj[str[i]] = i;
        }
        else{
            
            maxLen = Math.max(i - start, maxLen)
            console.log(i,start, maxLen)
            if(start <= obj[str[i]] ){
                start = obj[str[i]]+1;
                obj[str[i]] = i;
            }
            console.log(start)
            console.log("-------------------------------------------")
        }

        
        
    }

    console.log(maxLen)
    maxLen = maxLen = Math.max(str.length - start, maxLen);
    console.log(maxLen)

    return maxLen;
    
}

console.log(findLongestSubstring("rithmschool"));