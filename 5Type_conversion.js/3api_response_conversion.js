/**
 * Question 3:API Response Conversion
Write a program in javaScript where declare a object apiResponse which return a variable productId of integer type, productName string type, price string type, available boolean type.Write a program to convert the price from string to number.Formate price as a currency.
 */


function formatPriceFromApiResponse(apiResponse) {
//code here
let price_in_float = apiResponse.price; 
//using string interpolation 
let price = `$${parseFloat(price_in_float)}`;
return price;


}

// Example usage:
const apiResponse = {
  productId: 12345,
  productName: "Laptop",
  price: "999.99", // Price returned as a string
  available: true
};

console.log(formatPriceFromApiResponse(apiResponse));  // "$999.99"




