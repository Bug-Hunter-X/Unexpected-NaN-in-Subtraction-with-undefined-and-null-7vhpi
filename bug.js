function myFunction(a, b) {
  return a - b;
}

console.log(myFunction(5, undefined)); //Output: NaN
console.log(myFunction(5, null));    //Output: 5
console.log(myFunction(undefined, 5));//Output: NaN