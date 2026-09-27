// Write a curried function to concatenate two strings. The first function should accept the first string, and the second function should accept the second string. It should return the concatenated result of both strings.



 function concatStrings(str1) {
  return function(str2){
    return str1.concat(str2)
  }
  
  // Your Code here

}

console.log(concatStrings("Hello")("World")); // Output: "HelloWorld"

