/* Question 00

Convert a given object into an array of arrays.

Given an object, create an array which contains arrays with the key/value pairs.

To keep this simple, the values will only be primitive types (number, string, etc.) and not other objects or array.

Furthermore, assume that the input is always clean/accurate. In other words, don't worry about handling edge cases.

Examples

- objectToArray({ a: 1, b: 2, c: 3 })
  => [['a', 1], ['b', 2], ['c', 3]]
- objectToArray({name: 'Dave', role: 'Instructor', yearsOfExperience: 10})
  => [['name', 'Dave'], ['role', 'Instructor'], ['yearsOfExperience', 10]]

*/

// Object -> Array of arrays
// In -> Object
// Out -> Array of Arrays

const firstObjectToArray = function (object) {
  // Prepare output (array)
  const output = [];
  // Iterate over the object
  for (const key in object) {
    // Create an array
    const newArray = [];
    // Append the key
    newArray.push(key);
    // Append the value
    newArray.push(object[key]);
    // Append the array to the output
    output.push(newArray);
  }
  // Return the output
  return output;
};

const objectToArray = function (object) {
  return Object.keys(object).map((key) => [key, object[key]]);
};

const result = objectToArray({ a: 1, b: 2, c: 3 });
console.log(result);
