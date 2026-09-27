// Description:Write a javascript program where convert a Date object to a Unix timestamp (milliseconds since January 1, 1970).


function getCurrentTimestamp() {
  //code here
  let currentDate = new Date(); 
  let timestamp = currentDate.getTime(); 
  return timestamp;
}

// Example usage:
let timestamp = getCurrentTimestamp();
console.log('Timestamp:', timestamp);  // Logs the timestamp


