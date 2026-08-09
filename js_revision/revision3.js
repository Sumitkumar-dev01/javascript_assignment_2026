try{
    // statements which may throw expections. 
}
catch(error){
    // if an exception is thrown actions to be taken
}

try{
    let obj = undefined;
    console.log(name); 
}
catch(error){
    console.log(error.message); 
}

function connectDB(credentials){
    if(!matchMedia(credentials))
        throw new Error("authentication failed")
}

try{
    // connecting to db. 

    coonectDB(credentials)
}
catch(error){
    //actions
    console.log("error occured while connecting db"); 
    console.log(error.message)
}

// error occured while connecting db
// authentication failed. 

try{
    // statements which may thrown exceptions. 
}catch(error){
    //actions to be taken if exception thrown
}
finally{
    // statements that will be executed in any case, whether error is thrown or not. 
}