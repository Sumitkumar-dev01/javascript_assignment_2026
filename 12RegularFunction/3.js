// Create a function generatePassword that 
// generates a random, secure password with 
// specified criteria (e.g., length, uppercase letters,
//  numbers, special characters).


function generatePassword(length, useSpecialChars) {
  //Your code here
   const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const specialChars = "!@#$%^&*";
  let pool = chars;
  if(useSpecialChars){
    pool += specialChars;
  }

  let password = ""; 
  for(let i =0; i<length; i++){
    const randomIndex = Math.floor(Math.random()*pool.length); 
    password += pool[randomIndex]; 
  }
  return password; 
}

// Function call example
console.log(generatePassword(10, true)); // Example: "A3$d@f7XbP"
console.log(generatePassword(8, false)); // Example: "AbC123XY"

  