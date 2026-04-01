const user = {
    name: "sumit",
    age:22,
    city:"bangalore"
}; 
console.log(user); 
console.log(user.name); 
console.log(user.age); 
console.log(user.city); 


// another method to initialise an object 

const employee = new Object(); 
employee.id = 1;
employee.name = "rahul"; 
employee.city = "patna"; 

console.log(employee); 



// object using this keyword 


// here i am declaring a function 
function Emp(id,name,salary){
    this.id = id;
    this.name = name;
    this.salary = salary
}; 


// let's make an object 

const emp = new Emp(101+" "+"sumit",+" ",80000); 
console.log(emp.id+ " " + emp.name+ " " + emp.salary); 
 

// adding data 
// changing data 
// deleting data 

let data = {
    id: 101,
    name: "sumit",
    salary: 800000
}; 


data.quantity = 20; 
console.log(data); 



// now we are going to change the data 


let data1 = {
    id: 101,
    name: "sumit",
    salary: 800000
}; 

data1.salary = 744555; 
console.log(data1); 
data1.address = "bipard patna"; 
console.log(data1); 


// deleting data from an object using delete keyword 

let summary = {
    name: "rahul", 
    age: 21, 
    course: "development"
}; 

delete summary.name;
console.log(summary); 


// iteration of an object 

const user1 = {
    name:"subham",
    id:"1111",
    department:"development"
}

for(const key in user){
    console.log(`${key}:${user[key]}`); 
}


const user2 = {
    name: "sumit",
    id: 1545, 
    department:"data analyst"
}; 

for(const key in user2){
    console.log(`${key}:${user2[key]}`);
}




// object methods 
var emp1 = {
    name: "alex",
    age:24,
    salary:5000, 
}

console.log(Object.keys(emp1)); 
console.log(Object.values(emp1)); 

// object.enteries()

const emp2 = {
    name:"sumit",
    age: 24,
    salary: 10000000,
}

console.log(Object.entries(emp2))


// object.assign => it is used to cloning project and add extra data to to that object 

let emp3 = {
  name: "sumit",
  age: 27,
  salarY: 100000
}
const newObject = Object.assign({},emp,{role:"developer"}); 
console.log(newObject); 



let data2 = {
    id: 101,
    name: "sumit",
    salary: 800000
}; 

data1.salary = 744555; 
console.log(data2); 

// you can't declare key-value pair in this way if you have to declare you have to use the property 
// like object.assign(); 
data1.address = "bipard patna"; 
console.log(data2); 







