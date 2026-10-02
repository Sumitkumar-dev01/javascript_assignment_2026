// Write a function quizWithTimeout(question, answer, timeout) that takes a question, expected answer, and timeout. If the answer is provided within the timeout, resolve with "Correct!". Otherwise, reject with "Time s up!".


function quizWithTimeout(question, expectedAnswer, timeout) {
  //Your code here

  // first show the question to the user. 
  // then do inside everything promise. 

  console.log(question); 
  return new Promise((resolve,reject)=>{
    const timer = setTimeout(()=>{
      reject("time's up");
    },timeout)
    setTimeout(() => {
      const userAnswer = expectedAnswer; 
      if(userAnswer === expectedAnswer){
        clearTimeout(timer); 
        resolve("correct!")
      }
    }, 1000);
  })


}

// Example Usage
quizWithTimeout("What is 2+2?", "4", 3000)
  .then(console.log)
  .catch(console.log);

  