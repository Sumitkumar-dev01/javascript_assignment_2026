// Write a function checkLogin that checks if a user is logged in: 1. If isLoggedIn is true, return "Welcome User". 2. Otherwise, return "Please Login".



function checkLogin(isLoggedIn) {
   //Your code
   return isLoggedIn == true ? "welcome user" : "please login"
}

// Test cases
console.log(checkLogin(true));   // Output: "Welcome User"
console.log(checkLogin(false));  // Output: "Please Login"

  