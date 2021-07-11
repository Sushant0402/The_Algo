/*
    HashMap is a data strucuture where every element is stored in a key value pair
    
    
*/

class HashMap{

    constructor(size = 4){
        this.map = new Array(size);
        console.log(this.map.length);
    }

    _hash(key){
        let random_prime = 31;
        let total = 0;

        for(let i = 0; i<Math.min(key.length, 100); i++){
            let value = key[i].charCodeAt(0) - 96;
            total = (total*random_prime + value) % this.map.length;
            console.log(total)
        }

        console.log("------------------------------------------")
        return total;
    }

    set(key, value){
        let index = this._hash(key);
        // console.log(index);
        if(this.map[index] == null){
            this.map[index] = []
        }
        this.map[index].push([key, value]);
    }

    get(key){
        let index = this._hash(key);
        // console.log(index);
        let temp = this.map[index];
        if(temp != null){
            for(let i = 0; i < temp.length; i++){
                if(temp[i][0] == key) return temp[i][1];
            }
        }

        return undefined;
    }
}

let myMap = new HashMap();
myMap.set("hello", "Sushant");
myMap.set("code","Milk is white")
myMap.set("pizza", "Pizza are tasty")
myMap.set("cats","code is complicated")
myMap.set("happy","let's see is it works")

console.log(myMap.map)

console.log(myMap.get("cats"));