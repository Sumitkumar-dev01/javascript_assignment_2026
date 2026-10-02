// Write a function validateEmail that checks if a given string is a valid email. If not, return the message "Invalid email format".


function validateEmail(email) {
  //Your code here
  try{
    const regex =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
    if(!regex.test(email)){
      throw new Error("invalid email format");
    }
    return true;
  }
  catch(error){
    return error.message;
  }
}

// Function call
console.log(validateEmail("example@example.com")); // Expected output: true
console.log(validateEmail("example.com"));        // Expected output: "Invalid email format"

  