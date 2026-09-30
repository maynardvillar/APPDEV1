const raw = "  Maynard Villar  ";
const clean = raw.trim();
const [first, last] = clean.split(" ");
console.log(first.toUpperCase());
console.log(clean.includes("Villar"));
console.log(clean.slice(0, 7));
console.log(`Full name: ${first} ${last}`);

console.log(parseInt("21years"));
console.log((9.87654).toFixed(2));

const result = "xyz" / 2;
console.log(result);
console.log(Number.isNaN(result));