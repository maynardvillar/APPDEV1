const userInfo = { name: "maynard", age: 21 };

function greet() {
  return "Hello from Maynard's module!";
}

export default greet;
export { userInfo };