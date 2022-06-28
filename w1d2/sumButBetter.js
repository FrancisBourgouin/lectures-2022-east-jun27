// sumOfAllTerminalArguments
// Takes in process.argv
// Output the sum of valid numbers

const sumOfAllTerminalArguments = function () {
  const processArgs = process.argv;
  let output = 0;
  for (const element of processArgs) {
    const convertedValue = Number(element);
    if (Number.isNaN(convertedValue) === false) {
      output = output + convertedValue;
    }
  }
  return output;
};

const result = sumOfAllTerminalArguments();
console.log(result);
// => !==

const sumOfAllTerminalArgumentsV2 = function () {
  const processArgs = process.argv;
  let output = 0;
  for (const element of processArgs) {
    // output = !Number.isNaN(Number(element)) ? output + Number(element) : output
    const convertedValue = Number(element);
    const valueIsNumber = !Number.isNaN(convertedValue); // Nice!
    if (valueIsNumber) {
      output += convertedValue;
    }
  }
  return output;
};

// !false, it's funny because it's true

const sumOfAllTerminalArgumentsV3 = function () {
  const processArgs = process.argv;
  let output = 0;
  for (const element of processArgs) {
    // output = !Number.isNaN(Number(element)) ? output + Number(element) : output
    const convertedValue = Number(element);
    const valueIsNumber = !Number.isNaN(convertedValue); // Nice!
    if (valueIsNumber) {
      output += convertedValue;
    }
  }
  return output;
};

const fetchUserProcessArgs = function () {
  return process.argv.slice(2);
};

const sanitizeInputToNumber = function (input) {
  const convertedValue = Number(input);
  const valueIsANumber = !Number.isNaN(convertedValue); // Nice!

  if (valueIsANumber) {
    return convertedValue;
  }

  return 0;
};

const sumOfAllNumbersInArray = function (listOfNumbers) {
  let output = 0;
  for (const element of listOfNumbers) {
    // output = !Number.isNaN(Number(element)) ? output + Number(element) : output
    output += sanitizeInputToNumber(element);
  }
  return output;
};

const args = fetchUserProcessArgs();

const outputProcessArgs = function () {
  console.log(fetchUserProcessArgs());
};
