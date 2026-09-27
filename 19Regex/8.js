// Write a function getDomain to extract the domain name from a URL.


function getDomain(url) {
 //Your code here
 const urlObj = new URL(url); 
 return urlObj.hostname; 
}

// Example usage:
console.log(getDomain("https://www.example.com/path")); // "www.example.com"

  