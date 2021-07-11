//when a function calls itself it's  known as recursion

//you should you know about call stack 
  // a call stack is a stack of functions which -  store which function is called over 
  //one another
  //whenver ever a function calls some another function, that function is pushed on call stack
  // and when a function returns, it is popped from call stack.
  //in stack somethis is always added on top and removed from top.


//in recursion a function call over and over itself

//Base Case - when a function stops calling itself is knows as base case.
//Different input -  we always pass a different input a recursive function so after some time
//it hits the base case.

//The main idea is to take a problem, chop it down into a smaller proplem 
//and solve that smaller problem.


//when you can get error
    //no base case
    //forgot to return something, or returning wrong value
//when you get an error it's known as stackoverflow!! because stack is overflown.
//example

//decreasing number
function decrement(num){
    if(num <= 0){
        console.log("Decrement to zero.")
        return;
    }
    console.log(num);
    num --;
    decrement(num);
}

// decrement(5);


//sum n natural numbers;

function sum(n){
    if(n <= 1){
        return 1;
    }

    return n+ sum(n-1);
}


// console.log(sum(4))


function factorial(num){
    if(num <= 1){
        return 1;
    }
    return num * factorial(num-1);
}

// console.log(factorial(5));



function removeEven(arr){

    let newArr = []

    if(arr.length == 0){
        return arr;
    }

    if(arr[0]%2 !== 0){
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(removeEven(arr.slice(1)))
    return newArr;

}

//in this remove even method we have to create a new arr to store the first element
//and then slicing the prev arr

console.log(removeEven([1,2,3,4,5,6,7]))