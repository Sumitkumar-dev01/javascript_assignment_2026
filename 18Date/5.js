// Description:Write a javascript program where 
// print the day of week according to date.
// For this firstly find the day then return
//  the day of week from that. 


function logDayOfWeek() {
   //code here
   let currentDate = new Date(); 
   let dayOfWeek = currentDate.getDay(); 
   console.log("day of the week:",dayOfWeek)
}

logDayOfWeek();  // Calling the function

