/* Question 03 (stretch)

This is a STRETCH QUESTION.

Let's revisit Question 01 which had us convert an array of arrays into an object.

This time, make it support nested arrays.

The nested arrays also only contain 2 element arrays to represent key & value: [key, value].
However, this time we are allowing the value to be another array.

Non-array objects need NOT be supported/handled at all.

Examples:

- deepArrayToObject([['a', 1], ['b', 2], ['c', [['d', 4]]]])
  => { a: 1, b: 2, c: { d: 4 } }
- deepArrayToObject([['a', 1], ['b', 2], ['c', [['d', [['e', 5], ['f', 6]]]]]])
  => { a: 1, b: 2, c: { d: { e: 5, f: 6 } } }

*/

// Convert array of array to object, but this time, it's personal
// Recursive, or a conditional approach

// In -> array of arrays
// Out -> object

// [['a', 1], ['b', 2], ['c', [['d', 4]]]]

// {}
// {a:1, b:2, c:{d:4}}

// [['d', 4]]
// {d:4}
const deepArrayToObject = function (array) {
  // Prepare the output
  const output = {};
  // Iterate over the array
  for (const tuple of array) {
    // first value as the key
    const key = tuple[0];
    // second value as the value

    const value = tuple[1];

    if (Array.isArray(value)) {
      // If value is an array, then we want to separate the two
      // We need to create an object
      // value[0] is the key
      // value[1] is the value
      output[key] = deepArrayToObject(value);
    } else {
      // append to the output
      output[key] = value;
    }
  }
  // return the output
  return output;
};

const result = deepArrayToObject([
  ["a", 1],
  ["b", 2],
  ["c", [["d", 4]]],
]);
const result1 = deepArrayToObject([
  ["a", 5],
  ["b", 5],
  ["c", 5],
]);

console.log(result);
console.log(result1);

let bob = 0;
const someFunction = function () {
  console.log("Hello!");
  let string = "Bob";
  bob++;
  if (bob < 5) {
    string += someFunction();
  }
  console.log(string);
};
someFunction();
