// Write a function simulateFileUpload(fileName, size) that simulates uploading a file. Return a promise that resolves after a delay based on the file size, logging the upload progress every second.


function simulateFileUpload(fileName, size) {
  //Your code here
  return new Promise((resolve)=>{
    let progress = 0; 
    const interval = setInterval(()=>{
      progress += Math.ceil(100/size); 
      console.log(`uploading ${fileName}:${progress}%`)
      if(progress>=100){
        clearInterval(interval); 
        resolve("file uploaded successfully"); 
      }
    },1000)
  })
}

// Example Usage
simulateFileUpload("photo.jpg", 3).then(console.log);

  