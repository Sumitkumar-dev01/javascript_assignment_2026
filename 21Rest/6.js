// Write a function groupByType that takes any number of arguments and groups them into an object by their type.


function groupByType(...args) {
 //Your code here
 return args.reduce((grouped,arg)=>{
    const type = typeof arg; 
    if(!grouped[type]) grouped[type] = []; 
    grouped[type].push(arg); 
    return grouped;
 },{})
}

// Example
console.log(groupByType(1, "hello", true, 42, "world"));
// Output: { number: [1, 42], string: ["hello", "world"], boolean: [true] }

  