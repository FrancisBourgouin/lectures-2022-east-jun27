/* Question 02

Write a function which will split an array into two arrays (i.e. partition it).

It will take two parameters, the first is an array of Integer values, and
the second will be a callback which will return a boolean.
If the callback returns true for an element, it should be placed into the left array,
otherwise it should be placed into the right array.

Examples:

- partition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], n => n % 2 === 0)
  => [[2, 4, 6, 8, 10], [1, 3, 5, 7, 9]]
- partition([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5], n => n < 0)
  => [[-5, -4, -3, -2, -1], [0, 1, 2, 3, 4, 5]]

*/

// Create a partition, 1 arr -> [2 arr]
// True on left, false on right
// In -> Array, callback
// Out -> Array

const oldPartition = (array, conditionCB) => {
  // Prepare the output
  const output = [[], []];
  //  Iterate over the array
  for (const element of array) {
    //    if the callback is truthy
    if (conditionCB(element)) {
      //      we want to put the value in the left array (0)
      output[0].push(element);
      //    else
    } else {
      //      we want to put the value in the right array (1)
      output[1].push(element);
    }
  }
  // Return the output
  return output;
};

const partition = (array, conditionCB) => {
  // Prepare the output
  const output = [[], []];
  //  Iterate over the array
  for (const element of array) {
    // if the callback is truthy
    const index = conditionCB(element) ? 0 : 1;
    output[index].push(element);
  }
  // Return the output
  return output;
};

const result = partition([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (n) => n % 2 === 0);

console.log(result);
