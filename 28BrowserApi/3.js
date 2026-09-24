// Description:Write a program in javascript to to request permission from the user to show browser notifications, and if permission is granted, display a notification to inform the user about a new message or event. If permission is already granted, the notification should be shown immediately. If permission is denied, no notification should be shown. 

if (Notification.permission !== "granted") {
  //code here
} else {
  new Notification("You've got a new message!");
}

