// Write a program in javascript where Start with a specific countdown time (in seconds).Create a loop that will run for the number of seconds in the countdown.Inside the loop, wait for 1 second (1000 milliseconds).Calculate and display the remaining time.Stop the loop when the time is zero and display "Time up!


// Function to start the countdown
function countdown(seconds) {
  
  // Your code here 

  let remaining_time = seconds; 
  const timer = setInterval(() => {
    console.log(remaining_time); 
    remaining_time --; 
    if(remaining_time<0){
      clearInterval(timer); 
      console.log("time's up"); 
    }
    
  }, 1000);

}

// Start countdown from 10 seconds
countdown(10);


