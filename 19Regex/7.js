// Write a function findHTMLTags to extract all HTML tags from a string.


function findHTMLTags(htmlString) {
 //Your code here
 const tagRegex = /</?[^>]+>/g;
 return htmlString.match(tagRegex) || []; 
}

// Example usage:
console.log(findHTMLTags("<div><h1>Hello</h1></div>")); // ["<div>", "<h1>", "</h1>", "</div>"]

  