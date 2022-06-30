// Variables are like containers, they contain a value (or a reference to a value)

const someNumber = 5;
const someFunction = function () {
  return "Hello!";
};

// Difference between a parameter of a function and a variable ?
// Parameter is "short lived", and a variable is "long lived"

const someFunctionWithParameters = function (param1, param2) {
  // Params are available in the scope of the function
};

// What can we give as a parameter ?
// Everything you can give to a variable, you can give to a parameter

const outputToConsole = function (message) {
  console.log("==============");
  console.log(message);
  console.log("==============");
};

const funkyOutputToConsole = function (message, character) {
  console.log(`${character} ${message} ${character}`);
};

outputToConsole("WAZAAAAA");
funkyOutputToConsole("WAZAAAAA", "🔥");

const someList = ["Wesley", "Aren", "David", "Kaylie"];

const loopOverTheNames = function (listOfNames, action) {
  for (const name of listOfNames) {
    action(name);
  }
};

// outputToConsole is THE callback of the higher order function loopOverTheNames
// loopOverTheNames(someList, outputToConsole);
// loopOverTheNames(someList, outputToConsole());

// const coffeeOutputToConsole = (name) => funkyOutputToConsole(name, "☕");

// loopOverTheNames(someList, coffeeOutputToConsole);
loopOverTheNames(someList, (name) => funkyOutputToConsole(name, "☕"));

// Parent function is called the Higher order function
// A function passed as a parameter is the callback of the the parent function

const showValues = (name, isWebcamOn) => {
  console.log(`Student name is ${name}`);
  if (isWebcamOn) {
    console.log("And the webcam is on");
  } else {
    console.log("And the webcam is off");
  }
  console.log("End of student entry");
};

showValues(false);

// Loop over the elements, provides params for value, index, list
const loopOverElements = function (list, action) {
  for (let i = 0; i < list.length; i++) {
    action(list[i], i, list);
  }
};

loopOverElements(["a", "b", "c"], console.log);

loopOverElements(["a", "b", "c"], (value) => console.log("Value is:", value));

loopOverElements(["a", "b", "c"], (value, index) =>
  console.log(`value is ${value} at index ${index}`)
);

loopOverElements(["a", "b", "c"], (whatever, index) => console.log("Index is:", index));

const someNumbers = [1, 2, 3, 4, 5];

// someNumbers.sort()

const grade = { score: 85, subject: "math" };

const strictParent = (grade) => {
  if (grade.subject !== "physed") {
    if (grade.score > 90) {
      return true;
    }
    return false;
  }
  return true;
};

const chillParent = () => true;

const outputParentMessage = (grade, parentCheck) => {
  if (parentCheck(grade)) {
    return console.log("GOOD JOB.");
  }
  return console.log("SON I AM DISAPPOINT");
};

outputParentMessage(grade, chillParent);
outputParentMessage(grade, strictParent);
