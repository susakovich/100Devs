let promise = new Promise((resolve, reject) => {
  // the function is executed automaticlly when the promise is constructed
  // after 1 second signal that the job is done with the result 'done'

  setTimeout(() => {
    resolve("done");
  }, 1000);
});

let errPromise = new Promise((resolve, reject) => {
  // after 1 second signal that the job is finished with an error
  setTimeout(() => {
    reject(new Error("Whooops!"));
  }, 1000);
});

// Consumers then, catch
let promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("done!");
  }, 1000);
});
// resolve runs the first function in then
promiseTwo.then(
  (result) => alert(result),
  (error) => alert(error)
);
// case of rejection
let promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Whooops!!!"));
  }, 1000);
});
promiseThree.then(
  (result) => alert(result),
  (error) => alert(error)
);
// finally examples
new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("You are Done!");
  }, 2000);
})
  .finally(() => console.log("Promise ready"))
  .then((result) => console.log(result));
// finally catch case
new Promise((resolve, reject) => {
  throw new Error("error");
})
  .finally(() => alert("Promise ready")) // triggers first
  .catch((err) => alert(err)); // <-- .catch shows the error
