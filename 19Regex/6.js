// Write a function findHashtags to extract all hashtags from a text.


function findHashtags(text) {
  // Your code here
  const hashtagsRegex = /#w+/g; 
  return text.match(hashtagsRegex) || []; 
}

// Example usage:
console.log(findHashtags("I love #coding and #webdev")); // ["#coding", "#webdev"]

  