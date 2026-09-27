// Description:Write a program in javascript where take two variable startDate endDate and store the two date then find dateDiffrence after that find the daysDiffrence and return the difference.


function getDaysDifference(startDate, endDate) {
 //code here
 let timeDifference = endDate - startDate; 
 let daysDifference = timeDifference/(1000*3600*24)
 return daysDifference; 
}

// Example usage:
let startDate = new Date('2024-01-01');
let endDate = new Date('2024-12-31');

let daysDifference = getDaysDifference(startDate, endDate);
console.log('Days difference:', daysDifference);  // Logs the difference in days


