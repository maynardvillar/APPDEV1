// 1. If, Else If, Else
let age = 21;
console.log("1. Age Check (Age: " + age + "):");

if (age < 18) {
    console.log("You are a minor.");
} else if (age < 60) {
    console.log("You are an adult.");
} else {
    console.log("You are a senior.");
}

// 2. For Loop
console.log("\n2. For Loop (Counting 1 to 5):");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

// 3. While Loop
console.log("\n3. While Loop (Counting down 5 to 1):");
let count = 5;
while (count >= 1) {
    console.log(count);
    count--; // This subtracts 1 from count each time
}

// 4. Switch Statement
console.log("\n4. Switch Statement (Subject: Application Development):");
let favoriteSubject = "Application Development";

switch (favoriteSubject) {
    case "Statistics":
        console.log("Time to analyze some data!");
        break;
    case "Financial Management":
        console.log("Time to balance the sheets!");
        break;
    case "Application Development":
        console.log("Time to write some awesome code!");
        break;
    default:
        console.log("That sounds like a great class!");
        break;
}