'use strict'
let input1 = parseFloat(prompt("Enter the min number"));
let input2 = parseFloat(prompt("Enter the max number"));

function randomInt(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    // Method Math.round() gets random numbers from 1 to 3 and round them like:
    // 4 - 4.4999999999 ≈ 4
    // 5.5 - 5.4999999999 ≈ 5
    // 6.5 - 6.9999999999 ≈ 6
    // So the probability of geting 4 or 6 is smaller
    // To even the chances we shoul use as min -> min - 0.5 and as max -> max + 0.5
    return Math.round(rand);
}
  
alert(`Random number from ${input1} to ${input2} is ${randomInt(input1, input2)}`);