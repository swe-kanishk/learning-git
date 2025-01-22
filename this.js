'use strict'

// this keyword when creating new object it is pointing to newly created object 
class Person {
    constructor(name) {
        this.name = name;
    }
    getPersonInfo() {
        return `Person name is ${this.name}`;
    }
}

const user1 = new Person('kanishk');

console.log(this)