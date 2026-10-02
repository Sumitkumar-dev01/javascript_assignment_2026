//  Question 1: Fetch Data from API
// Write a function fetchData that fetches data 
// from the following URL and returns the JSON 
// response.




async function fetchData() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  try{
    const response = await fetch(url); 
    const data = await response.json(); 
    return data;

  }catch(error){
    console.log("error while fetching data",error);
  }
//Your code here
}

// Example usage
fetchData().then(data => console.log(data));

  