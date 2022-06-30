// What is tricky at the moment?

// Anonymous functions ???

const bob = [1, 2, 3];
console.log(bob);

console.log([1, 2, 3, 4]); // Array with no name -> Anonymous array

const bobby = function (something) {
  console.log("hello!");
};

(function (something) {
  console.log("hello!");
})();

// Functions are values, yes they are objects

// Data primitive values : boolean, number, string, null, undefined, (bigInt & Symbol)
// Data structures : Object
someFunction();
// Function definition: hoisted
function someFunction() {
  console.log("Some message");
}
function someFunction() {
  console.log("MWAHAHAHAHAHAHAH 👿👿👿👿");
}

// Function expression: not hoisted
const someOtherFunction = function () {
  console.log("Some other message");
};

// Function expression (arrow)
const someArrowFunction = () => {
  console.log("I'm an arrow");
};

const someAddition = (a, b) => a + b;

const anotherSomeAddition = function (a, b) {
  return a + b;
};

// WTH is this ?

// const somePerson = {
//   name: "Petit poulet",
//   greet: function () {
//     console.log(`Hello I'm ${this.name}`);
//   },
//   badGreet: () => `Hello I'm ${this.name}`,
//   storedGreeting: this.badGreet(),
// };

// somePerson.greet();
// somePerson.badGreet();

// Arrow functions: Great because they can be small, and don't need to type the function word

// HoF (Higher Order Functions)

// List of students, array of independent students
// Student, list of dependent properties (object)

const someStudents = [
  { name: "Danek Fill", isWebcamOn: true },
  { name: "Yuliia Matich", isWebcamOn: false },
  { name: "Philip Simpson", isWebcamOn: false },
];

const sayGoodMorningToStudentsWithTheirWebcamOn = function (studentList) {
  // For every student in the list
  // Student obj is : { name: "Danek Fill", isWebcamOn: true }
  // Check is webcam is on or not
  for (const student of studentList)
    if (student.isWebcamOn) {
      console.log(`Good morning ${student.name} !`);
    }
  // if it's on, say hi
  // if it's off, say nothing
};

// sayGoodMorningToStudentsWithTheirWebcamOn(someStudents);

const sayGoodMorningToStudents = function (studentList) {
  // For every student in the list
  // Student obj is : { name: "Danek Fill", isWebcamOn: true }
  // Check is webcam is on or not
  for (const student of studentList) {
    console.log(`Good morning ${student.name} !`);
  }
};

const sayHaveANiceDayToStudents = function (studentList) {
  // For every student in the list
  // Student obj is : { name: "Danek Fill", isWebcamOn: true }
  // Check is webcam is on or not
  for (const student of studentList) {
    console.log(`Have a nice day ${student.name} !`);
  }
};

const saySomethingToStudents = function (studentList, message) {
  for (const student of studentList) {
    console.log(`${message} ${student.name} !`);
  }
};

const sayGoodMorning = function (student) {
  console.log(`Good morning ${student.name} !`);
};
const pickySayGoodMorning = function (student) {
  if (student.isWebcamOn) {
    console.log(`Good morning ${student.name} !`);
  }
};

const doAnActionOnEveryStudent = function (studentList, action) {
  for (const student of studentList) {
    // sayGoodMorning(student);
    // pickySayGoodMorning(student);
    action(student);
  }
};

doAnActionOnEveryStudent(someStudents, sayGoodMorning);
doAnActionOnEveryStudent(someStudents, pickySayGoodMorning);
doAnActionOnEveryStudent(someStudents, (student) => console.log(student.name));
doAnActionOnEveryStudent(someStudents); // President of a company (HoF)

const addFiveAndSix = function () {
  return 5 + 6;
};

const addTwoNumbers = function (a, b) {
  return a + b;
};

const doSomethingWithTwoNumbers = function (a, b, action) {
  action(a, b);
};

const someArray = [1, 2, 3, 4];

someArray.indexOf(3);

someArray.forEach(function (element) {
  console.log(element);
});

someArray.forEach((element) => console.log(element));
