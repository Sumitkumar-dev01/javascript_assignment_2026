/**
 *  Question 1:User Profile management
Description:Write a program in javascript where define an object userProfile with properties like name, email, age,isAdmin with boolean value and address. The address property itself is an object with street, city, and postalCode,.The object also contains methods like displayProfile to print the user’s profile, and updateEmail to change the users email.


 */



function createUserProfile(name, email, age, street, city, postalCode, isAdmin) {
   //code here
}

// Create a user profile
const user = createUserProfile("Alice", "alice@example.com", 28, "123 Elm Street", "Wonderland", "12345", false);

// Display the user's profile
user.displayProfile();

// Update the user's email
user.updateEmail("newalice@example.com");

// Display the updated profile
user.displayProfile();







  