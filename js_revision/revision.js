function calculateFunction(operation,initialvalue,numbers){
    let total = initialvalue; 
    for(const number of numbers){
        total = operation(total,number)
    }
    return total;
}

function sum(n1,n2){
    return n1+n2; 
}

function multiply(n1,n2){
    return n1*n2; 
}

console.log(calculateFunction(sum,0,[1,3,4]));
calculateFunction(multiply,1,[1,3,4])


// function that takes another function as an argument is known as higher order function. 



function createMultiplier(factor){
    return function(number){
        return number*factor;
    }
}

const double = createMultiplier(2); 
console.log(double(5)); 






const number = [1,2,3,4,5]; 

function doubleNumber(number){
    return number*2; 
}

const DoubleNumber = number.map(doubleNumber); 
console.log(number); 
console.log(DoubleNumber); 





function student(branch,reg_no){
    branch = function double(reg_no){
        console.log(reg_no*2)
    }
    return branch;
}
console.log(student("cse",221144515)); 






function findIndex(arr,callback){
    for(let i=0; i<arr.length;i++){
        if(callback(arr[i])){
            return i;
        }
    }
    return -1; 
}

const numbers = [1,3,5,7,9]; 
const index = findIndex(numbers, (num)=>num>5); 
console.log(index); 



function customForEach(arr,callback){
    for(let i=1; i<arr.length; i++){
        callback(arr[i],i,arr)
    }
}
const numbers2 = [1,2,3,4]; 
customForEach(numbers2,(num)=>console.log(num));





function hiFunction(name,callback){
    console.log(`hi` + `i am ${this.name}`+ `and i am from actual function`); 
    callback(); 

    // when you are using function make sure that you have to use return keyword 
    // otherwise you will get undefined as output. 
    return "function completed"; 
}

function exampleCallback(){
    console.log("i am from callback function"); 
}

console.log(hiFunction('sumit',exampleCallback))



let itemsCart = ["apple","boy","cat","dog"]
console.log("using for each loop:-")
itemsCart.forEach((item)=>console.log(item));
console.log("using map method:-") 
itemsCart.map((item)=>console.log(item)); 

itemsCart.forEach((item,index,arr)=>
    console.log(`the item ${item} was added to cart in position ${index+1} the items in the cart is ${arr}`)
)


let cartItems = ["100","200","300","499"]; 
cartItems.map((item)=>console.log(item))


let username = ["rahul","sumit","anurag","raju","rancho"]; 
username.filter(((item)=>item.length>5));
console.log(username);





let arr = [1,2,3,4,5]; 
let result = arr.reduce((acc,curr)=>acc+curr,0)
console.log(result); 



const students = [
    {
        name:"sumit",
        score:98
    },
    {
        name:"rahul",
        score:81
    }, 
    {
        name:"raju",
        score:89
    },
    {
        name:"dev",
        score:65
    }
]


x = students.reduce(function(acc,student){
    if(student.score>acc.score){
        return student;
    }
    else{
        return acc;
    }
})

console.log(x); 




function startDownload(){
    console.log('download started please wait........')
}

function initiateDownload(){
    setTimeout(() => {
        console.log("initiating download the download will starting in 3 seconds")
        startDownload();
    }, 3000);
     
}
initiateDownload(); 


function name(){
    let name = "sumit"; 
    return function (){
        return  name.concat("kumar"); 
    }
}

const fullName = name(); 
console.log(fullName()); 


function parent(){
    let count = 0; 
    return function child(){
        count = count+1; 
        console.log(count)
    }
}

const increment = parent(); 
increment(); 
increment(); 


function secretPassword (){
    const password = "sumit";
    return {
        guessPassword:function(guess){
            return guess === password
        }
    }
}

const passwordGame = secretPassword(); 
console.log(passwordGame.guessPassword("kan fsdkln")); // false 
console.log(passwordGame.guessPassword("sumit")); // true


function createPerson(name,age){
    // private variables. 
    let privateName = name;
    let privateAge = age;

    // private methods 
    function isAdult(){
        return privateAge>=18
    }

    // public method (expose to the outside world); 

    return{
        getName:function(){
            return privateName; 
        },
        getAge:function(){
            return privateAge;
        },
        isAdult:function(){
            return isAdult(); 
        }

    }
}


const person = createPerson('john',25); 
console.log(person.getName); 






// destructuring an array. 

const numb = [1,2,3]; 
const [one,two,three,four] = numb;
console.log(one); 
console.log(two); 
console.log(three); 


let [firstName,lastName] = "sumit kumar".split(" "); 
console.log(firstName); 
console.log(lastName); 


let [firstName1, ,title] = ["sumit","rahul","kumar"]; 
console.log(title); 

let[a,b,c] = "abc"; 
console.log(a); 
console.log(b); 
console.log(c); 

let [one1,two2,three3] = new Set([1,2,3]); 
console.log(one1); 
console.log(two2); 
console.log(three3); 


let user = {}; 
[user.name, user.surname] = 'alpha beta'.split(" "); 
console.log(user.name); 


// // swapping values of two variables. 
// let firstName3 = "sumit"; 
// let lastName3 = "kumar"

// [lastName3,firstName3] = [firstName3,lastName3]; 
// console.log(`${firstName3} ${lastName3}`)




const user2 = {
    email:"abcd@gmail.com",
    userName:"sumit"
}

const{email,userName} = user2;
console.log(email); 
console.log(userName)


const employee = {
    empId: 1,
    userName1:"johndoe",
}

const {empId,userName1,depart ="none"} = employee; 
console.log(empId); 
console.log(userName1); 
console.log(depart); 


const car = {
    name:"toyota",
    color:"red"
}
const{name:Carname,color:carcolor,owner = "sumit"} = car; 
console.log(Carname); 


// extracting specific properties using destructuring 

const user5 = {
    name5:"sumit",
    age:21,
    registration_no: 22155135044, 
    roll_no : "22CSE55",
    branch:"cse(iot)"
}
const{name5,registration_no} = user5; 
console.log(name5); 
console.log(registration_no); 

const{name5:name9,registration_no:reg9} = user5; 
console.log(name9); 
console.log(reg9); 




const user10 = {
    name10:"sumit",
    email10:"abc@gmail.com",
    id:"108560435",
    comments:{
        id:"92856",
        date:"21 jan 2023",
        post:"this is a demo example of post"
    }
}

const{name10,email10,id,comments:{post,date}} = user10

console.log(name10); 
console.log(email10); 
console.log(id); 
console.log(post); 
console.log(date);

