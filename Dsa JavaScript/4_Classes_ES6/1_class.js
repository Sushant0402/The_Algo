/*
    A Class is a blueprint for creating objects wih pre-defined properties and values;
    javaScript exactly does not have OOP but it works on prototype-based inheritance.

*/

class Person {
    Total_person = 0;
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        //"this" is referring to current object
    }

    //this is an instance method can only be accessed through object of this class
    get_age(){
        return this.age;
    }

    get_fullName(){
        return  `Your full name is ${this.firstName} ${this.lastName}`
    }

}


let Sushant = new Person("Susahnt", "Mishra", 20);
let Sushant1 = new Person("Susahnt", "Mishra", 20);
let Sushant2 = new Person("Susahnt", "Mishra", 20);
console.log(Sushant.get_fullName())
