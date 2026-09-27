// Description:Write a javascript program where 
// print the current date and formate the date 
// in the readable formate. 


function logFormattedDate() {
   //code here
   let currentDate = new Date(); 
   let formattedDate = currentDate.toDateString(); 
   console.log(formattedDate); 
}

logFormattedDate();  // Calling the function
