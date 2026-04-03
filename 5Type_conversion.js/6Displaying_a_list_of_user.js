/**
 * Question 6:Displaying a List of Users
 * Create an array of user objects, each containing name (string) age (number)email (string) Iterate through the array and display the user information in a formatted manner.
 */


const users = [
 { name: "John Doe", age: 30,email: "john.doe@example.com" },
{ name: "Jane Smith", age: 25,email: "jane.smith@example.com" },
 { name: "Alice Johnson", age: 35,email: "alice.johnson@example.com" },
{ name: "Bob Brown", age: 40, email: "bob.brown@example.com" }
];

// Function to display users
function displayUsers(users) {
  //code here
  console.log("list of users:"), 
  users.forEach((user,index)=> {
    console.log(index+1);
    console.log(user.name); 
    console.log(user.email); 
    console.log(user.age)
    console.log("__________________________")
  });
 
 
  };
// Call the function to display users
displayUsers(users);


