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
            start = obj[str[i]]+1;
            obj[str[i]] = i;
        }
        
    }

    maxLen = maxLen = Math.max(str.length - start, maxLen);

    return maxLen;