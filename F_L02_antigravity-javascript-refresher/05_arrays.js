// 1. Create the subjects array
let subjects = ["Application Development", "Statistics", "Financial Management", "Business Process Management"];
console.log("1. Initial array:");
console.log(subjects, "(Length: " + subjects.length + ")");

// 2. Access first and last items
console.log("\n2. Accessing items:");
console.log("First item (index 0):", subjects[0]);
console.log("Last item (index 3):", subjects[3]); // Alternatively: subjects[subjects.length - 1]

// 3. Push and Pop (Back of the array)
subjects.push("Gender and Society");
console.log("\n3a. After push('Gender and Society'):");
console.log(subjects, "(Length: " + subjects.length + ")");

subjects.pop();
console.log("\n3b. After pop() (removes the last item):");
console.log(subjects, "(Length: " + subjects.length + ")");

// 4. Shift and Unshift (Front of the array)
subjects.shift();
console.log("\n4a. After shift() (removes the first item):");
console.log(subjects, "(Length: " + subjects.length + ")");

subjects.unshift("Web Development");
console.log("\n4b. After unshift('Web Development') (adds to the front):");
console.log(subjects, "(Length: " + subjects.length + ")");