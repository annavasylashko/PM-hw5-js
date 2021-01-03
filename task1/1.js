'use strict'
let n = parseInt(prompt("Enter first number"), 10);
let m = parseInt(prompt("Enter last number"), 10);
// With parseInt we convert string to number
// Second argument of parseInt is 10 as decimal

let output = "";

if (isNaN(n, m)) {
  alert("Your values are not numbers");
  // In order to catch an error
} else {
  for (let i = n + 1; i < m; i++) {
    output += i + "; ";
    // To save all numbers from the fist to the last
  }
}
alert(`The numbers between ${n} and ${m} are: ${output}`);
