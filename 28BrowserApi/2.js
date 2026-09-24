// Description:Write a program in javascript to retrieve the geographical location (latitude and longitude) of a user from their device using the Geolocation API in JavaScript. The system should fetch the user's location and display it on the console.We first check if the browser supports the Geolocation API by checking if geolocation exists in the navigator object.If not exist the system should notify the user that geolocation is unavailable. For example:navigator.geolocation.getCurrentPosition is used to request the user's current position


if (navigator.geolocation) { 
    navigator.geolocation.getCurrentPosition(function(position) {
    //code here
  });
} else {
  console.log("Geolocation is not supported by this browser.");
}
