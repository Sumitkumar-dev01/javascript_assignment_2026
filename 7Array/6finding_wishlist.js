/**
 *  Question 6: Finding Common Wishlist Items
Write a function getCommonItems that
 takes two arrays of wishlist items and 
 returns the common items.
 */



function getCommonItems(wishlist1, wishlist2) {
  //Your code here
  return wishlist1.filter(item => wishlist2.includes(item));
}

// Example Usage:
const wishlist1 = ["Shirt", "Shoes", "Hat"];
const wishlist2 = ["Shoes", "Hat", "Watch"];

const commonItems = getCommonItems(wishlist1, wishlist2);

console.log(commonItems);
// Output: ["Shoes", "Hat"]


  