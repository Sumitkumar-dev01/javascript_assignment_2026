// Write a program to add elements to the beginning and end of an array using the spread operator. The spread operator should ensure the original array remains unchanged.


function addElements(arr, start, end) {
  
  // Write your code here
  // first we have to clone the array 
  let cloned_array = [...arr]; 
  // now insert element in the begining and end 
  // of an array. 
  let new_array = [start,...cloned_array,end]; 
  return new_array; 

}

console.log(addElements([2, 3, 4], 1, 5)); 
// Output: [1, 2, 3, 4, 5]

