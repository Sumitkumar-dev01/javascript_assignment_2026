// Write a program to split an object into two smaller objects using the spread operator. Specify which keys should belong to the first object and assign the remaining keys to the second object


function splitObject(obj, keys) {
  
  // Your code here

}

const original = { name: "Alice", age: 25, city: "New York", country: "USA" };
console.log(splitObject(original, ["name", "age"]));
// Output: [{ name: "Alice", age: 25 }, { city: "New York", country: "USA" }]


