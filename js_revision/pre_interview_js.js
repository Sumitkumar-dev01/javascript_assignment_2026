const array1 = [5,3,8,1]; 
const array2 = [7,2,6,4]; 


// slice => 5,3,8,1,7,2,6,4

function concat_and_sort(){
    const result = array1.slice().concat(array2.slice())

    // now i have to sort in descending order 
    return result.sort((a,b) => b-a)
}

console.log(concat_and_sort()); 




const numbers = [1,2,3,2,4,5,5,6]; 

const number_in_set = new Set(numbers); 
console.log(number_in_set); 

let count = 0; 

let total_sum = number_in_set.forEach(item => {
    count += item
});
console.log(total_sum) // for each always gives u undefined 
console.log(count); 
console.log(count);


// includes is a best way whether is it present or not. 

const unique_number = []; 
let unique_sum = 0; 

for(let i =0; i<numbers.length; i++){
    if(!unique_number.includes(numbers[i])){
        unique_number.push(numbers[i]); 
        unique_sum += numbers[i]
    }
}

console.log(unique_sum); 




// revise all the questions of array of namaste dsa. 


// [1,2,3,4,5] => k = 2 => [4,5,1,2,3]


const arr1 = [1,2,3,4]; 
console.log("the length of an arary is",arr1.length); 
arr1[4] = 12; 
console.log("the length of an array is",arr1.length); 


// purpose and usage of delete keyword in javascript arrays 



function findMax(arr){
    let max = arr[0]; 
    for(let i= 1; i<arr.length;i++){
        if(arr[i]>max){
            max = arr[i]; 
        }
    }
    return max;
}

let num = [1,2,3,4,5]; 
console.log(findMax(num))



const student = {
    name: "sumit",
    age:21,
    branch:"cse",
    id:5464653
}

for(const key in student){
    console.log(key); 
}


// arrow function 

const square = x => x*x; 
const sumoftwoNumbers = (x,y) => x+y;
const sum = (x,y) => {
    console.log(`adding ${x} and ${y}`); 
    return x+y
}



// in a single line statement in arrow function => no return keyword;
// in a multiline statement in arrow function => use return keyword; 



// call, apply, bind namaste javascript. 


// map in a javascript is a collection of key-value pair. 


// creating a map from the object. 

const user = {
    name: "sumit",
    age: 21, 
    email: "abc@gmail.com"
}
const user_final = new Map(Object.entries(user)); 
console.log(user_final)





// 

function findIndex(arr){
    // write your own logic here.
    return arr[0]
}

array_for_index = [5,4,2,3,]; 
console.log(findIndex(array_for_index))



// implementing custom for each function. 
// it will use hof 
function customForEach(arr,callback){
    for(let i = 0; i<arr.length; i++){
        callback(arr[i],i,arr)
    }
}

const numers1  = [1,2,3,4]; 
customForEach(numbers,(num)=> console.log(num)); 




function closure(){
    let name = "sumit"; 
    return function(){
        return name.concat("kumar")
    }
}
const fullName = closure(); 
console.log(fullName()); 



function parent(){
    let count = 0; 
    return function child(){
        count = count+1; 
        console.log(count); 
    }
}

const increment = parent(); 
increment();
increment(); 
increment();






const numb = [1,2,3]; 
const [one,two,three] = numb;
console.log(one); 
console.log(two); 
console.log(three)


 
let user1 = {}; 
[user1.name,user1.surname] = "sumit kumar".split("")
console.log(user1.name)
console.log(user1.surname); 



// swapping values of two variables. 

let firstName2 = "alpha"; 
let surname1 = "beta"; 

[firstName2,surname1] = [surname1,firstName2]; 

console.log(firstName2,surname1); 



// destructuring of an object 
// object hai toh object mein karo 
// array hai toh array mein karo. 
const user2 = {
    email:"abc@gmail.com",
    username:"sumit"
}

const {email,username} = user2; 
console.log(email); 
console.log(username); 


// extracting some specific properties using destructuring 

const user3 = {
    name:"john_the_don",
    age:33,
    city:"bangalore",
    occupation:"engineer",
    hobbies:["coding","travelling"]
}

// extracting 

const {name,age,occupation} = user3;
console.log(name); 
console.log(age); 
console.log(occupation); 


// aliasing object 

const data = {
    name:"johny",
    id:"adkjdfk",
    email:"baba@gmail.com"
}


const {name:username2} = data;
console.log(username2); 


// aliasing with an array. 

const user4 = ["johny","johny@gmail.com"]
const[username1,email2] = user4
console.log(username1); 
console.log(email2); 


// destructuring nested object 

// const user5 = {
//     name5:"sumit",
//     email5:"abc@gmail.com",
//     id:"dkfnl",
//     comments:{
//         date:dkaskj,
//         post:kdkj
//     }
// }

// const{name5,email5,date,post} = user5
// console.log(name5,email5,date,post)




// spread operators 

// it creates a copy 


let techstack = ["html","css","dksan"]; 
console.log(...techstack); 

