// // Write a function validateURL that checks if a given string is a valid URL. If not, return the message "Invalid URL format".


// function validateURL(url) {
//   //Your code here
//   try{
//     const regex = /^(https?|ftp)://[s/$.[s]*$/i
//     if(!regex.toLocaleString(url)){
//       throw new Error("invalid url format"); 
//     }
//     return true;

//   }catch(error){
//     return error.message; 
//   }
// }

// // Function call
// console.log(validateURL("https://example.com")); // Expected output: true
// console.log(validateURL("htp://example.com"));  // Expected output: "Invalid URL format"

  