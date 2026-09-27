// Write a function to check if a given number is a prime number. A prime number is a number greater than 1 that has no divisors other than 1 and itself.


function isPrime(n) {

  // Your code here
  if(n<=1){
    return false;
  }
  for(let i = 2; i<= Math.sqrt(n); i++){
    if(n%i === 0){
      return false;
    }
    return true;
  }
}

console.log(isPrime(11)); // Output: true

