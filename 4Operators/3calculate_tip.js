/**
 * Question 3: Calculate Tip
Write a function calculateTip that takes the total bill amount and the tip percentage, and returns the tip amount.
 */


function calculateTip(billAmount, tipPercentage) {

      const total_tip = billAmount*(tipPercentage/100)
      return total_tip; 
}

// Example usage:
console.log(calculateTip(200, 15)); // Output: 30
console.log(calculateTip(50, 10));  // Output: 5



