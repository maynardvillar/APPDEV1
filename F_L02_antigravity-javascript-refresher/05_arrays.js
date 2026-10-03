let favoriteFoods = ["Adobo", "Sinigang", "Sisig"];
favoriteFoods.push("Halo Halo");
favoriteFoods.shift();

for (const food of favoriteFoods) {
  console.log(food);
}

const liked = favoriteFoods.map(food => "I like " + food);
console.log(liked);