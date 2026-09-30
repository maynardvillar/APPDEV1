console.log(21 == "21");
console.log(21 === "21");

let notDefined;
let empty = null;

console.log(notDefined);
console.log(empty);

const obj = {
  name: "Maynard",
  regularMethod: function () {
    console.log(this.name);
  },
  arrowMethod: () => {
    console.log(this.name);
  },
};

obj.regularMethod();
obj.arrowMethod();

const original = [10, 20, 30];

const copyByReference = original;
copyByReference.push(40);
console.log(original);

const copyBySpread = [...original];
copyBySpread.push(50);
console.log(original);
console.log(copyBySpread);