// Write a javascript program where display a notification on every 10 second. Write a function resetTimer which run on the mouse movement and any key press



let timeout;

function resetTimer() {
   //Your code here
   clearTimeout(timeout); 
   timeout = setTimeout(function(){
      alert("you have been inactive for 10 seconds")
   },10000)
}

// Reset timer on any mouse movement
window.addEventListener('mousemove', resetTimer);

// Reset timer on any key press
window.addEventListener('keydown', resetTimer);

  