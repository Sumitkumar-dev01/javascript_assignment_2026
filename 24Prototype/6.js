// Description: Implement a basic calculator using JavaScript that supports the following operations: Addition: Add two numbers. Subtraction: Subtract one number from another. Multiplication: Multiply two numbers. Division: Divide one number by another (if the second number is not zero).


function Calculator() {
  this.result = 0; // To store the result of calculations
  // Addition
  this.add = function(a, b) {
   //code here
  };
  // Subtraction
  this.subtract = function(a, b) {
   //code here
  };
  // Multiplication
  this.multiply = function(a, b) {
    //code here
  };
  // Division
  this.divide = function(a, b) {
    //code here
  };
  // Get the result of the last operation
  this.getResult = function() {
   //code here
  };
}
// Usage example
const calculator = new Calculator();

// Addition
console.log(calculator.add(5, 3)); // Expected Output: 8
// Subtraction
console.log(calculator.subtract(9, 4)); // Expected Output: 5
// Multiplication
console.log(calculator.multiply(6, 7)); // Expected Output: 42
// Division
console.log(calculator.divide(10, 2)); // Expected Output: 5
// Division by zero
console.log(calculator.divide(10, 0)); // Expected Output: "Cannot divide by zero!"
