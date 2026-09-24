// Write a program in javascript where create array numbers where store the some numbers.Then the for loop iterates through each element in the numbers array. In each iteration, the current number (numbers[i]) is added to the sum variable.



// Array of numbers to sum
const numbers = [5, 10, 15, 20, 25];

// Function to calculate the sum of the numbers
function calculateSum() {
    // Your code here
    let sum = 0; 
    for(let i =0; i<numbers.length; i++){
        sum = sum+numbers[i]; 
    }
    console.log(sum); 
}

// Calling the function to calculate the sum
calculateSum();
