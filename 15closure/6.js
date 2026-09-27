// Write a function createNotificationManager that allows adding and retrieving personalized notifications for a user 


function createNotificationManager() {
 //Your code here
 const notification = []; 
 return{
    add:(message)=>notification.push(message),
    getNotifications:() => notification
 }
}

// Usage
const notificationManager = createNotificationManager();
notificationManager.add('Your order has been shipped.');
console.log(notificationManager.getNotifications()); // ['Your order has been shipped.']

  