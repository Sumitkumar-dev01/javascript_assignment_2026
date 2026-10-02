// Write a javascript program generates a random number every second and prints it to the console.


const randomNumberGenerator = setInterval(function() {
    //Your code here
    const randomNumber = Math.floor(Math.random()*100)+1;
    console.log("random number"+randomNumber)
}, 1000); // Generate a random number every 1 second
  