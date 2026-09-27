// Write a program using an arrow function to filter odd numbers from an array.


const filterOdds = (arr) => {
  let new_arr = []; 
  arr.filter((item)=>{
    if(item%2!=0){
      new_arr.push(item)
    }
  } )
  return new_arr

  // Your Code here
  
}
console.log(filterOdds([1, 2, 3, 4, 5])); // Output: [1, 3, 5]
