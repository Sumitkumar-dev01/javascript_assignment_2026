// Write a function createChatManager that stores and retrieves live chat messages in a chat application.



function isValidEmail(email) {
  // Your code here
  const emailRegex = /^[^s@]+@[^s@]+.[^s@]+$/; 
  return emailRegex.test(email); 

}

// Example usage:
console.log(isValidEmail("example@gmail.com")); // true
console.log(isValidEmail("example@.com")); // false

  