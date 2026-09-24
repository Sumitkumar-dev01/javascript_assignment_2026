// Write a function sessionWarning that checks time left for a session (timeLeft):

// If timeLeft <= 0, return "Session Expired".
// If timeLeft <= 5, return "Warning: Session about to expire".
// Otherwise, return "Session Active".




function sessionWarning(timeLeft) {
   //Your code
   return timeLeft<=0 ? "session Expired":timeLeft<=5?"Warning:session about to expire":"session Active"
}

// Test cases
console.log(sessionWarning(0));   // Output: "Session Expire
console.log(sessionWarning(3));   // Output: "Warning: Session about to expire"
console.log(sessionWarning(5));   // Output: "Warning: Session about to expire"
console.log(sessionWarning(10));  // Output: "Session Active"
console.log(sessionWarning(-1));  // Output: "Session Expired"

  