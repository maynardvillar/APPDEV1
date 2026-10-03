// 1. Spread Operator (Arrays)
const mySubjects = ["Application Development", "Statistics"];
const updatedSubjects = [...mySubjects, "Financial Management"];

console.log("Spread Array:");
console.log("Original Subjects:", mySubjects);
console.log("Updated Subjects:", updatedSubjects);

// 2. Spread Operator (Objects)
const profile = { name: "Maynard", age: 21 };
const updatedProfile = { ...profile, course: "BSIS", age: 22 };

console.log("\nSpread Object:");
console.log("Original Profile:", profile);
console.log("Updated Profile:", updatedProfile);

// 3. Rest Operator (Functions)
function collectArgs(...args) {
    console.log("\nRest Operator:");
    console.log("Collected Args:", args);
}

collectArgs("Maynard", 21, "BSIS", true);