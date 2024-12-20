function myFunction(a, b) {
  // Handle nullish values
  a = a === null || a === undefined ? 0 : a;
  b = b === null || b === undefined ? 0 : b;
  return a - b;
}

console.log(myFunction(5, undefined)); //Output: 5
console.log(myFunction(5, null));    //Output: 5
console.log(myFunction(undefined, 5));//Output: -5