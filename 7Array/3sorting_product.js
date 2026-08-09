/**
 * Question 3: Sorting Products
Write a function sortProducts that sorts an array of product objects either by name (alphabetically) or price (ascending or descending).
 */



function sortProducts(products, sortBy, order = "asc") {
  //Your code here 
}

// Example Usage:
const products = [
  { name: "Shirt", price: 500 },
  { name: "Shoes", price: 800 },
  { name: "Hat", price: 300 },
  { name: "Jeans", price: 1000 }
];

// Sort by name (ascending)
console.log(sortProducts(products, "name", "asc"));
// Output: [{name: "Hat", price: 300}, {name: "Jeans", price: 1000}, {name: "Shirt", price: 500}, {name: "Shoes", price: 800}]

// Sort by price (descending)
console.log(sortProducts(products, "price", "desc"));
// Output: [{name: "Jeans", price: 1000}, {name: "Shoes", price: 800}, {name: "Shirt", price: 500}, {name: "Hat", price: 300}]


  