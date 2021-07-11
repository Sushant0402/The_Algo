//Naive String search algo

function naiveSearch(long, short){
    for(var i=0; i<long.length; i++){
        if(long[i] == short[0]){
            //if first character of both strings match then we search further
            all_match = true;
            for(var j=0; j<short.length; j++){
                if(long[i+j] !== short[j]){
                    all_match = false;
                    break;
                }
            }

            if(all_match == true) console.log("match found at "+i);
        }
    }
}

console.log(naiveSearch("abcddefgffddfdeffffffgafad", "def"))