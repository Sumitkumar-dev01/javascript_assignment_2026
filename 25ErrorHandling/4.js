// Write a function updateElementText that updates the text content of a DOM element. If the element does not exist, throw an error with the message "Element not found".


function updateElementText(selector, text) {
 //Your code here
 try{
    const element = document.querySelector(selector); 
    if(!element){
        throw new Error("element not found"); 
    }
    element.textContent = text; 
    return "element updated succesfully"; 
 }catch(error){
    return error.message;
 }

}

// Function call (Make sure there's an element with id 'myDiv' in the HTML)
console.log(updateElementText("#myDiv", "Hello World")); // Expected output: "Element updated successfully"
console.log(updateElementText("#nonExistingElement", "Hello World")); // Expected output: "Element not found"

  