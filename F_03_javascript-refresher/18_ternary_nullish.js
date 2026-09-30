const score = 88;
const result = score >= 75 ? "Pass" : "Fail";
console.log(result);

const num = 12;
console.log(num % 2 === 0 ? "even" : "odd");

const user = { name: "Maynard" };
console.log(user.address?.city);

const age = 0;
console.log(age || 18);
console.log(age ?? 18);