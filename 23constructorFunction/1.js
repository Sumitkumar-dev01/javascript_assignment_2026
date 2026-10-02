// Write a ChatMessage constructor function to represent messages in a chat app. Each message should have text, sender, and timestamp. Add a method formatMessage() to return a formatted string.


function ChatMessage(text, sender, timestamp) {
  //Your code here
  this.text = text; 
  this.sender = sender; 
  this.timestamp = timestamp;
  this.formatMessage = function(){
     const formattedTime = this.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    return `${this.sender} [${formattedTime}]: ${this.text}`;
  }
}

// Example Usage:
const message = new ChatMessage("Hello!", "Deepak", new Date());
console.log(message.formatMessage()); // Output: Deepak [10:30 AM]: Hello!


  