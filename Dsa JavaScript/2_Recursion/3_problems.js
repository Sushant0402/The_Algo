function print(...args){
    console.log(args)
}

function reverse(str){
    // add whatever parameters you deem necessary - good luck!
    // print(str)
    let n = str.length
    if(n <= 0){
        return "";
    }
    return str.charAt(n-1)+reverse(str.slice(0, n-1));

  
}

// print(reverse("awesome"));



function isPalindrome(str){
    // add whatever parameters you deem necessary - good luck!
    return str === reverse(str);
}

// print(isPalindrome("aabaa"));


function someRecursive(arr, func){
    // add whatever parameters you deem necessary - good luck!
    print(arr)
    
    if(arr.length <= 0){
        return false;
    }
    
    if(func(arr[0]) == true){
        return true;
    }
    
    return someRecursive(arr.splice(1), func);
}

const isOdd = val => val % 2 !== 0;

// print(someRecursive([1,2,3,4], isOdd))


function flatten(arr){
    // add whatever parameters you deem necessary - good luck!
    if(arr.length <= 0){
        return arr;
    }
    
    let newarr = []
    
    if(typeof(arr[0]) == "object"){
        // print(true, arr[0])
        let x = arr[0]
        newarr = flatten([x[0]]).concat(flatten(x.splice(1)))
        // print(newarr)
    }
    else{
        newarr.push(arr[0])
    }
    
    return newarr.concat(flatten(arr.splice(1)))
  }

// print(flatten([1,2,3,4,[5,6]]))


function capitalizeFirst (arr) {
    // add whatever parameters you deem necessary - good luck!
    if(arr.length <= 0){
        return arr
    }

    return [arr[0].charAt(0).toUpperCase()+arr[0].slice(1)].concat(capitalizeFirst(arr.splice(1)))

}

// print(capitalizeFirst(['car','taco','banana']))




function nestedEvenSum (obj, func) {
    // add whatever parameters you deem necessary - good luck!
    let n = 0;
    for(i in obj){
        print(i, obj[i])
        if(typeof(obj[i]) == 'object'){
            n+= nestedEvenSum(obj[i], func)
        }
        else if(func(obj[i])){
            n+=obj[i];
        }
    }

    print(n)

    return n;

}
  
  
//   var obj1 = {
//     outer: 2,
//     obj: {
//       inner: 2,
//       otherObj: {
//         superInner: 2,
//         notANumber: true,
//         alsoNotANumber: "yup"
//       }
//     }
//   }
  
//   var obj2 = {
//     a: 2,
//     b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//     c: {c: {c: 2}, cc: 'ball', ccc: 5},
//     d: 1,
//     e: {e: {e: 2}, ee: 'car'}
//   };



  const isEven = (val)=> val%2 == 0;
  
//   print(nestedEvenSum(obj1, isEven)); // 6
//   print(nestedEvenSum(obj2,isEven)); // 10




function capitalizeWords (arr) {
// add whatever parameters you deem necessary - good luck!
    if(arr.length <= 0){
        return arr;
    }

    return [arr[0].toUpperCase()].concat(capitalizeWords(arr.splice(1)));
}



function stringifyNumbers(obj){

   
    let newObj={}
    
    for(let key in obj){
        if(typeof(obj[key]) === 'number'){
            newObj[key] = obj[key].toString();
        }
        else if(typeof(obj[key]) === 'object' && !Array.isArray(obj[key])){
            newObj[key] = stringifyNumbers(obj[key]);
        }
        else{
            newObj[key] = obj[key]
        }
    }
    
    return newObj;
 }

// let obj = {
//     num: 1,
//     test: [],
//     data: {
//         val: 4,
//         info: {
//             isRight: true,
//             random: 66
//         }
//     }
// }

// print(stringifyNumbers(obj))



function collectStrings(obj){
    if(obj.length <= 0){
        return []
    }
    
    let newArr = []
    
    for(let key in obj){
        print(key, obj[key])
        if(typeof(obj[key]) == 'string'){
            newArr.push(obj[key])
            print("NewArr =",newArr)
        }
        else if(typeof(obj[key]) == 'object'){
            newArr = newArr.concat(collectStrings(obj[key]))
        }
    }
    
    return newArr;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

print(collectStrings(obj));
