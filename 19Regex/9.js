// Write a function findHexColors to extract all valid hex color codes from a string.


function findHexColors(text) {
 //Your code here
   const hexRegex = /#([a-fA-F0-9]{3}|[a-fA-F0-9]{6})\b/g;
  return text.match(hexRegex) || []; 
}

// Example usage:
console.log(findHexColors("The colors are #FF5733 and #f73.")); // ["#FF5733", "#f73"]

  