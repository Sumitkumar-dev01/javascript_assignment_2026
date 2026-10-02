// Write a function safeLength that returns the length of a string. If the input is null, return the message "Cannot get length of null".


function safeLength(str) {
  //Your code here
  try{
    if(str == null){
    throw new Error("cannot get length of null"); 
  }
  return str.length;

  }
  catch(error){
    return error.message;
  }
}

// Function call
console.log(safeLength("hello"));  // Expected output: 5
console.log(safeLength(null));     // Expected output: "Cannot get length of null"

  