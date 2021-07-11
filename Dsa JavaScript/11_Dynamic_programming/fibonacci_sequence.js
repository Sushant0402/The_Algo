/*
    Dynamic programming are applied to those problems which have:
    Overlapping Subproblem - A problem with same property called again and again
    Optiamal Substructure - 

    Dynamic programming - A method for solving a complex problem by breaking it down into
    a collection of simple subproblems, solving each of those subproblems
    just once, and storing their solutions.
*/

//@memoization
function fib(n, memo=[]){

    if(memo[n] != undefined) return memo[n];

    if(n <= 2) return 1;

    let res = fib(n-1, memo)+fib(n-2, memo);

    memo[n] = res;

    return res;
}
 
console.log(fib(1000));


//@tabulation
function fibb(n){
    if(n <= 2) return 1;
    fibArr = [0,1,1];
    for(let i=3; i<=n; i++){
        fibArr[i] = fibArr[i-1] + fibArr[i-2];
    }

    return fibArr[n]
}

console.log(fibb(1000))

/*
    Both method if of order(n)
    but in memoization version the stack size me cause error
*/