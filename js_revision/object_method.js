/**
 * here are some of the methods of object that you have to keep in mind 
 * object.keys(); 
 * object.values(); 
 * object.enteries(); // return an array in key value pair 
 * object.assign();  // further you can assign key-value pair after creating an object 
 * object.freeze()and object.isfrozen(); 
 * object.seal() and object.isSeal(); 
 * object.fromEnteries(); 
 * object.create(); 
 * object.hasown(); 
 * object.getownpropertyNames(); 
 * object.getownPropertyDescriptor
 * object.getOwnpropetyDescriptor(); 
 * 
 */
 

// object.keys 

var students = {
    name: "sumit",
    branch:"cse-iot",
    class_room_name :  "netlink"
}; 

console.log(Object.keys(students)); 
// object.values(); 

console.log(Object.values(students)); 
// object.enteries(); 
console.log(Object.entries(students)); 

// object.assign(); 
x = Object.assign({address: "bipard"},students); 
console.log(x)

// object.isfreeze and object.isfrozen; 


var students2= {
    name: "rahul",
    address: "iit bhu",
    branch: "mechanical",
}
Object.isFrozen(students2); 

console.log(students2); 


let branch = "cse-iot"; 
console.log(students2); 

// object.seal and object.isseal()


var faculty  = {
    name: "santosh ubhe",
    subject: "sap - abap", 
}

console.log(Object.seal(faculty)); 
faculty.subject = "sap - material managment"; 
console.log(faculty); 



// object.freeze 
var emp1 = {
    name:"rahul", 
    college_name:"iit bhu",
    branch: "electronics"
}


Object.freeze(emp1); 
console.log(emp1); 
console.log(Object.isFrozen(emp1)); 


// object.seal() and object.isSealed()

var emp = {
    name: "sumit",
    age: 22,
    salary: 10000,
}

emp.depart = "web dev" // can be added since run before 
Object.seal(emp); 

emp.id = 1001; 
console.log(Object.isSealed(emp)); 




// object.fromEnteries(); 


const data = [
    ["id","12345"],
    ["username","dummy"],
    ["email","dummy@gmail.com"]
]; 

const dataObj = Object.fromEntries(data); 
console.log(dataObj); 



// object.getownpropertydescriptor()


const userone = {
    userName: "dummy",
    id: "12312",
}; 

const des1 = Object.getOwnPropertyDescriptor(userone,"userName"); 
console.log(des1.configurable); 
console.log(des1.value); 

// object.getownpropertydescriptors(); 

console.log(Object.getOwnPropertyDescriptors(userone)); 



// object.defineProperty()

const user = {}; 
Object.defineProperty(user,"name",{
    value:"sumit",
    writable:false
})


console.log(user.name); 

user.name = "rahul"; 
console.log(user.name); 



// object.defineproperties()

var user2 = {}; 
Object.defineProperties(data,{
    username: {
        value:"sumit",
        writable:true,
        
    }, 

    email:{
        value: "rahul",
        writable:false,
    }
})
console.log(user2.email); 
console.log(user2.name); 
console.log(user2); 



// object.extensible() 

const data5 = {
    username: "sumit",
    email: "sumit@gmail.com"
}

console.log(Object.isExtensible(data5)); 
console.log(Object.preventExtensions(data5)); 

