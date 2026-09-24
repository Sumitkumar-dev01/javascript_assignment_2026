// Build a function detectFraud that detects suspicious transactions by identifying if a user has made multiple transactions above a certain amount within a short timeframe.


function detectFraud(transactions, thresholdAmount) {
 //Your code here
}

// Function call example
const transactions = [
  { amount: 500, timestamp: Date.now() - 1000 },
  { amount: 600, timestamp: Date.now() - 2000 },
];
console.log(detectFraud(transactions, 400)); // true
 
  