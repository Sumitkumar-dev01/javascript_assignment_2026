

/**
 * prototype => prototyep ek object hota hain jisse doosra object properties/methods 
 * ko inherit kar sakta hain. 
 * 
*/


const user = {
    name:  "sumit"
}
console.log(user.name.toString()); 
/**
 * from this example we have defined an user object 
 * but we didn't have defined tostring(); 
 * now we are using tostring()
 * so this is due to prototype 
 * now prototype says prototype is an object in which we can inherit 
 * the properties/method of differnet object. 
 * 
 * now we haaven't defined the toString() property inside 
 * user object but it works. 
 * 
 * javascript first search tostring() method in user's object if
 * it doesn't find that object then it will search 
 * in prototype.
 * 
 * 
 * prototype is a normal property in which mainly 
 * associated with constructor/functions 
 * 
 * [[prototype]] -> it's an internal link which connects one 
 * object to different objects. 
 * 
 *  */




// we use promise to execute asynchronous function


new Promise(function(resolve,reject){
    // asynchronous operation 
})


const newPromise  = new Promise((resolve,reject)=>{
    let randomNumber = Math.random(); 
    console.log(randomNumber); 
    if(randomNumber>0.5){
        resolve("the promise is resolved. the number is greater than 0.5")
    }
    else{
        reject("the promise is rejected. the number is lesser than 0.5")
    }
})

console.log(newPromise); 





let newPromise1 = new Promise((resolve,reject)=>{
    let randomNumber = Math.random(); 
    console.log(randomNumber); 

    if(randomNumber>0.5){
        resolve("the promise is resolve. the number is greater than 0.5"); 
    }
    else{
        reject("the promise is rejected. the number is lesser than 0.5")
    }
})

newPromise1.then((result)=>console.log(result))
           .catch((error)=> console.log(error))
           .finally(()=> console.log("the promise is settled")); 







const promise = [
    new Promise((resolve,reject)=>setTimeout(() => {   
    }, 1000)), 
    new Promise((resolve,reject)=>setTimeout(() => {
    }, 1000)),
    new Promise((resolve,reject)=>setTimeout(() => {
    }, 3000))
]
const anyPromise = promise.any(promise)
anyPromise.then(value => {
    console.log("the first fulfilled promise is:",value)
})





async function printHelloAfterThreeSecond(){
    let data = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("printing hello"); 
        },3000)
    })

    let result = await data;
    // wait untill the asynchronous operation is resolved 
    console.log(result); 
}

printHelloAfterThreeSecond(); 