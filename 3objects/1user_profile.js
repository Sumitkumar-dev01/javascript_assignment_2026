/**
 * Question 1:User Profile management
Description:Write a program in javascript where define an object userProfile with properties like name, email, age,isAdmin with boolean value and address. The address property itself is an object with street, city, and postalCode,.The object also contains methods like displayProfile to print the user’s profile, and updateEmail to change the users email.
 */


function createUserProfile(name, email, age, street, city, postalCode, isAdmin) {
   //code here
   const userProfile = {
    name: name,
    email: email,
    age: age,
    isAdmin: isAdmin,
    address:{
        street: street,
        city: city,
        postalCode: postalCode
    },

    // method to display user's profile 
    displayProfile : function(){
        console.log("Name", this.name); 
        console.log("email", this.email)
        console.log("age",this.age),
        console.log("address",this.address.street,this.address.city,this.address.postalCode)
    },


    // methods to update email 
    updateEmail: function(newEmail){
        this.email = newEmail
    }

    }
    return userProfile;
  }



// Create a user profile
const user = createUserProfile("Alice", "alice@example.com", 28, "123 Elm Street", "Wonderland", "12345", false);

// Display the user's profile
// user.displayProfile();
user.displayProfile(); 

// Update the user's email
user.updateEmail("newalice@example.com");

// Display the updated profile
user.displayProfile();
