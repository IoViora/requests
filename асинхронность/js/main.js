//! Age promise
// const age = +prompt("enter your age");
// const newPromise = new Promise(function (resolve, reject) {
//   if (age > 18) {
//     resolve({ status: 200, data: "Access is allowed" });
//   } else {
//     reject({ status: 404, err: "Access is denied" });
//   }
// });
// newPromise
//   .then(result => console.log(result))
//   .catch(error => console.log(error))
//   .finally(() => console.log("This was age check"));

// const myPromise = new Promise((resolve, reject) => {})
//! Timeout, Interval and stop Interval.
// setTimeout(() => {
//   console.log("hello");
// }, 2000);
// let counter = 0;
// let func = setInterval(() => {
//   console.log("Hello setInterval!");
//   counter++;
//   if (counter > 5) {
//     clearInterval(func);
//   }
// }, 1000);
//! Promise Data
const myPromise = new Promise((resolve, reject) => {
  console.log("preparing your data...");
  setTimeout(() => {
    let data = {
      server: "localhost",
      port: 25511,
      status: 200,
    };
    // let data = null;
    if (data) {
      resolve(data);
    } else {
      reject("404! data is not found");
    }
  }, 2000);
});
// myPromise
//   .then(data => console.log(data))
//   .catch(err => console.log(err))
//   .finally(() => console.log("Finish"));

async function getData() {
  await myPromise
    .then(data => console.log(data))
    .catch(err => console.log(err))
    .finally(() => console.log("Finish"));
  await myPromise
    .then(data => console.log(data))
    .catch(err => console.log(err))
    .finally(() => console.log("Finish"));
  console.log("hello");
}
getData();

//! then - catching successful case
//! catch - catching unsuccessful mistake
//! finally - will work in any case at the end
//! resolve - callback for successful case - calling inside 'promise', takes data which are have to be returned
//! reject - callback for unsuccessful case - takes the position of mistake and returns it back.
//! async / await - construction, which uses when sent request (in case if need to wait for do request and then read the rest of the code)
