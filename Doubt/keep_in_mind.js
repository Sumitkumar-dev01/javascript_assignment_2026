// concatenation of two or more array 

let array1 = [1,2,3]; 
let array2 = [4,5,6]; 


let array3 = [7,8,9]; 

let new_array = array1.concat(array2,array3); 
console.log(new_array); 



let numbers = [1,2,3,4,5]; 
let part = numbers.slice(2); 
console.log(part); 


// delete in an array 

const array = [1,2,3,4]; 
console.log(array.length); 
delete array[2]; 
console.log(array); 


// iteration of an object 

const student = {
    name: "sumit",
    age: 22, 
    branch : "cse-iot", 
    email: "abc@gmail.com"
}

for(key in student){
    console.log(student[key]); 
    console.log(student[key])
}

console.log(Object.entries(student)); 


const data = {}; 

Object.defineProperties(data,{
    userName:{
        value:"sumit",
        enumerable: true
    }, 
    email:{
        value: "abc@gmail.com",
        enumerable: true
    }, 
    phone: {
        value: "dafn dks a", 
        enumerable: false, 
    }
})

for(const key in data){
    console.log(`${key}: ${data[key]}`); 
}


const hello  = (req,res)=>{
    console.log(`${req}`); 
    console.log(`${res}`)
}
hello(5,8)