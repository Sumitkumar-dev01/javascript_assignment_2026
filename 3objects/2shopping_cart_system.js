/**
 * Question 2:Shopping cart System
Description:Write a program in javascript where define function createShoppingCart where define an shoppingCart object with array of object which contain different item as a object with properties like name, price, quantity.Write a function addItem to add new items (with name, price, and quantity) to the cart.The program contain function calculateTotal which calculates the total price based on the quantity and price of the items in the cart.Once you add an item to the cart, it automatically recalculates the total.
 */


// Function to create a shopping cart object
function createShoppingCart() {
   //code here
   const shoppingCart = {
    items : [
     {
        name: "bluetooth",
        price: 1200, 
        quantity: 5,
    }, 
    {
        name: "laptop", 
        price: 86000, 
        quantity: 3
    }
]

   }
}

// Function to add a new item
function addNewItemToCart(cart, name, price, quantity) {
    const newItem = { name, price, quantity };
    cart.addItem(newItem);  // Add the new item to the cart
}

// Create a shopping cart instance
const myCart = createShoppingCart();

// Display initial total price of the cart
console.log(`Initial Total: $${myCart.calculateTotal()}`);

// Add a new item to the cart
addNewItemToCart(myCart, "Sneakers", 60, 1);

// Display updated total price of the cart
console.log(`Updated Total: $${myCart.calculateTotal()}`);
shoppingCart.addItem({ name: "Sneakers", price: 60, quantity: 1 });

// Updated total price after adding the new item
console.log(`Updated Total: $${shoppingCart.calculateTotal()}`);

