// Write a function createDropdownManager to manage the state (open/close) of a dropdown menu


function createDropdownManager() {
  //Your code here
  let isOpen = false;
  return{
     toogle:()=> isOpen = !isOpen,
     getState:()=> isOpen
    }
  }



// Usage
const dropdown = createDropdownManager();
console.log(dropdown.getState()); // false
dropdown.toggle();
console.log(dropdown.getState()); // true

  