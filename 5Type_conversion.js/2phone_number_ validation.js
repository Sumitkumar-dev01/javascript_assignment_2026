/**
 *  Question 2:Phone Number Validation
Write a program in javaScript where take a phone number as a input in variable phoneInput. Write a logic to validate weather the phone number is valid or not.
 */


function validatePhoneNumber(phoneInput) {
 //code here
 // convert to string and remove non-numeric characters 

 let cleanedPhoneNumber = String(phoneInput).replace(/D/g,'').trim();
 

 // ensure phone number has exactly 10 digit 
 if(cleanedPhoneNumber.length == 10){
    console.log("this is a valid phone number", cleanedPhoneNumber); 
 }
 else{
    console.log("this is an invalid phone number"); 
 }
}

// Example usage:
// let phoneInput = " 555-123-4567 ";
let phoneInput = " 5551234567 ";
validatePhoneNumber(phoneInput);