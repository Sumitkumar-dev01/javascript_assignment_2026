// Description:Write a program in javascript to store
//  a username in the sessionStorage and on
//  page reload retrieve it from the storage


function saveUsernameToSessionStorage(username) {
  //code here
  sessionStorage.setItem('username',username)
}

function getUsernameFromSessionStorage() {
 //code here
 return sessionStorage.getItem('username');
}

// Save data to sessionStorage
saveUsernameToSessionStorage('Alice');


// Retrieve and display data
console.log(getUsernameFromSessionStorage()); 
// Output: Alice

