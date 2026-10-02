// Write a function fetchWithTimeout that fetches
//  data from an API and rejects the promise if 
// it takes more than 5 seconds.


function fetchWithTimeout(url) {
  //Your code here
  return new Promise((resolve,reject)=> {
    const timeout = setTimeout(() => {
      reject("request timed out")
    }, (5000));
    fetch(url)
    .then(response=>{
      clearTimeout(timeout); 
      if(response.ok){
        resolve("data fetched successfully")
      }
      else{
        reject("request validation failed with status:404")
      }
      
    })
    .catch(error=>{
      clearTimeout(timeout); 
      reject("request failed")
    })
  })
}

// Function call
fetchWithTimeout("https://jsonplaceholder.typicode.com/posts")
  .then(result => console.log(result))  // Expected output: "Data fetched successfully"
  .catch(error => console.log(error));  // Expected output: "Request timed out" if exceeds 5 seconds
  