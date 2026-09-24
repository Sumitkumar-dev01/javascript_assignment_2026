// Write a program in javascript where define a 
// cartItem array which store the all item.
// Each item is represented as an object with 
// properties like name, price, and quantity.
// Use a loop to go through each item in the
//  cart and calculate its total price 
// (item price multiplied by item quantity).
// After calculating the total price of all items,
//  print or display the total to the user.





// Define the cartItem array with each item represented as an object
const cartItems = [
  { name: "Laptop", price: 800, quantity: 2 },
  { name: "Phone", price: 500, quantity: 3 },
  { name: "Headphones", price: 100, quantity: 1 }
];

// Function to calculate total price of all items in the cart
function calculateTotalPrice(cartItems) {
  let price = 0; 
   cartItems.forEach(item => {
    price += item.price
  });  
  return price;
}

// Call the function and log the result
const total = calculateTotalPrice(cartItems);
console.log("Total Cart Price: $" + total);


