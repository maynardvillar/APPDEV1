function greet(name) {
  return "Hello, " + name;
}

const square = (num) => {
  return num * num;
};

function calculator(a, b) {
  return { sum: a + b, product: a * b };
}

console.log(greet("Maynard"));
console.log(square(7));
console.log(calculator(6, 8));