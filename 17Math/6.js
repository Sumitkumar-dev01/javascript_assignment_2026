// Write a function to calculate the LCM of two numbers. The LCM is the smallest positive integer that is divisible by both numbers.



function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b); // Helper function to calculate GCD
}

function lcm(a, b) {
   
  // Your code here

  }

console.log(lcm(4, 5)); // Output: 20


