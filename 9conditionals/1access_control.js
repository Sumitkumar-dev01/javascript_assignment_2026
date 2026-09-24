
// Description:Write a program in javascript.Where create a variable username,
//  password and role.Write a function checkAcess 
// .In this function define the correctUsername, 
// correctPassword, correctRole then compare it with the
//  function parameter.Now, function will decide the wheather the user will
//  get the access or not.




// Function to check access based on credentials
function checkAccess(username, password, role) {
  if(username == "admin" && password == "password123" && role == "admin"){
    console.log("admin acess")
  }
  else if(username == "admin" && password == "password123" && role == "user"){
     console.log("user access")
  }
  else if(username == "admin" && password == "wrongpassword" && role == "user"){
    console.log("invalid password")
  }
  else{
    console.log("guest access"); 
  }

}
// Example usage:
checkAccess("admin", "password123", "admin");  // Admin access
checkAccess("admin", "password123", "user");   // User access
checkAccess("admin", "wrongpassword", "admin"); // Invalid password
checkAccess("admin", "password123", "guest");  // Invalid role