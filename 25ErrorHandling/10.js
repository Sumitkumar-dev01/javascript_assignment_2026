// Write a function getElement that retrieves
//  an element from an array by index. 
// If the index is out of bounds, throw an error 
// with the message "Index out of range".



function getElement(arr, index) {
 //Your code here
 try{
    if(index<0 || index>=arr.length){
        throw new Error("index out of range"); 
    }
    return arr[index];
 }
 catch(error){
    return error.message;
 }
}

// Function call
console.log(getElement([1, 2, 3], 1)); // Expected output: 2
console.log(getElement([1, 2, 3], 5)); // Expected output: "Index out of range"


  