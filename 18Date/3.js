// Description:Write a javascript program where print the year date and month using the different function of date object.


function logCurrentDateInfo() {
   //code here
   let currentDate = new Date(); 
   // current year 
   console.log("year",currentDate.getFullYear()); 
   // logging current month (+1 bcz it is indexed from zero)
   console.log("Month",currentDate.getMonth())
   // logging current Date 
   console.log("Date",currentDate.getDate()); 
   

}

logCurrentDateInfo();  // Calling the function

