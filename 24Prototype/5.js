// Description: Create a simple Inventory System in JavaScript that allows the following operations: Add Product: Add a new product to the inventory with a specified name and quantity. Update Quantity: Update the quantity of an existing product in stock. Remove Product: Remove a product from the inventory. View Inventory: Display all products with their quantities.


class InventorySystem {
  constructor() {
    this.inventory = {}; 
// Object to store product names and their quantities
  }
  // Add a new product
  addProduct(name, quantity) {
   //code here
  }

  // Update the quantity of an existing product
  updateQuantity(name, quantity) {
  //code here
  }

  // Remove a product from the inventory
  removeProduct(name) {
    //code here
  }

  // View all products in the inventory
  viewInventory() {
    //code here
  }
}

// Usage Example:
const inventory = new InventorySystem();

// Add products
inventory.addProduct("Laptop", 10); // Expected Output: "Product 'Laptop' added with quantity 10."
inventory.addProduct("Smartphone", 30); // Expected Output: "Product 'Smartphone' added with quantity 30."

// Update product quantity
inventory.updateQuantity("Laptop", 15); // Expected Output: "Quantity of 'Laptop' updated to 15."

// Remove product
inventory.removeProduct("Smartphone"); // Expected Output: "Product 'Smartphone' removed from inventory."

