// Write a function createSessionManager that manages user sessions on a website. The session manager should allow a user to log in, log out, and retrieve the current session data.


function createSessionManager() {
  //Your code here
}

// Usage
const sessionManager = createSessionManager();
sessionManager.login({ username: 'Mithun sir', role: 'admin' });
console.log(sessionManager.getSession()); // { username: 'Mithun sir', role: 'admin' }
sessionManager.logout();
console.log(sessionManager.getSession()); // null

  