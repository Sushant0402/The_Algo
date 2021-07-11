
/*
    The idea is that we use a property of numbers
    we make a buckert from 0 - 9
    each bucket represent which digit of number we are currently working on

    so we loop through the list of numbers;

    we get first digit of every number and put that number in that bucket which
    matches it's digit
        like 2145 - the first digit is 5
        so we put 2145 in 5's bucket
    
    and after putting all the number in the bucket, we loop throught bucket
    from 0 to 9 and put the number that comes first and put that into origna list

    we repeat this process for n times
        where n is max number of digit that a number in array have
        like 1,23,44,666
            in this array we have maxNumer - 666
            and it's digit are 3

        so we repat this process for 3 times.
    
    and in end we get a sorted list.


    Time complexity - O(nk)
        n - length of array
        k - number of digit

    Space complexity - O(n+k);

*/

function getDigit(number, index) {
    return Math.floor(Math.abs(number)/ Math.pow(10, index))%10;
    //instead of looping to get a digit we can just use math.
}

function digitCount(number) {
    if(number == 0) return 1;
    return Math.floor(Math.log10(Math.abs(number)))+1;
}

function mostDigit(arr) {
    let maxDigits = 0;
    for(let i=0;i<arr.length;i++){
        maxDigits = Math.max(maxDigits,digitCount(arr[i]));
    }

    return maxDigits;
}

function radixSort(arr,n){
    for(let i=0;i<n;i++){
        let digitBucket = Array.from({length:10}, () => []);
        for(let j=0; j<arr.length;j++){
            let digit = getDigit(arr[j],i);
            digitBucket[digit].push(arr[j]);
        }

        arr = [].concat(...digitBucket);
    }

    return arr;
}

let arr = [33,123,5,777,128,465,434,65435];

console.log(radixSort(arr, mostDigit(arr)));


/*
    This mehtod can be converted to sort negative number too
    but it have to be modified
*/