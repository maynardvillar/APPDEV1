// 1. Create the person object
let person = {
    name: "Maynard",
    age: 21,
    course: "BSIS"
};
console.log("1. Initial object created:");
console.log(person);

// 2. Access properties
console.log("\n2. Accessing properties:");
console.log("Using dot notation for name:", person.name);
console.log("Using bracket notation for course:", person["course"]);

// 3. Add favoriteSubject
person.favoriteSubject = "Application Development";
console.log("\n3. After adding favoriteSubject:");
console.log(person);

// 4. Add introduce() method
person.introduce = function() {
    console.log("Hi! My name is " + this.name + " and I love " + this.favoriteSubject + ".");
};
console.log("\n4. After adding introduce() method:");
console.log(person);
console.log("Calling the introduce() method:");
person.introduce();

// 5. Update age and delete course
person.age = 22;
console.log("\n5a. After updating age to 22:");
console.log(person);

delete person.course;
console.log("\n5b. After deleting course:");
console.log(person);