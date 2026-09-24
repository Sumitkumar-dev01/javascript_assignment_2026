// Write a function createCart that allows adding, removing, and viewing items in a shopping cart.



function createCart() {
  //Your code here
}

// Usage
const cart = createCart();
cart.add({ id: 1, name: 'Laptop', price: 1000 });
cart.add({ id: 2, name: 'Phone', price: 500 });
cart.remove(1);
console.log(cart.view()); // [ { id: 2, name: 'Phone', price: 500 } ]

  