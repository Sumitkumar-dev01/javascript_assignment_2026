class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    introduce(){
        console.log(`hi, my name is ${this.name} and i am ${this.age} years old`)
    }

}
const p1 = new person("sumit",22);
const p2 = new person("rahul",23); 

p1.introduce(); 
p2.introduce(); 









// question 2 

class Car{
    constructor(brand,model,year){
        this.brand = brand,
        this.model = model,
        this.year = year
    }

    getDetails(){
        console.log(`This is ${this.brand} ${this.model} from ${this.year}`)
    }
}

const C1 = new Car("mercedes","M4",2026); 
const c2 = new Car("toyota","jdj",2026); 

c2.getDetails(); 
C1.getDetails(); 









// question 3 




class BankAccount{
    constructor(accountHolder,balance){
        this.accountHolder = accountHolder; 
        this.balance = balance;
    }

    deposit(amount){
        this.balance += amount;
    }

    withdraw(amount){
        this.balance-= amount; 
    }

    checkBalance(amount){
        console.log(`${this.balance}`); 
    }
}

const acc = new BankAccount("sumit",1000)
acc.deposit(500); 
acc.withdraw(200); 
acc.checkBalance(); 









// question 4 

class Student{
    constructor(name,marks){
        this.name = name;
        this.marks = marks; 
    }

    checkResult(){
        if(this.marks>40){
            console.log("you are pass.")
        }
        else{
            console.log("you are fail")
        }
    }
}


const student1 = new Student("sumit",60); 
student1.checkResult(); 








// question 5   
// question based on inheritance 
// first i take method from parent class and then i override it. 

class Animal{
    speak(){
        console.log("animal makes sound"); 
    }
}

class Dog extends Animal{
    speak(){
        console.log("dog barks")
    }
}


class Cat extends Animal{
    speak(){
        console.log("cat meows")
    }
}

const dog = new Dog(); 
const cat = new Cat(); 

dog.speak(); 
cat.speak(); 






// question 6 
// parent class 
class User{
    constructor(username,email){
        this.username = username,
        this.email = email
    }

}

// child class 

class Admin extends User{
    deleteUser(){
        console.log("user deleted"); 
    }

}

const user1 = new Admin("sumitabc","abc@gmail.com")
const user2 = new Admin("rahulabc","rahulabc@gmail.com")


user1.deleteUser(); 
user2.deleteUser(); 







// question 7 


class Employee {
  #salary;

  setSalary(amount) {
    this.#salary = amount;
  }

  getSalary() {
    return this.#salary;
  }
}

const emp = new Employee();
emp.setSalary(50000);

console.log(emp.getSalary());










// question 8 


class Product{
    constructor(name,price){
        this.name = name; 
        this.price  = price;
    }

    getProduct(){
        console.log(`the price of ${this.name} is ${this.price}`)
    }
}

const product1 = new Product("copy",40); 
product1.getProduct(); 






// question 9 

class Cart{
    addProduct(){
        console.log("product is added successfully"); 
    }
    
    removeProduct(){
        console.log("product is removed successfully"); 
    }

    showCart(){
        console.log("cart is here"); 
    }
}

const Cart1  = new Cart; 
const Cart2 = new Cart; 

Cart1.addProduct(); 
Cart2.removeProduct(); 
Cart1.showCart(); 







// question 10 

class UserAuth{
    login(){
        console.log("user have been logged in successfully")
    }
    logout(){
        console.log("user have been logged out successfully"); 
    }
    register(){
        console.log("user have been registered succesfully"); 
    }
}

const Auth1 = new UserAuth(); 
const Auth2 = new UserAuth(); 

Auth1.login(); 
Auth1.logout(); 
Auth1.register(); 





















