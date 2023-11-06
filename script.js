// promises

let myPromise = new Promise((resolve, reject) => {
  console.log("Processing response...");
  let userInput = prompt("Please enter your Name");
  if (userInput == "Aidan") {
    resolve("This worked.");
  } else {
    reject("This did not work.");
  }
});

myPromise.then((worked) => {
  console.log(`${worked}`);
});

myPromise.catch((worked) => {
  console.log(`${worked}`);
});

//asynchronous vs synchronous

let a = 1;
let b = 2;

function callSetTimeout() {
  console.log("The setTimeOut function has been called");
}

let testString = "this is a test string";

setTimeout(function (testString) {
  console.log("Async");
  console.log(testString);
}, 500);

// a = 20;

fetch("/").then(function () {
  console.log("Fetch");
});

console.log("Synchronous");

console.log(a);
console.log(b);

//_______________Second round of asynchronous v synchronous practice________________________//

let c = 1;
let d = 2;
let testString2 = "test";

setTimeout(
  function () {
    console.log("Async setTimeout code");
    console.log(testString2);
  },
  300,
  testString
);

fetch("/").then(function () {
  console.log("Fetch");
});

console.log("Synchronous");

console.log(c);
console.log(d);

setTimeout(() => {
  console.log("______");
});

// old promise way

makeRequest("Google")
  .then((response) => {
    console.log("Response been Received");
    return processRequest(response);
  })
  .then((processedResponse) => {
    console.log(processedResponse);
  })
  .catch((err) => {
    console.log(err);
  });

let e = 2;

function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}`);
    if (location === "Google") {
      resolve("Google says hi");
    } else {
      reject("We can only talk to Google");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing response");
    if (e == 1) {
      resolve(`Extra Information + ${response}`);
    } else {
      reject(`${e} was not equal to one`);
    }
  });
}

// async await

async function doWork() {
  try {
    const response = await makeRequest("Google");
    console.log("Response been Received");
    const processedResponse = await processRequest(response);
    console.log(processedResponse);
  } catch (error) {
    console.log(error);
  }
}

doWork();
