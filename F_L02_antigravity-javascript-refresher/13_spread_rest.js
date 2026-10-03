const numbers = [5, 10, 15];
const newNumbers = [...numbers, 20, 25];
console.log(newNumbers);

const user = { name: "Maynard", age: 21 };
const newUser = { ...user, course: "BSIS" };
console.log(newUser);

function sum(...args) {
  return args.reduce((total, n) => total + n, 0);
}
console.log(sum(2, 4, 6, 8));