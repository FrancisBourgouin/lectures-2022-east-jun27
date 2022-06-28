// Take all the values from the arguments in the terminal, add them together and output the sum
// Positive & negative values needs to be accounted for, and everything else should be ignored

// In: Numbers coming for arguments in the terminal
// In: $ node sum.js 1 3 5 -1 555 potato

// Out: Sum of all the numbers that were valid
// Out: $ 563

// Existential questions?
// How do we deal with potatoes ? (Non numbers)
// How do we get the arguments of the terminal (Node)
// What do we do if we got nothing? (0)

// Existential questions? v2
// How do we deal with potatoes ? (Non numbers)
const aNumber = 42;
const notANumber = "potato";

typeof aNumber === "number";
// Should we convert the strings to number? Voting says no. Process.argv says yes
// parseInt() or parseFloat()
const parsedNumber = Number(aNumber);
const parsedNumberButNot = Number(notANumber);

console.log(typeof parsedNumber, typeof parsedNumberButNot);
console.log(parsedNumber, parsedNumberButNot);

Number.isNaN(parsedNumberButNot);
// How do we get the arguments of the terminal (Node)
const myArgs = process.argv.slice(2);
const allArgs = process.argv;
console.log(allArgs);
const ohNo = [
  "/home/francis/.nvm/versions/node/v16.13.1/bin/node",
  "/home/francis/lighthouse/lectures/2022-east-jun27/w1d2/sum.js",
  "1",
  "3",
  "5",
  "-1",
  "555",
  "potato",
];
// What do we do if we got nothing? (0)

// Think about about the process
// What is data in / data out
// Do we want a function? Where do we run it?

const sumOfAllTerminalArguments = function () {
  // Fetch all the process arguments
  const processArgs = process.argv;
  // Declare the output (number)
  let output = 0;
  // Iterate over the elements of the array (arguments)
  for (const element of processArgs) {
    // For each element
    // Convert to a number
    const convertedValue = Number(element);
    // Check if it's a number or not
    if (Number.isNaN(convertedValue) === false) {
      // If it's a number, sum it up
      output = output + convertedValue;
    }
  }
  // Log or return the output
  console.log(output);
  return output;
};

sumOfAllTerminalArguments();
// const someArray = [1,2,3]

// for(let i = 0; i < someArray.length ; i++){
// 	const item = someArray[i]
// }
// for(const item of someArray){

// }
