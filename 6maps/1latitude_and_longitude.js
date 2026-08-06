/**
 * 
 * Question 1: Find Events Within a Latitude and Longitude Range
Suppose that you are developing an event management application. Given an array of event data with latitude and longitude coordinates, find all events that are within a specified range of latitude and longitude.


 */

function findEventsInRange(events, latRange, lngRange) {
     
  // Your code here
  return events.filter(event =>
    event.lat >= latRange[0] && event.lat <= latRange[1] &&
    event.lng >= lngRange[0] && event.lng <= lngRange[1]
  ); 
}

// Example usage:
const events = [
  { name: "Concert", city: "New York", lat: 40.730610, lng: -73.935242 },
  { name: "Festival", city: "Los Angeles", lat: 34.0522, lng: -118.2437 },
  { name: "Parade", city: "London", lat: 51.5074, lng: -0.1278 }
];
const latRange = [34.0, 40.0]; // Latitude range
const lngRange = [-120.0, -70.0]; // Longitude range

const filteredEvents = findEventsInRange(events, latRange, lngRange);
console.log(filteredEvents);
// Output: [{ name: "Festival", city: "Los Angeles", lat: 34.0522, lng: -118.2437 }]

