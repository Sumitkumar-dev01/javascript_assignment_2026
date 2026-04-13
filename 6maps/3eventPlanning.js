/**
 * You are building an event management application. Create a map that shows all the events happening in a city on a particular date, displaying them with markers and event details.
 */





function filterEventsByDate(events, eventDate) {
  
  //Your code here
  return events.filter(event => event.date === eventDate); 
}

// Example usage:
const events = [
  { name: "Concert", date: "2024-12-31", lat: 40.730610, lng: -73.935242 },
  { name: "Festival", date: "2024-12-31", lat: 34.0522, lng: -118.2437 },
  { name: "Parade", date: "2024-12-31", lat: 51.5074, lng: -0.1278 }
];

const eventDate = "2024-12-31";
const eventsOnDate = filterEventsByDate(events, eventDate);

// Display the filtered events with their details
eventsOnDate.forEach(event => {
  console.log(event.name + " is happening at [" + event.lat + ", " + event.lng + "]");
});
