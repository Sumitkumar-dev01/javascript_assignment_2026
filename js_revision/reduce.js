let arr = [1,2,3,4,5,]; 

// applying reduce method 

let result = arr.reduce((acc,curr)=> acc+curr,0); 

console.log(result); 


// example 2

let arr1 = [4,4,2]; 
let result1 = arr1.reduce((acc,curr)=>acc+curr); 
console.log(result1)