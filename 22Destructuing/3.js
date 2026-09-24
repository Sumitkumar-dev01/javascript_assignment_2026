// Write a program to extract specific properties from an object using destructuring. Given an object, extract the name and age properties into variables.


function getPersonDetails(person) {
  
   // Your code here   

}

const person = { name: "Alice", age: 25, city: "New York" };
const { name, age } = getPersonDetails(person);

console.log(name); // Output: Alice
console.log(age);  // Output: 25

