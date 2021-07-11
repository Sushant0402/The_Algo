
//this is a type of frequency count problem 
function validAnagram(str1, str2){

    //an anagram is permutation of some another string
    if(str1.length != str2.length){
        return false;
    }

    obj={};

    for(let i=0; i<str1.length; i++){ //for(var char in str) don't work

        if(obj[str1[i]] != undefined){
            obj[str1[i]] = obj[str1[i]]+1;
        }
        else{
            obj[str1[i]] = 1;
        }
    }

    for(let i=0; i<str2.length; i++){
        if(obj[str2[i]] != undefined){
            obj[str2[i]] = obj[str2[i]]-1;
        }
        else{
            return false;
        }
    }



    // for(var key in obj){
    //     if(obj[key] != 0){
    //         return false;
    //     }
    // }

    return true;

}


console.log(validAnagram("abc", "bac"));

//another ways
//1 - using a array - indices will work as character code
//2 - one variable - loop through string - sum every character code
    //subtract in second string loop
    //and check it at last is it zero?
