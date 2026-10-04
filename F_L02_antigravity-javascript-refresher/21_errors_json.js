// 1. try/catch with divide
function divide(a, b) {
    if (b === 0) throw new Error("Cannot divide by zero!");
    return a / b;
}

// Success case
try {
    console.log("Success:", divide(90, 3));
} catch (error) {
    console.log("Error:", error.message);
}

// Failure case
try {
    console.log("Result:", divide(21, 0));
} catch (error) {
    console.log("Error caught:", error.message);
}

// 2. JSON Stringify and Parse
const user = { name: "Maynard", age: 21, course: "BSIS", isStudent: true };

const jsonString = JSON.stringify(user);
console.log("\nJSON String:", jsonString);
console.log("Type of jsonString:", typeof jsonString);

const parsedUser = JSON.parse(jsonString);
console.log("\nParsed User:", parsedUser);
console.log("Type of parsedUser:", typeof parsedUser);
console.log("Accessing parsedUser.name:", parsedUser.name);