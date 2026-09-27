// Write a program to merge two arrays into one 
// using the spread operator. The spread operator
//  should be used to combine both arrays without
//  modifying the original arrays.


function mergeArrays(arr1, arr2) {
  
  // Your Code here
  let x = [...arr1.concat(arr2)]; 
  return x;

}
console.log(mergeArrays([1, 2, 3], [4, 5, 6])); 
// Output: [1, 2, 3, 4, 5, 6]
