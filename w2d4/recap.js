// Handle errors with a try{}catch(err){} block

try {
  throw new Error("Some error");
} catch (err) {
  console.log(err);
}

// try/catch only works with synchronous code

// Callback when there is a success
// Logging when there is a failure (error)
const someFunctionWithACallback = (action) => {
  try {
    action();
  } catch (err) {
    console.log("There was an error", err);
  }
};

// Callback when there is a success (err null, data is the data)
// Callback when there is a failure (err is error, data is null)
const someFunctionWithACallbackWithOptions = (action) => {
  try {
    action({ err: null, data: "" });
  } catch (err) {
    action({ err: err, data: null });
  }
};

// Callback when there is a success (specific functions)
// Callback when there is a failure (specific functions)
const someFunctionWithTwoCallbacks = (successAction, failAction) => {
  try {
    successAction("some data");
  } catch (err) {
    failAction(err);
  }
};

const someAsyncFunctionWithTwoCallbacks = (successAction, failAction) => {
  setTimeout(() => {
    try {
      successAction("some data");
    } catch (err) {
      failAction(err);
    }
  }, 1000);
};

const boilPromise = (amountOfTime) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        if (Math.random() > 0.8) {
          throw new Error("OH NO, KETTLE IS ANGRY");
        }
        resolve();
      } catch (err) {
        reject(err);
      }
    }, amountOfTime);
  });
};
