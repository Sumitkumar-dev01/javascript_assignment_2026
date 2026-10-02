// Write a function getCookieValue that retrieves a cookie's value. If the cookie does not exist, throw an error with the message "Cookie not found".



function getCookieValue(cookieName) {
 //Your code
 try{
    const value = document.cookie.split(';').find(row => row.startsWith(cookieName+'=')); 
    if(!value){
        throw new Error("cookie not found"); 
    }
    return value.split("=")[1]; 
 }
 catch(error){
    return error.message;
 }
}

// Function call (Make sure the cookie "sessionId" is set in your browser)
console.log(getCookieValue("sessionId")); // Expected output: Value of "sessionId" cookie or "Cookie not found"

  