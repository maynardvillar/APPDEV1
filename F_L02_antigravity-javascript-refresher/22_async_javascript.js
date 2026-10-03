function fetchUserMock(callback) {
  setTimeout(() => {
    callback({ name: "Maynard", age: 21 });
  }, 1000);
}

fetchUserMock((user) => {
  console.log("Callback got user:", user);
});

function fetchUser() {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ name: "Maynard", age: 21 }), 1000);
  });
}

async function showUser() {
  try {
    const user = await fetchUser();
    console.log("Async got user:", user);
  } catch (error) {
    console.log("Failed to load user");
  }
}

showUser();

function getTodoWithCallback(callback) {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => {
      callback(null, data);
    })
    .catch(error => {
      callback(error, null);
    });
}

function handleTodo(error, data) {
  if (error) {
    console.error("Error fetching todo:", error);
  } else {
    console.log("Fetched todo:", data);
  }
}

getTodoWithCallback(handleTodo);

function getTodoPromise() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json());
}

getTodoPromise()
  .then(todo => console.log("Todo (promise):", todo))
  .catch(error => console.error("Something went wrong:", error));

async function getTodoAsync() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  const data = await response.json();
  return data;
}

async function fetchTodo() {
  try {
    const todo = await getTodoAsync();
    console.log("Todo (async):", todo);
  } catch (error) {
    console.error("Something went wrong:", error);
  }
}

fetchTodo();