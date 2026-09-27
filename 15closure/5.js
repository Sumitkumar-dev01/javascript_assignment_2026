// Write a function createPermissionManager to 
// manage permissions dynamically based on the 
// user role 


function createPermissionManager() {
  const Permissions = {
    admin:["create","edit","delete","view"],
    editor:["edit","view"],
    viewer:["view"]
  }
  //Your code here
  return{
    hasPermission:(role,action)=>{
      Permissions[role]?.includes(action)|| false
    },

  }

}

// Usage
const permissionManager = createPermissionManager();
console.log(permissionManager.hasPermission('editor', 'edit')); // true
console.log(permissionManager.hasPermission('viewer', 'edit')); // false

  