// three ways to implement a map method 

// function decleration
// arrow function  
// callback function 




let cart_price_as_string  = ["100","200","300","400","500"]; 
// price in array 

let cart_price_as_number = cart_price_as_string.map((items)=>{
    return Number(items);
})
console.log(cart_price_as_number)











// syntax 


let arr  = [1,2,3,4]; 
arr.map((item,index,array)=>{
    // do whatever you want 
})

arr.map(function(item,index,array){
    // do whatever you want
})

// arr.map(callback)



