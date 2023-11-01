//Exercises Part 3-

// Exercise 1
// The following function returns true if the parameter age is greater than 18.
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Do you have your parents permission to access this page?');
//     }
// }
// Otherwise, it asks for a confirmation and returns its result.
// Rewrite it, to perform the same, but without if...else, and using arrow function.
//Solution:

const checkAge = (age) => {
  return age > 18
    ? true
    : confirm("Do you have your parents permission to access this page?");
};
let result = checkAge(19);
console.log(result);

// ###################################################################################################

//Exercise 2
// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.
const pow = (x, n) => {
  if (n === 0) {
    return 1;
  } else if (n < 0) {
    return 1 / (x * pow(x, -n - 1)); //case negative numbers
  } else {
    return x * pow(x, n - 1);
  }
};
console.log(pow(3, 2));
// JAVASCRIPT
// pow(3, 2) = 3 * 3 = 9
// pow(3, 3) = 3 * 3 * 3 = 27
// pow(1, 100) = 1 * 1 * ...* 1 = 1
// P.S. In this task the function should support only natural values of n: integers up from 1.

// ########################################################################################################
//3. Exercise
// Replace Function Expressions with arrow functions in the code:
// JAVASCRIPT
// function ask(question, yes, no) {
//   if (confirm(question)) yes()
//   else no()
// }
// ask(
//   "Do you agree?",
//   function() { alert("You agreed.") },
//   function() { alert("You canceled the execution.") }
// )

//Solution:
const ask = (question, yes, no) => {
  return confirm(question) ? yes() : no();
};

ask(
  "Do you agree?",
  () => {
    alert("You agreed.");
  },
  () => {
    alert("You canceled the execution.");
  }
);

// ########################################################################################################

// Exercise 4
// Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

let calculator = {
  read() {
    this.value1 = +prompt("Enter first value:");
    this.value2 = +prompt("Enter second value:");
  },
  sum() {
    return this.value1 + this.value2;
  },
  mul() {
    return this.value1 * this.value2;
  },
};

calculator.read();
alert(calculator.sum(1, 3));
alert(calculator.mul(2, 3));

// ########################################################################################################

// Exercise 5
// Write a function min(a,b) which returns the least of two numbers a and b. Use arrow function along with the question mark operator ?
//solution

const minFunction = (a = 0, b = 0) => {
  return a < b ? a : b;
};

console.log(minFunction(5, 3));
