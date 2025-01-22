class CreateUser {
    #lastName;
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.#lastName = lastName;
        this.age = age;
    }
    // static property 
    static count = 0;
    // static block 
    static {
        console.log('static block');
    }
    #getBirthYear() {
        return new Date().getFullYear() - this.age;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(value) {
        const [firstName, lastName] = value.split(' ')
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const newUser = new CreateUser('John', 'Doe', 30);
const newUser2 = new CreateUser('kanishk', 'tiwari', 20);


// const user =  {
//     firstName: 'kanishk',
//     lastName: 'tiwari',

//     get fullName() {
//         return `${this.firstName} ${this.lastName}`;
//     },

//     set fullName(value) {
//         const [firstName, lastName] = value.split(' ')
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }
console.log('hii')