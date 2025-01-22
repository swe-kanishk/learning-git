class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }   
    getBirthYear() {
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

class Student extends User{
    constructor(firstName, lastName, age, course) {
        super(firstName, lastName, age);
        this.course = course;
    }
    getStudentInfo() {
        return `${this.firstName} ${this.lastName} is a student of ${this.course}`;
    }
}

class Employee extends User{
    constructor(firstName, lastName, age, company) {
        super(firstName, lastName, age)
        this.company = company;
    }
}

const student1 = new Student('kanishk', 'tiwari', 20, 'BCA');
const employee1 = new Employee('John', 'Doe', 30, 'Microsoft');