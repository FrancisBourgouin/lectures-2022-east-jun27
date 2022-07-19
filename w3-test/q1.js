/* Question 01

Convert an array of arrays into an object.

This is the inverse of the previous question.

Arrays will only have two elements: [key, value]

To keep this simple, the values will only be primitive types (number, string, etc.) and not other objects or array.

Furthermore, assume that the input is always clean/accurate. In other words, don't worry about handling edge cases.

Examples:

- arrayToObject([['a', 1], ['b', 2], ['c', 3]])
  => { a: 1, b: 2, c: 3 }
- arrayToObject([['name', 'Dave'], ['role', 'Instructor'], ['yearsOfExperience', 10]])
  => {name: 'Dave', role: 'Instructor', yearsOfExperience: 10}
*/

// Convert an array of arrays(2 elements) to an object, first is key, second is value
// In -> Array of arrays
// Out -> Object

const arrayToObject = (array) => {
  // Prepare the output
  const output = {};
  // Iterate over the array
  for (const tuple of array) {
    // first value as the key
    const key = tuple[0];
    // second value as the value
    const value = tuple[1];
    // append to the output
    output[key] = value;
  }
  // return the output
  return output;
};

const result = arrayToObject([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
console.log(result);
