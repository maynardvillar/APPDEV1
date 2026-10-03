// 1. Array .map() Method
const subjects = ["Application Development", "Statistics", "Financial Management"];
console.log("1. Array .map() Method:");
subjects.map(subject => console.log("Maynard is taking: " + subject));

// 2. Object Destructuring
const profile = { name: "Maynard", age: 21, course: "BSIS" };
// Extracting properties directly into variables
const { name, age, course } = profile; 

console.log("\n2. Object Destructuring:");
console.log(`Hi! My name is ${name}, I am ${age} years old, and my course is ${course}.`);

// 3. The Spread Operator (...)
const firstSemSubjects = ["Application Development", "Statistics"];
// Taking the old array and "spreading" its contents into a new array
const allSubjects = [...firstSemSubjects, "Financial Management", "Business Process Management"];

console.log("\n3. Spread Operator:");
console.log("Combined subjects list:", allSubjects);