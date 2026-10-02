// Description:Write javascript program listens for the browser's 
// online and offline events.



function handleOnline() {
 //message
 console.log("you are online!")
}

function handleOffline() {
 //message
 console.log("you are offline")
}

// Add event listeners for online and offline events
window.addEventListener('online', handleOnline);
window.addEventListener('offline', handleOffline);