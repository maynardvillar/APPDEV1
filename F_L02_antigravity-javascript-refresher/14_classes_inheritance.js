// The Parent Class
class Person {
    constructor(name) {
        this.name = name; // Setup the name
    }

    introduce() {
        console.log(`Hi! My name is ${this.name}.`);
    }
}

// The Child Class (Inherits from Person)
class Student extends Person {
    constructor(name, course) {
        super(name); // Sends 'name' up to the Person constructor
        this.course = course; // Setup the new course property
    }

    study() {
        console.log(`I am currently studying ${this.course}.`);
    }
}

// Create a new Student object using Maynard's details
const maynard = new Student("Maynard", "BSIS");

// Test the methods
maynard.introduce(); // Inherited from Person
maynard.study();     // Unique to Student