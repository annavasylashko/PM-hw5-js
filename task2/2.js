'use strict'
let n = prompt("Enter first number (base)");
let m = prompt("Enter second number (power)");

// ----ARROW FUNCTION

if (isNaN(n, m)) {
    alert("Your values are not numbers");
    // In order to catch an error
} else {
    const pow = (base, exp) => {
        if (exp === 1) return base;
        else return pow(base, exp - 1) * base;
    };

    alert(`${n} raised to the power of ${m} is equal to ${pow(n, m)}`);
}

// -----FUNCTION EXPRESSION-----

if (isNaN(n, m)) {
    alert("Your values are not numbers");
    // In order to catch an error
} else {
    function pow1 (base, exp){
        let result = 1;
    
        for(let i = 0; i < exp; i++)
        {
            result = result * base;
        }
        return result;
    }
    
    alert(`${n} raised to the power of ${m} is equal to ${pow1(n, m)}`);
}


