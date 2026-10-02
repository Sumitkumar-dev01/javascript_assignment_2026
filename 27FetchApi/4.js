// Write a function cancelRequest that uses the 
// Fetch API and AbortController to cancel a
//  request to this URL after 3 seconds if 
// it doesn't complete. API URL:https://jsonplaceholder.typicode.com/posts



async function cancelRequest() {
  //Your code here
  const controller = new AbortController(); 
  
  const signal = controller.signal; 

  setTimeout(() => {
    controller.abort(); 
  }, 3000);

  try{
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',{signal})
    const data = await response.json(); 
    return data;
  }catch(error){
    if(error.name === 'AbortError'){
      return 'Request canceled'; 
    }
    throw error;
  }
}

// Example usage:
cancelRequest().then(console.log).catch(console.error);

  