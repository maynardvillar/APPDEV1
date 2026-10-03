// 1. Function Declaration
function greet(name) {
    return "Hello, " + name + "!";
}

// 2. Arrow Function
const square = (num) => {
    return num * num;
};

// 3. Function returning an object
function calculator(a, b) {
    return {
        sum: a + b,
        difference: a - b,
        product: a * b,
        quotient: a / b
    };
}

// Test the functions and log the results
console.log(greet("Maynard"));
console.log(square(21));
console.log(calculator(20, 5));