// Write a function obfuscateEmail that obfuscates an email address for privacy by replacing parts of it with *.


function obfuscateEmail(email) {
 //Your code here

 const[local,domain] = email.split("@"); 
 const newEmail = local[0]+"******"+domain;
 return newEmail; 
}

// Function call example
console.log(obfuscateEmail("Prabir@gmail.com")); 

  