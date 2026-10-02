// Write a calculator function that takes a number and returns an object with methods add, subtract, multiply, and getResult. Each method returns a promise to allow chaining.


function calculator(initialValue) {
  //Your code here
  let value = initialValue; 
  return{
    add(num){
      return new Promise((resolve)=>{
        value += num;
        resolve(this)
      })
    },
    subtract(num){
      return new Promise((resolve)=>{
        value -= num;
        resolve(this);
      })
    },
    multiply(num){
      return new Promise((resolve)=>{
        value *= num;
        resolve(this)
      })
    },
    getResult(){
      return new Promise((resolve)=>{
        resolve(value); 
      })
    }
  }
}

// Example Usage
calculator(5)
  .add(10)
  .subtract(3)
  .multiply(2)
  .getResult()
  .then(console.log);

  