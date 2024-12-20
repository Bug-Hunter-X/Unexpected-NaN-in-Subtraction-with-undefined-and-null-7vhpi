# Unexpected NaN in JavaScript Subtraction

This repository demonstrates a common yet often overlooked error in JavaScript when performing subtraction with `undefined` and `null` values.  The `-` operator behaves unexpectedly in these scenarios, leading to `NaN` results, which can cause issues in calculations and program flow.

The `bug.js` file shows the error, and the solution is provided in `bugSolution.js`.  The solution emphasizes the importance of proper input validation and handling of nullish values to prevent unexpected behavior.

This example highlights the need for careful consideration when dealing with potentially undefined or null values during arithmetic operations in JavaScript.