// Description:Build a basic user authentication system that allows for: User Registration: Register a new user with a username and password. User Login: Log in by verifying the username and password. 


// Simple User Authentication System

class AuthenticationSystem {
  constructor() {
    this.user = null;  // Initially, no user is registered
  }

  // Register a new user
  registerUser(username, password) {
   //code here
  }

  // Login with username and password
  login(username, password) {
   //code here
}

// Usage example

const authSystem = new AuthenticationSystem();

// Register a user
console.log(authSystem.registerUser("john_doe", "password123"));
// Expected Output: "User registered successfully!"

// Try to register again (should give an error)
console.log(authSystem.registerUser("john_doe", "newpassword"));
// Expected Output: "A user is already registered."

// Login with correct credentials
console.log(authSystem.login("john_doe", "password123"));
// Expected Output: "Login successful!"

// Login with incorrect credentials
console.log(authSystem.login("john_doe", "wrongpassword"));
// Expected Output: "Invalid username or password!"