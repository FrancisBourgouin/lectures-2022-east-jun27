Check if a string converted to a number is a valid one or not

```js
const parsedNumber = Number(aNumber);
const parsedNumberButNot = Number(notANumber);

console.log(typeof parsedNumber, typeof parsedNumberButNot);
console.log(parsedNumber, parsedNumberButNot);

Number.isNaN(parsedNumberButNot);
```
