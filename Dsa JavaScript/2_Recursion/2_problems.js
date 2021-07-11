
function power(base, exponent){
    if(exponent <= 0){
        return 1;
    }

    return base*power(base, exponent - 1);
}

// console.log(power(2,3))



function productOfArray(arr){
    console.log(arr)
    if(arr.length == 0){
        return 1;
    }
    
    return arr[0]*productOfArray(arr.splice(1));
}

// console.log(productOfArray([1,2,3]))


function fib(n){
    // add whatever parameters you deem necessary - good luck!
    if(n < 1){
        return 0;
    }
    if(n < 2){
        return 1;
    }
    
    return fib(n-1)+fib(n-2)
  }

console.log(fib(6))