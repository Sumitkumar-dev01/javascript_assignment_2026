// Write a function createPaymentManager that
//  securely manages payment initialization and 
// confirmation without exposing sensitive logic.



function createPaymentManager() {
  //Your code here.
  return {
    initPayment:(details)=>`payment of ${details.amount} ${details.currency}`,
    confirmPayment:(details)=>`payment confirmed ${details.amount} ${details.currency}`
  }
}

// Usage
const paymentManager = createPaymentManager();
console.log(paymentManager.initPayment({ amount: 100, currency: 'USD' }));
console.log(paymentManager.confirmPayment({ amount: 100, currency: 'USD' }));


  