// Write a function findPhoneNumbers that extracts all valid phone numbers from a string. Valid formats include: (123) 456-7890 123-456-7890 123 456 7890


function findPhoneNumbers(text) {
  //Your code 
   const phoneRegex = /(?d{3})?[- ]?d{3}[- ]?d{4}/g;
   return text.match(phoneRegex) || []

}

// Example usage:
console.log(findPhoneNumbers("Call me at (123) 456-7890 or 123-456-7890"));
// ["(123) 456-7890", "123-456-7890"]

  