function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

try {
  console.log(divide(20, 0));
} catch (error) {
  console.log("ay, may mali:", error.message);
}

const user = { name: "Maynard", age: 21, isStudent: true };

const jsonString = JSON.stringify(user);
console.log(jsonString);

const parsedUser = JSON.parse(jsonString);
console.log(parsedUser.name);
console.log(typeof jsonString, typeof parsedUser);