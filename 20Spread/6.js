// Write a program to split an object 
// into two smaller objects using the 
// spread operator. Specify which keys
//  should belong to the first object 
// and assign the remaining keys to 
// the second object


function splitObject(obj, keys) {
  
  // Your code here
  const obj1 = keys.reduce(function(acc,key){
    return {...acc,[key]:obj[key]}
  },{})

  const obj2 = {...obj}; 
  keys.forEach(key => {
    delete obj2[key]
  });
  return [obj1,obj2]

}

const original = { name: "Alice", age: 25, city: "New York", country: "USA" };
console.log(splitObject(original, ["name", "age"]));
// Output: [{ name: "Alice", age: 25 }, { city: "New York", country: "USA" }]


