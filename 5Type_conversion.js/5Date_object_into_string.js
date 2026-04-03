/**
 * Question 5:Converting a Date Object to String
Write a program in javaScript where create a variable currentDate and declare the current date by using Date constructor.Write a program to convert the date in string formate
 */


function getCurrentDateString() {
 //code here
 let date = Date.now(); 
 let in_string = date.toString(); 
 return in_string; 
 
}

// Example usage:
console.log(getCurrentDateString());

