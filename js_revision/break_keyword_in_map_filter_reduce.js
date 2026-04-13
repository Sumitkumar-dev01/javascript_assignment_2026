const numbers = [1,2,3,4,5]; 

// using foreach 

numbers.forEach(number => {
    if(number ===3){
        break;
    }
    console.log(number);
})

// illegal break statement 



// using map 

const mapped = numbers.map(number=>{
    if(number === 3){
        break; 
    }
    return number*2; 
})
console.log(mapped); 



// using filter 

const filtered = numbers.filter(number=>{
    if(number === 3){
        break; 
    }
    return true;
})
