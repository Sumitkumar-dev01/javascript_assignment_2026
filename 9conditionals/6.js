// Description:Write a JavaScript program that 
// provides clothing advice based on the temperature. 
// The program takes a temperature input (in Celsius) and 
// suggests appropriate clothing like jackets, t-shirts, sweaters, or coats. 
// Create function getClothingAdvice and define logic in it.

// Hint. The function uses if-else if statements to determine what type of clothing to recommend.

// If the temperature is less than or equal to 0°C, it suggests heavy winter clothing (coat, gloves, scarf).

// If the temperature is between 0°C and 10°C, it suggests wearing a warm jacket or sweater.

// If the temperature is between 10°C and 20°C, it recommends a light jacket or sweater.

// If the temperature is between 20°C and 30°C, it suggests comfortable clothing like a t-shirt and shorts.

// If the temperature is above 30°C, it advises wearing light clothes like a tank top or shorts.





// Function to give clothing advice based on the temperature
function getClothingAdvice(temperature) {
   //code here
   if(temperature<0 || temperature == 0){
      console.log("ddf jalsk; ")

   }
   
   else if(temperature>10 && temperature<20){
      console.log("lkjf kljd ")

   }
   else if(temperature>20 && temperature<30){
      console.log("kfjd ak")

   }
   else{
      console.log("wearing light clothes like a tank top or shorts.")
   }
}

// Example usage
let currentTemperature = 18; // Set the current temperature in Celsius
getClothingAdvice(currentTemperature);