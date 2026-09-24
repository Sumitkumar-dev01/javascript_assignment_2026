
// Write a function buttonState that checks if the form is valid (isValid) and submitted (isSubmitted): 1. If isSubmitted is true, return "Disabled". 2. If isValid is true, return "Enabled". 3. Otherwise, return "Pending Validation".




function buttonState(isValid, isSubmitted) {
    //Your code here

     return isSubmitted 
        ? "Disabled" 
        : isValid 
            ? "Enabled" 
            : "Pending Validation";
}

// Test cases
console.log(buttonState(false, true));    // Output: "Disabled"
console.log(buttonState(true, false));    // Output: "Enabled"
console.log(buttonState(false, false));   // Output: "Pending Validation"
console.log(buttonState(true, true));     // Output: "Disabled"

  