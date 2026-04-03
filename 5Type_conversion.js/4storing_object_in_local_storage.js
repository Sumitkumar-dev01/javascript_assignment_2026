/**
 * Question 4:Storing Objects in Local Storage
Write a program in javaScript where declare a object with variable name, age and write a program to convert it into JSON string and store it in localstorage.
 */



function storeUserData(user) {
//code here
// convert object into json string
let obj = JSON.stringify(user); 
// store into local storage 
localStorage.setItem("user",obj); 
console.log("user data stored in local storage"); 


}

// Example usage:
let user = { name: "Alice", age: 30 };
storeUserData(user);


