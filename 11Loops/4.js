// Write a program in javascript where create
//  function generateRandomNumbers(count, min, max)
// : count: The number of random numbers you want
//  to generate. , min: The minimum possible value
//  for the random number. , max: The maximum 
// possible value for the random number. , 
// The for loop runs count times, 
// which means it will generate that many
//  random numbers.Once the loop is finished, 
// the function returns the array of random numbers.



// Function to generate random numbers
function generateRandomNumbers(count, min, max) {
    
  // Your code here
  const randomNumbers = []; 
  for(let i =0; i<count;i++){
    const randomNumber = Math.floor(Math.random()*(max-min+1)+min)
    randomNumbers.push(randomNumber)
  }
  return randomNumbers
}

// Example usage: Generate 5 random numbers between 1 and 10
const randomList = generateRandomNumbers(5, 1, 10);
console.log(randomList);

