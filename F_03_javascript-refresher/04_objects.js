const aboutMe = {
  name: "Maynard",
  age: 21,
  course: "BSIS",
  introduce: function () {
    console.log(`Hi, I'm ${this.name}, age ${this.age}.`);
  }
};

aboutMe.hobby = "Coding";
aboutMe.introduce();
console.log(aboutMe.hobby);