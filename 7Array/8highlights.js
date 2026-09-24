/**
 *  Question 8: Highlighting Most Searched Products
Write a function mostSearched that takes an array of search terms and returns the most frequently searched product.
 */



function mostSearched(searches) {
//Your code here
const productsCounts = {}; 
// looping through search elements and count occurences 
searches.forEach(product => {
    productsCounts.product = (productsCounts[product] || 0)+1;   
});

// find the product with the highest count 
let mostSearchedProduct = ''; 
let maxCount = 0;
for(const product in prouductsCounts){
    if(productsCounts[proudct]>maxCount){
        mostSearchedProduct = product;
        maxCount = productsCounts[product]
    }
}
return mostSearchedProduct;

}

// Example Usage:
const searches = ["Phone", "Laptop", "Phone", "Phone", "Tablet", "Laptop"];

const result = mostSearched(searches);

console.log(result); // Output: "Phone"


  