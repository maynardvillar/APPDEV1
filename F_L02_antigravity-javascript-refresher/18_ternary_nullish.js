// 1. Pass or Fail Ternary
const grade = 78;
const result = grade >= 75 ? "Passed!" : "Failed!";
console.log(`Grade ${grade}: ${result}`);

// 2. Even or Odd Ternary
const number = 21;
const parity = number % 2 === 0 ? "Even" : "Odd";
console.log(`Number ${number} is: ${parity}`);

// 3. || vs ?? when age is 0, null, undefined
console.log("\n--- || vs ?? ---");

const age0 = 0;
const ageNull = null;
const ageUndefined = undefined;

// || (OR) treats 0 as falsy, so it falls back even when 0 is a valid value
console.log("age0 || 18       :", age0 || 18);           // 18 (0 is falsy!)
console.log("ageNull || 18    :", ageNull || 18);         // 18
console.log("ageUndefined || 18:", ageUndefined || 18);   // 18

// ?? (Nullish coalescing) only falls back for null and undefined, not 0
console.log("age0 ?? 18       :", age0 ?? 18);            // 0 (0 is kept!)
console.log("ageNull ?? 18    :", ageNull ?? 18);          // 18
console.log("ageUndefined ?? 18:", ageUndefined ?? 18);   // 18