// Description: Start: Starts the timer. Stop: Stops the timer and shows the elapsed time. Get Elapsed Time: Shows how much time has passed since the timer started. 


class Timer {
  constructor() {
    this.startTime = 0; // Time when the timer started
    this.elapsedTime = 0; // Time elapsed since the timer started
    this.isRunning = false; // Timer state
  }

  // Start the timer
  start() {
   //code here
  }

  // Stop the timer and show elapsed time
  stop() {
    //code here
  }

  // Get the elapsed time
  getElapsedTime() {
   //code herre
  }
}

// Usage example
const timer = new Timer();

// Start the timer
timer.start();
// Expected Output: "Timer started."

// Wait for a few seconds, then check elapsed time
setTimeout(() => {
  timer.getElapsedTime();
  // Expected Output: "Elapsed time: 3 seconds." (depending on how long you wait)
}, 3000);

// Stop the timer after a few more seconds
setTimeout(() => {
  timer.stop();
  // Expected Output: "Timer stopped at 5 seconds."
}, 5000);
