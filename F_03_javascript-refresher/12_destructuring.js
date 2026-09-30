const person = { name: "Maynard", age: 21 };
const { name, age } = person;
console.log(name, age);

const hobbies = ["Eating", "gaming", "sleeping"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

function printName({ name }) {
  console.log(name);
}

printName(person);