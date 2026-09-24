// Write a function productStatus that takes stock and isDiscontinued. Return: 1. "Discontinued" if isDiscontinued is true. 2. "Out of Stock" if stock is 0. 3. "In Stock" if stock is greater than 0.



function productStatus(stock, isDiscontinued) {
    //Your code here
    return isDiscontinued ? "Discontinued": stock === 0 ? "out of stock" : "in stock"
}

// Test cases
console.log(productStatus(5, false));   // Output: "In Stock"
console.log(productStatus(0, false));   // Output: "Out of Stock"
console.log(productStatus(3, true));    // Output: "Discontinued"
console.log(productStatus(0, true));    // Output: "Discontinued"
console.log(productStatus(10, false));  // Output: "In Stock"


  