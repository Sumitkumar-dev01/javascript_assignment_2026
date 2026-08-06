/**
 * Question 3:Keyword check
Write a program in javascript where create a variable query by assigning some word to the variable and there is another string productDescription and search the query in the productDescription.
 */

// searching the word from a sentence 



// function isProductMatch(query, description) {
// //code here
// let is_match = console.log(productDescription.includes(query));
// return is_match; 

// // but in this logic there is an error what if your query is in lower case; 
// // so for doing this first we have to convert it_into upper and lower case 
// }

// let query = "red shoes";
// let productDescription = "These are red shoes with comfortable padding.";


// isProductMatch(query, productDescription);



function isProductMatch(query, description) {
//code here
if(productDescription.toLowerCase().includes(query.toLowerCase())){
    console.log("product matches the search query"); 
}

}

let query = "red shoes";
let productDescription = "These are red shoes with comfortable padding.";

isProductMatch(query, productDescription);





function isProductMatch1(query,description){
if(productDescription.toLocaleLowerCase().includes(query1.toLocaleLowerCase())){
  console.log("query matches the product description")
}
}

let query1 = "red shoes";
let productDescription1 = "These are red shoes with comfortable padding.";

isProductMatch1(query1, productDescription1);
