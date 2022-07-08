// What is a promise ?

// Say that you are going to do something
// Making a commitment
// Guarantee

// We will take a break soon -> Promise statement

// ...

// Promise time comes
// Truth
// Lied

// Everybody moves on.

const someAsyncFunctionWithTwoCallbacks = (successAction, failAction) => {
  setTimeout(() => {
    // ...wait
    try {
      // Say that you are going to do something
      successAction("some data"); // Truth
    } catch (err) {
      failAction(err); // Lied
    }
  }, 1000);
};

// someAsyncFunctionWithTwoCallbacks(
//   () => console.log("success"),
//   () => console.log("fail")
// );

// New data structure type (PROMISE)

// const boilPromise = (amountOfTime) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       try {
//         if (Math.random() > 0.8) {
//           throw new Error("OH NO, KETTLE IS ANGRY");
//         }
//         resolve();
//       } catch (err) {
//         reject(err);
//       }
//     }, amountOfTime);
//   });
// };

// const result = boilPromise(1000);
// console.log(result);

// boilPromise(1000)
//   .then(() => console.log("Water is ready!"))
//   .then(() => boilPromise(2000))
//   .then(() => console.log("Water is ready!"))
//   .then(() => boilPromise(2000))
//   .then(() => console.log("Water is ready!"))
//   .catch((err) => console.log(err));

// blueprint
// class Car{

// }

// new Car

// new Error("some message")

const someFctThatReturnsAPromise = () => {
  return new Promise((resolveAction, rejectAction) => {
    if (Math.random() > 0.5) {
      resolveAction("success!");
    } else {
      rejectAction("fail! :(");
    }
  });
};

// someFctThatReturnsAPromise()
//   .then((message) => console.log(message))
//   .catch((err) => console.log(err));

// database.query("SELECT * FROM users").then(data => )

const boilPromise = (amountOfTime) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (Math.random() > 0.8) {
          throw new Error("OH NO, KETTLE IS ANGRY");
        }
        resolve("Water is ready", amountOfTime);
      } catch (err) {
        reject(err);
      }
    }, amountOfTime);
  });
};
const brokenBoilPromise = (amountOfTime) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        throw new Error("OH NO, KETTLE IS ANGRY");

        console.log("Water is ready");
        resolve();
      } catch (err) {
        reject(err);
      }
    }, amountOfTime);
  });
};

const pourWaterPromise = (pourTime) => {
  return new Promise((resolve) => {
    console.log("pouring the water");
    setTimeout(() => {
      resolve();
    }, pourTime);
  });
};

const waitForExtractionPromise = (waitTime) => {
  return new Promise((resolve, reject) => {
    if (Math.random() > 0.8) {
      reject("Oh no, fell on the ground");
    } else {
      resolve();
    }
  });
};

const tasteCoffeePromise = () => {
  return new Promise((resolve, reject) => {
    resolve("tasty!");
  });
};

// if(true)

// const waitForOneSecond = () => waitForExtractionPromise(1000);

// boilPromise(1500)
//   .then(() => pourWaterPromise(3000))
//   .then(() => waitForExtractionPromise(1000))
//   .then(() => tasteCoffeePromise())
//   .then((flavor) => console.log(flavor))
//   .catch((err) => console.log(err));

// const addTwoPlusNumber = (num) => 2 + num;

// console.log(addTwoPlusNumber(10), () => addTwoPlusNumber(2));

const kettle1 = boilPromise(1000);
const kettle2 = boilPromise(5000);
// const kettle3 = brokenBoilPromise(5500);

Promise.race([kettle1, kettle2, kettle3])
  .then((message, time) => console.log("fastest only", message, time))
  .catch((err) => console.log("error!"));

Promise.all([kettle1, kettle2])
  .then((kettleList) => console.log(kettleList))
  .catch((err) => console.log(err));
