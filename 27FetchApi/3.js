//  Question 2: Fetch with Query Parameters
// Write a function fetchPostsByUser that fetches
//  posts by a specific user ID from 
// the following URL: API URL:https://jsonplaceholder.typicode.com/posts?userId=USER_ID

// Example:



async function fetchPostsByUser(userId) {
  const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`; // Add query parameter
//Your code here
const response = await fetch(url); 
const data = await response.json(); 
return data;
}

// Example usage
fetchPostsByUser(1).then(posts => console.log(posts));


  