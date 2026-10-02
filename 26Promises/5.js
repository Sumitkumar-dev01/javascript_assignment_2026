// Write a function bookFlight(ticketDetails) that simulates a flight booking process. Return a promise that resolves after 3 seconds with the message "Booking confirmed for [Passenger Name]".



function bookFlight(ticketDetails) {
  //Your code here
  return new Promise((resolve)=>{
    setTimeout(() => {
      resolve(`Booking confirmed for ${ticketDetails.passenger}`)
    }, 3000);
  })
}

// Example Usage
bookFlight({ passenger: "Pinkee", flight: "AI-202" }).then(console.log);
  