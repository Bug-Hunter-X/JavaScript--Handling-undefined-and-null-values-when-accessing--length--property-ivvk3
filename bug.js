function foo(x) {
  if (x === null) {
    return 0; // Handle null
  }
  return x.length; // Error if x is not an object with a length property
}

console.log(foo(null)); // Output: 0
console.log(foo(undefined)); // Uncaught TypeError: Cannot read properties of undefined (reading 'length')
console.log(foo([1, 2, 3])); // Output: 3
console.log(foo(123)); // Uncaught TypeError: Cannot read properties of 123 (reading 'length')