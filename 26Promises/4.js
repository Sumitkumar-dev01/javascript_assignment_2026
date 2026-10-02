// Write a function trackOrder(orderId) that returns a promise to simulate tracking an online food order. Resolve with different statuses ("Preparing", "Out for delivery", "Delivered") at 1-second intervals.



function trackOrder(orderId) {
  //Your code here
  const statuses = ["preparing","out for delivery","Delivered"]
  return new Promise((resolve)=>{
    let i =0; 
    const interval = setInterval(()=>{
      console.log(statuses[i]); 
      i++; 
      if(i===statuses.length){
        clearInterval(interval); 
        resolve("order completed")
      }
    },1000)
  })
}

// Example Usage
trackOrder(123).then(console.log);

  