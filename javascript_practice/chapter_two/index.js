console.log("9" + 9);
const a = "99";
const b = "99";
console.log(a + b); // a & b treat as a string.
console.log(+a + +b); // a & b treat as a number. I would use the unary plus operator to convert them to numbers first.

const number = 20;
console.log('this is a number ' + number);