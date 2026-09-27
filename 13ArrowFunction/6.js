// Write a program using an arrow function to enumerate (loop through) a Map and print each key-value pair.


const enumerateMap = (map) => {
  
  // Your Code here
  map.forEach((value, key) => console.log("Key: " + key + ", Value: " + value));

};

const myMap = new Map([["a", 1], ["b", 2], ["c", 3]]);
enumerateMap(myMap);



