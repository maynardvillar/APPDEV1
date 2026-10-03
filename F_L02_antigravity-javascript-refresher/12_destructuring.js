// 1. Object Destructuring
const profile = { name: "Maynard", age: 21, course: "BSIS" };
const { name, age } = profile;
console.log("Object:", name, age);

// 2. Array Destructuring
const subjects = ["Application Development", "Statistics", "Financial Management"];
const [firstSubject, secondSubject] = subjects;
console.log("Array:", firstSubject, secondSubject);

// 3. Destructuring inside Function Parameters
function printName({ name, course }) {
    console.log(`Parameter: Hi, I'm ${name} studying ${course}.`);
}
printName(profile);