// Write a function to convert a string containing a number (e.g., "123") into an actual number. If it is not a valid number, return NaN.


function convertToNumber(str) {
   // Your code here
   const number = Number(str); 
   return isNaN(number)?NaN:number;

}

console.log(convertToNumber("123")); // 123
console.log(convertToNumber("abc")); // NaN
  