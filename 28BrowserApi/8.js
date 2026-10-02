// Description:Write a program listens for the window 
// resize event and alerts
//  the user when the window is resized.

function onWindowResize() {
 //print alert 
 alert("window has been resized!"); 
}

// Add event listener for the window resize event
window.addEventListener('resize', onWindowResize);
