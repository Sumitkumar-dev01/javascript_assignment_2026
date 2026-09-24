// Description:Write a program in javascript.Where take a 
// age and membership form prompt by 
// the user and check that how many discount
//  user will got according to their age and membership.

// For example:

// Users under 18 get a 10% discount.

// Users 60 and above get a 20% discount.

// Users with an "VIP" membership get a 30% discount.

// Users without a special condition (age or membership) get a 5% discount.





function determineDiscount() {
   let age = 20; 
   
   if(age<18){
      console.log("u will get 10% discount")
   }
   else if(age==60 && age>60){
      console.log("you will get 20% discount")
   }
   else {
      console.log("you will get 5% discount")
   }
}

// Call the function to check the discount
determineDiscount();








  
