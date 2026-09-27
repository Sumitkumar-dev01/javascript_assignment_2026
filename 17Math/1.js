// Write a function to calculate the factorial of a given number. The factorial of n is the product of all positive integers less than or equal to n.


 function factorial(n) {
  if(n==0){
    return 1;
  }else{
    return n*factorial(n-1); 
  }
  
  // Your code here

}

console.log(factorial(5)); // Output: 120

