// creating an new array. 

let techStack = [
    "html","css","js","react","node",
]
let newArrayCreated  = [...techStack]; 
console.log(newArrayCreated); 

// adding new values in array and object 
let arr = ["html","css","js","react","node"]; 
let newArr = [...arr,"git"];


let obj = {
    name:"pw skills",
    course:"full stack web development"
}

let newobj = {...obj,rating:3}
console.log(newobj);


// spread operator with objects. 

let obj1 = {
    name:"sumit",
    course:"Full stack web developmet"
}

let obj2 = {
    rating:5,
    reviews:2000
}

let newobjCreated = {...obj1,...obj2}; 
console.log(newobjCreated)





// rest operator -> similar to destructuing. 
// destructuring an array using rest operator. 


let arr3 = ["html","css","js","react","node","express","git"]; 
let [element1, element2, ...remainingElements] = arr3;
console.log(element1); 
console.log(element2); 
console.log(remainingElements); 


// destructuring object. 

let obj3 = {
    name:"pw skills",
    course:"full stack web development",
    rating:5
}; 

let {name, ...remainingElementsfromobj3} = obj3; 
console.log(obj3); 

console.log(remainingElementsfromobj3)



const arr1 = [1,2,3]; 
const arr2 = [4,5,6]; 

console.log(combinedArrays(arr1,arr2)); 

function combinedArrays(arr1,arr2){
    return [...arr1,...arr2]
}


function sumNumbers(...numbers){
    let sum = 0;
    for(let i=0; i<numbers.length; i++){
        sum = sum+[i]; 
    }
    return sum;
}

console.log(sumNumbers(1, 2, 3)); 

console.log(sumNumbers(4, 5, 6, 7)); 

// callback function 

console.log("start"); 
function function1(){
    console.log("executing function 01"); 
}

function function2(callback){
    callback(); 
    console.log("executing function 02"); 
}

function2(function1); 
console.log("end"); 

console.log("start"); 
setTimeout(() => {
    console.log("set timeout is being executed"); 
}, 2000);
console.log("end"); 



const promise = new Promise((resolve,reject)=>{
    let randomNumber = Math.random(); 
    console.log(randomNumber)
    if(randomNumber>0.5){
        resolve("the promise is resolved. the number is greater than 0.5")
    }
    else{
        reject("the promise is rejected. the number is lesser than 0.5")
    }
})

console.log(promise); 


// then and catch method of promises. 

let newPromise = new Promise((resolve,reject)=>{
    let randomNumber = Math.random(); 
    if(randomNumber>0.5){
        resolve("the promise is resolved,and the numbrer is greater than 0.5")
    }
    else{
        reject("the promise is rejectd and the number is lesser than 0.5")
    }
})
newPromise.then((result)=>console.log(result))
          .catch((error)=>console.log(error))
          .finally(()=> console.log("the promise is finally settled"))






/**
 * then()

The then method allows
you to specify a function that 
should be called when a Promise is fulfilled.


catch()

To handle the rejected or unsuccessful state, we have the .catch() method. 
It allows us to specify what should
happen when a promise is rejected so that
we can handle the error appropriately 
in our code


.finally()

The finally() method is used to specify a function that is executed when the promise is settled (i.e., either
resolved or rejected).

 */




function sumofPromise(promise1,promise2){
    return new Promise((resolve,reject)=>{
        // variable to store the resolved value of the promises. 
        let value1,value2

        // handler for promise1
        promise1.then(result =>{
            value1 = result;
            //check if both promise have resolved. 
            if(value1 !== undefined && value2 !== undefined){
                resolve (value1+value2)
            }
        }).catch(reject)

        // handler for promise2 

        promise2.then(result=>{
            value2 = result;
            // check if both promise have resolved
            if(value1 !== undefined && value2 !== undefined){
                resolve(value1+value2)
            }
        }).catch(reject)
    })
}

const promise1 = new Promise(resolve => resolve(5)); 
const promise2 = new Promise(resolve => resolve(10)); 

sumofPromise(promise1,promise2).then(result=>console.log("sum",result)).catch(error=>console.error("Error",error))



// async returns promise 


async function printHelloAfterThreeSecond(){
    let data = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("printing hello"); 
        },3000)
    })
    let result = await data; 
    console.log(result); 
};


// wait untill the asynchronous operation is resolved : 3 seconds
printHelloAfterThreeSecond(); 