// Write a function that returns the square root
//  of a given number. If the number is negative,
//  return an error message.


function squareRoot(n) {
    if(n<0){
        return "invalid input"
    }else{
        return Math.sqrt(n)
    }
 
    // Your Code here
}

console.log(squareRoot(25)); // Output: 5
