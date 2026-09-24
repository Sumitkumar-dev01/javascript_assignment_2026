// Write a function fetchWithTimeout that fetches data from an API and rejects the promise if it takes more than 5 seconds.


function fetchWithTimeout(url) {
  //Your code here
}

// Function call
fetchWithTimeout("https://jsonplaceholder.typicode.com/posts")
  .then(result => console.log(result))  // Expected output: "Data fetched successfully"
  .catch(error => console.log(error));  // Expected output: "Request timed out" if exceeds 5 seconds
  