'use strict'
let input1 = parseFloat(prompt("Enter first float number"));
let input2 = parseFloat(prompt("Enter second float number"));

if (isNaN(input1, input2)) {
  alert("Your values are not numbers");
  // In order to catch an error
} else {
  const func = (arg) => {
    return Math.round(arg * 0.3);
  };

  alert(
    `${input1} * 0.3 ≈ ${func(input1)} \n${input2} * 0.3 ≈ ${func(
      input2
    )}`
  );
}