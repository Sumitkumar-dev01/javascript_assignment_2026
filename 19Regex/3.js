// Write a function getQueryParameter that extracts the value of a specific query parameter from a URL.



function getQueryParameter(url, parameter) {
  //Your code here
  const urlObj = new URL(url); 
  return urlObj.searchParams.get(parameter)
}

// Example usage:
console.log(getQueryParameter("https://example.com?id=123&name=chandra", "id")); // "123"

  