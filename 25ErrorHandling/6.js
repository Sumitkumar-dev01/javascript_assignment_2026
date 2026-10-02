// Write a function safeLoop that executes a loop with a maximum iteration limit. If the limit is exceeded, throw an error with the message "Infinite loop detected".



function safeLoop(iterations) {
  //Your code here
  try{
    if(iterations>1000){
      throw new Error("infinite loop detected "); 
    }
    for(let i =0; i<iterations; i++){
      console.log(i)
    }
    return "loop completed successfully"; 

  }
  catch(error){
    return error.message;
  }
}

// Function call
console.log(safeLoop(500));  // Expected output: "Loop completed successfully"
console.log(safeLoop(1500)); // Expected output: "Infinite loop detected"
  