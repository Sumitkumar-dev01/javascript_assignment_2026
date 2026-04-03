
/**
 * Question 1:Age Validation
Write a program in javascript.where User input age as a string in variable ageInput. Write a program to check whether the input age is valid or not.
 */


function validateAge(ageInput) {
    // converting input to an integer 
    let age = parseInt(ageInput,10); 
    // check if the age is valid or not 
    if(isNaN(age) || age<18){
        console.log("age is not valid "); 
    }
    else{
        console.log("age is valid"); 
    }
   
    return age; 

}

// Example usage
let ageInput = "25";  // User input as a string
validateAge(ageInput);