// Create a Poll constructor function for a voting system. Each poll has a question, an array of options, and an object votes to track votes for each option. Add methods vote(option) to increment votes and getResults() to return the voting results.


function Poll(question, options) {
  //Your code here
}

// Example Usage:
const poll = new Poll("What's your favorite language?", ["JavaScript", "Python", "Java"]);
poll.vote("JavaScript");
poll.vote("JavaScript");
poll.vote("Python");
console.log(poll.getResults()); // Output: { JavaScript: 2, Python: 1, Java: 0 }


  