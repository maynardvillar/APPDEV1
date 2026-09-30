const students = [
  { name: "Maynard", grade: 90 },
  { name: "Tom", grade: 82 },
  { name: "Jerry", grade: 55 },
];

const passing = students.filter(s => s.grade >= 60);
console.log(passing.map(s => s.name));

const found = students.find(s => s.name === "Maynard");
console.log(found);

console.log(students.some(s => s.grade < 60));
console.log(students.every(s => s.grade >= 60));

const ranked = [...students].sort((a, b) => b.grade - a.grade);
console.log(ranked.map(s => s.name));